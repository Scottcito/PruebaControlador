import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'react-native-vision-camera';
import Video from 'react-native-video';
import useCamaravideo from '../../Controlador/FunVideo';
import salir from "../Imagenes/salir.png";
import camara from "../Imagenes/camara.png";
import videoini from "../Imagenes/videoini.png";  
import parar from "../Imagenes/parar.png";  
import cargandoImagen from "../Imagenes/logo.png"; 
import styles from '../Css/style';

const Cameravideo = () => {
  const navegar = useNavigation();
  const {
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
    handleGrabarOtro
  } = useCamaravideo(navegar);

  if (hasPermission === null) return <Text>Cargando..</Text>;
  if (hasPermission === false) return <Text>No tiene acceso a la cámara</Text>;
  if (device == null) return <Text>Cámara del dispositivo no encontrada</Text>;

  return (
    <View style={[styles.containervideo, { backgroundColor: 'white' }]}>
      {isSending ? (
        <View style={styles.loadingContainerVideo}>
          <Image source={cargandoImagen} style={styles.cargandoImagen} />
          <Text style={styles.loadingTextVideo}>Procesando video...</Text>
        </View>
      ) : (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            ref={cameraRef}
            video={true}
          />
          <View style={styles.topButtonContainervideo}>
            <TouchableOpacity onPress={() => navegar.navigate('CamaraPage')} style={styles.topButtonvideo}>
              <Image style={styles.topButtonTextvideo} source={camara} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navegar.navigate('Traductorseñas')} style={styles.topButtonvideo}>
              <Image style={styles.topButtonTextvideo} source={salir} />
            </TouchableOpacity>
          </View>
          <View style={styles.timerContainer}>
            <Text style={[styles.timerText, isRecording && styles.recordingText]}>
              {timer}s
            </Text>
          </View>
          <TouchableOpacity
            onPress={isRecording ? stopRecording : startRecording}
            style={styles.recordButton}
          >
            <Image 
              style={styles.recordButtonIcon} 
              source={isRecording ? parar : videoini} 
            />
          </TouchableOpacity>
          {videoUri && (
            <View style={styles.videoPlayerContainer}>
              <Video
                source={{ uri: videoUri }}
                style={styles.videoPlayer}
                controls={true}
                resizeMode="cover"
              />
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default Cameravideo;
