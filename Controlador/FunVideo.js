// useCamaravideo.js
import { useState, useRef, useCallback, useEffect } from 'react';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

const url = 'https://web-production-bad2.up.railway.app/predict_video';

const useCamaravideo = (navegar) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [videoUri, setVideoUri] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [timer, setTimer] = useState(0);
  const [recordingInterval, setRecordingInterval] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const cameraRef = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const requestPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      setHasPermission(permission === 'authorized');
    };
    requestPermission();
  }, []);

  useFocusEffect(
    useCallback(() => {
      setIsActive(true);
      return () => {
        setIsActive(false);
        clearInterval(recordingInterval);
      };
    }, [recordingInterval])
  );

  const createFormData = (uri) => {
    const formData = new FormData();
    formData.append('file', {
      uri: uri,
      type: 'video/mp4',
      name: 'video.mp4',
    });
    return formData;
  };

  const enviarVideo = async (uri) => {
    setIsSending(true);
    try {
      const formData = createFormData(uri);
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Error de red al enviar el video');
      }

      const { data } = await response.json();
      const labels = data.labels.join(', ');
      navegar.navigate('Resultado', { labels });
    } catch (error) {
      Alert.alert(
        'Error',
        'No se pudo enviar el video. Inténtalo de nuevo.',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      console.error('Error al enviar el video:', error.message || error);
    } finally {
      setIsSending(false);
      setVideoUri(null);
    }
  };

  const startRecording = async () => {
    if (cameraRef.current && !isRecording) {
      try {
        setIsRecording(true);
        setTimer(0);
        const interval = setInterval(() => {
          setTimer(prev => prev + 1);
        }, 1000);
        setRecordingInterval(interval);

        await cameraRef.current.startRecording({
          flash: 'on',
          onRecordingFinished: async (video) => {
            clearInterval(interval);
            const videoPath = video.path;
            setVideoUri(videoPath);

            setTimeout(() => {
              Alert.alert(
                'Confirmación',
                '¿Quieres guardar este video?',
                [
                  { text: 'NO', onPress: () => handleGrabarOtro(), style: 'cancel' },
                  { text: 'SÍ', onPress: () => handleSaveVideo(videoPath) },
                ],
                { cancelable: false }
              );
            }, 4000);
          },
          onRecordingError: (error) => {
            clearInterval(interval);
            console.error('Error al grabar video:', error);
            setIsRecording(false);
          },
        });
      } catch (error) {
        clearInterval(recordingInterval);
        console.error('Error al iniciar la grabación:', error);
        setIsRecording(false);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current && isRecording) {
      try {
        await cameraRef.current.stopRecording();
        setIsRecording(false);
        clearInterval(recordingInterval);
      } catch (error) {
        console.error('Error al detener la grabación:', error);
      }
    }
  };

  const handleSaveVideo = async (videoPath) => {
    await enviarVideo(videoPath);
  };

  const handleGrabarOtro = () => {
    setVideoUri(null);
    setIsActive(true);
    setTimer(0);
    clearInterval(recordingInterval);
    setRecordingInterval(null);
  };

  return {
    hasPermission,
    videoUri,
    isRecording,
    timer,
    isSending,
    cameraRef,
    device,
    isActive,
    startRecording,
    stopRecording,
    handleSaveVideo,
    handleGrabarOtro,
  };
};

export default useCamaravideo;
