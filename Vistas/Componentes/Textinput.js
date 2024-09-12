
import React from "react";
import { View, Text,TextInput} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from "../Css/style";
const Textinput = ({value, onChangeText,texto,editable,placeholder}) => {
    const navigation = useNavigation();
    
    return(
        <View style={styles.contendedorinput}>
        <Text style={styles.inputexto}>{texto}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#147CA6"
            value={value}
            onChangeText={onChangeText}
            editable={editable}
        />
        </View>
    );
};
export default Textinput

