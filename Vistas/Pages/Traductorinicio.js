import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Componentes/Header';
import Cambiar from '../Componentes/Cambiar';
import Textinput from '../Componentes/Textinput';
import Boton from '../Componentes/Boton';
import useTraductor from '../../Controlador/Funtra';
import styles from '../Css/style';

const Traductorinicio = () => {
    const navigation = useNavigation();
    const { texto, setTexto, data, traducirTexto } = useTraductor();

    const presionar = async () => {
        const resultado = await traducirTexto(texto);
        navigation.navigate('Traductor', { texto, data: resultado });
    };

    const handleSeñas = () => {
        navigation.navigate('Traductorseñas');
    };

    return (
        <View style={styles.container}>
            <Header titulo="Traductor SenAssist"/>
            <Cambiar texto1="Escrito" texto2="Señas" cambiar2={handleSeñas}/>
            <Textinput value={texto} onChangeText={setTexto} texto="Escrito" placeholder="Ingrese texto a traducir"/>
            <Boton titulo="Traducir" boton={presionar}/>
        </View>
    );
};

export default Traductorinicio;
