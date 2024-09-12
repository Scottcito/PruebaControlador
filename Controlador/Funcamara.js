// useCamara.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import axios from 'axios';

const url1 = 'https://web-production-bad2.up.railway.app/predict';

const useCamara = (navegar) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
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
      };
    }, [])
  );

  const createFormData = (uri) => {
    const formData = new FormData();
    formData.append('file', {
      uri: uri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });
    return formData;
  };

  const enviarFoto = async (uri) => {
    setIsSending(true);
    try {
      const formData = createFormData(uri);
      const res = await axios.post(url1, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const { data } = res;
      const labels = data.labels.join(', '); 
      navegar.navigate('Resultado', { labels });
    } catch (error) {
      Alert.alert('Error', 'Error al enviar la foto', [{ text: 'OK', onPress: () => navegar.navigate('CamaraPage') }], { cancelable: false });
    } finally {
      setIsSending(false);
      setPhotoUri(null);
    }
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePhoto({ flash: 'off' });
        const uri = `file://${photo.path}`;
        setPhotoUri(uri);
        setTimeout(() => {
          Alert.alert(
            "Confirmación",
            "¿Quieres guardar esta foto?",
            [
              { text: "No", onPress: () => setPhotoUri(null), style: "cancel" },
              { text: "Sí", onPress: () => enviarFoto(uri) }
            ],
            { cancelable: false }
          );
        }, 2000);
      } catch (error) {
        console.error('Error al tomar la foto:', error.message || error);
      }
    }
  };

  return {
    hasPermission,
    photoUri,
    isSending,
    cameraRef,
    device,
    isActive,
    setIsActive,
    takePhoto,
    enviarFoto
  };
};

export default useCamara;
