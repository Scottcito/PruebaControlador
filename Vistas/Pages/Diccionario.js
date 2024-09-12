import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';
import buscarIcon from "../Imagenes/bucar.png";
import FastImage from 'react-native-fast-image';
import Header from '../Componentes/Header';
import styles from '../Css/style';
import useDiccionario from '../../Controlador/Fundic';

const Diccionario = () => {
  const {
    buscar,
    setBuscar,
    resultado,
    numColumns,
    letraSeleccionada,
    palabraSeleccionada,
    mostrarAlfabeto,
    setMostrarAlfabeto,
    manejarClickLetra,
    manejarClickPalabra,
    imagenesPorLetra,
    imagenesPorPalabra,
    palabras,
    palabrasCompletas,
  } = useDiccionario();

  const renderItemAlfabeto = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => manejarClickLetra(item)}
    >
      <Text style={styles.palabra}>{item}</Text>
      {letraSeleccionada === item && (
        <FastImage style={styles.imagenSeleccionada} source={imagenesPorLetra[item]} />
      )}
    </TouchableOpacity>
  );

  const renderItemPalabras = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => manejarClickPalabra(item)}
    >
      <Text style={styles.palabra}>{item}</Text>
      {palabraSeleccionada === item && (
        <FastImage style={styles.imagenSeleccionada} source={imagenesPorPalabra[item]} />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.contenedordic}>
      <Header titulo="Diccionario"/>
      
      <View style={styles.buscador}>
        <Image style={styles.img} source={buscarIcon} /> 
        <TextInput
          style={styles.buscar}
          placeholder="Buscar"
          placeholderTextColor="#147CA6"
          value={buscar}
          onChangeText={text => setBuscar(text)} 
        />
      </View>

      <View style={styles.botonesContainer}>
        <TouchableOpacity 
          style={[styles.boton, mostrarAlfabeto && styles.botonActivo]} 
          onPress={() => setMostrarAlfabeto(true)}
        >
          <Text style={styles.botonTexto}>Alfabeto</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.boton, !mostrarAlfabeto && styles.botonActivo]} 
          onPress={() => setMostrarAlfabeto(false)}
        >
          <Text style={styles.botonTexto}>Palabras</Text>
        </TouchableOpacity>
      </View>

      {resultado ? (
        <View>
          <Text style={styles.resultado}>{resultado}</Text>
        </View>
      ) : (
        <FlatList
          style={styles.lista}
          data={mostrarAlfabeto ? palabras : palabrasCompletas}
          renderItem={mostrarAlfabeto ? renderItemAlfabeto : renderItemPalabras}
          keyExtractor={(item) => item}
          numColumns={mostrarAlfabeto ? numColumns : 2}
          key={`${numColumns}-${mostrarAlfabeto ? 'alfabeto' : 'palabras'}`} // Clave única para forzar renderizado
        />
      )}
    </View>
  );
};

export default Diccionario;
