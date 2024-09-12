import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button,Image} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import ComponenteImage from '../../API/ComponenteImage.js';
import styles from '../Css/style.js';
import Header from '../Componentes/Header.js';
import Textinput from '../Componentes/Textinput.js';
import Boton from '../Componentes/Boton.js';

const Traductor = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { texto, data } = route.params; 
    const [inputText, setInputText] = useState('');
  
    useEffect(() => {
      setInputText(texto);
    }, [texto]);
  
    const handlevolver = () => {
      navigation.navigate('Inicio traductor');
    };
  
    return (
      <View style={styles.container}>
        <Header titulo="Traductor SenAssist"/>
        <Textinput texto="Escrito" value={inputText} onChangeText={setInputText} editable={false}/>
        <View style={styles.contendedorinput}>
          <Text style={styles.inputexto}>Señas</Text>
          <View style={styles.inputimg}>
            <ComponenteImage imagen_palabra={data.imagen_palabra} />
          </View>
        </View>
        <Boton titulo="Regresar" boton={handlevolver}/>
      </View>
    );
  };
  
  export default Traductor;