import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import cambiar from '../Imagenes/cambiar.png';
import styles from "../Css/style";

const Cambiar = ({texto1, texto2, cambiar2}) => {
    const navigation = useNavigation();
    
    return(
        <View>
            <View style={styles.cambiar}>
                <Text style={styles.Texto}>{texto1}</Text>
                <TouchableOpacity style={styles.Button} onPress={cambiar2}>
                    <Image source={cambiar} style={styles.imagen} />
                </TouchableOpacity>
                <Text style={styles.Texto}>{texto2}</Text>
            </View>

        </View>
    );
};
export default Cambiar

