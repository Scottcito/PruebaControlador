import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'react-native-vision-camera';
import useCamara from '../../Controlador/Funcamara';
import video from "../Imagenes/video.png";
import foto from "../Imagenes/foto.png";
import salir from "../Imagenes/salir.png";
import cargando from "../Imagenes/logo.png"; 
import styles from '../Css/style';

const CamaraPage = () => {
  const navegar = useNavigation();
  const {
    hasPermission,
    photoUri,
    isSending,
    cameraRef,
    device,
    isActive,
    setIsActive,
    takePhoto,
    enviarFoto
  } = useCamara(navegar);

  if (hasPermission === null) return <Text>Cargando..</Text>;
  if (hasPermission === false) return <Text>No tiene acceso a la cámara</Text>;
  if (device == null) return <Text>Cámara del dispositivo no encontrada</Text>;

  return (
    <View style={styles.containerCamera}>
      {isSending ? (
        <View style={styles.loadingContainerCamera}>
          <Image source={cargando} style={styles.cargandoImagenCamera} />
          <Text style={styles.loadingTextCamera}>Procesando foto...</Text>
        </View>
      ) : photoUri ? (
        <Image source={{ uri: photoUri }} style={styles.photoCamera} />
      ) : (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
          ref={cameraRef}
          photo={true}
          key={isActive}
        />
      )}
      <View style={styles.topButtonContainerCamera}>
        <TouchableOpacity style={styles.topButtonCamera} onPress={() => navegar.navigate('Cameravideo')}>
          <Image style={styles.topButtonImageCamera} source={video} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButtonCamera} onPress={() => navegar.navigate('Traductorseñas')}>
          <Image style={styles.topButtonImageCamera} source={salir} />
        </TouchableOpacity>
      </View>
      {!isSending && (
        <TouchableOpacity style={styles.takePhotoButtonCamera} onPress={takePhoto}>
          <Image style={styles.takePhotoImageCamera} source={foto} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CamaraPage;
