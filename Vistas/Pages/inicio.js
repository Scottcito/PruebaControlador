import React from 'react';
import { View, Text, Image, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Css/style';
import logo from "../Imagenes/logo.png"

const Inicio = () => {
  const navegar = useNavigation();

  const Diccionario = () => {
    navegar.navigate('Diccionario');
  };

  const Traductor = () => {
    navegar.navigate('Inicio traductor');
  };

  return (
    <View style={styles.containerini}>
      <Text style={styles.title2}>SenAssist</Text>
      <Image source={logo} style={styles.imagelogoini} />
      <View style={styles.buttonContainerini}>
        <View style={styles.buttonredi}>
          <Button
            title="Diccionario de palabras"
            color="#147CA6"
            onPress={Diccionario}
          />
        </View>
        <View style={styles.buttonredi}>
          <Button
            title="Traductor SenAssist"
            color="#147CA6"
            onPress={Traductor}
          />
        </View>
      </View>
    </View>
  );
};
export default Inicio;
