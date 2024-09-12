import React from "react";
import { View,Button } from 'react-native';
import styles from "../Css/style";

const Boton = ({titulo,boton}) => {
    return(
        <View style={styles.buttonContainer}>
        <Button
            title={titulo}
            color="#147CA6"
            onPress={boton}
        />
    </View>
    );
};
export default Boton

