import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../Componentes/Header';
import styles from '../Css/style';
import Boton from '../Componentes/Boton';

const Resultado = () => {
  const navegar = useNavigation();
  const route = useRoute();
  const { labels } = route.params || {}; 

  const handleCamara = () => {
    navegar.navigate('Traductorseñas');
  };

  return (
    <View style={styles.container}>
      <Header titulo="Traductor SenAssist"/>
      <View style={styles.contenedorinput}>
        <TextInput
          style={styles.inputse}
          value={labels} 
          editable={false}
          placeholder="Seña no detectada"
          placeholderTextColor="#147CA6"
        />
      </View>

      <Boton titulo="Regresar" boton={handleCamara} />
    </View>
  );
};

export default Resultado;
