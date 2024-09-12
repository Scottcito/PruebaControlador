import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Componentes/Header';
import styles from '../Css/style';
import Cambiar from '../Componentes/Cambiar';


const Traductorseñas = () => {
  const navegar = useNavigation();

  const handleTexto = () => {
    navegar.navigate('Inicio traductor');
  };

  const handleCamara = () => {
    navegar.navigate('CamaraPage');
  };

  return (
    <View style={styles.container}>
     <Header titulo="Traductor SenAssist"/>
     <Cambiar texto1="Señas" texto2="Escrito" cambiar2={handleTexto}/>

      {/* Entrada de texto de señas */}
      <View style={styles.contenedorinput}>
        <Text style={styles.inputexto}>Haga clic en el botón "Activar camara" y realice los movimientos de la seña a interpretar</Text>
        <TouchableOpacity style={styles.camaraButton} onPress={handleCamara}>
          <Text style={styles.camaraText}>📷 Activar cámara</Text>
        </TouchableOpacity>
      </View>
    
  
    </View>
  );
};

export default Traductorseñas;
