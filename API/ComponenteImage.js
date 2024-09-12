import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

class ComponenteImage extends React.Component {
    render() {
        const { imagen_palabra } = this.props;
        return (
            <View>
                {imagen_palabra ? (
                    <Image style={styles.image} source={{ uri: imagen_palabra }} />
                ) : (
                    <Text style={styles.inputexto}>No hay imagen disponible</Text>
                )}
            </View>
        );
    }
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 130,
        resizeMode: 'cover',
    },
    inputexto: {
        fontSize: 25,
        color: '#147CA6',
        marginTop:50
      }
}); 

export default ComponenteImage;
