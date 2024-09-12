import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import logo from '../Imagenes/logo.png';
import styles from "../Css/style";

const Header = ({titulo}) => {
    return(
            <View style={styles.header}>
                <Image source={logo} style={styles.logo} />
                <Text style={styles.headerText}>{titulo}</Text>
            </View>
    );
};
export default Header

