import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  //Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo:{
        width: 100,
        height: 100,
        marginRight: 20,
    },
    headerText: {
        fontSize: 25,
        color: '#147CA6',
    },
    cambiar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        marginBottom: 30, 
        paddingVertical: 10,
        width: Dimensions.get('window').width * 0.9, 
    },
    Button: {
        paddingHorizontal: 10,
    },
    imagen: {
      width: Dimensions.get('window').width * 0.08, 
      height: Dimensions.get('window').width * 0.08, 
    },
    Texto: {
        fontSize: 18,
        color: '#147CA6',
        marginHorizontal: 10,
    },
    //Traductor
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 30,
      },
      contendedorinput: {
        marginBottom: 20,
        width: Dimensions.get('window').width * 0.9, 
      },
      inputexto: {
        fontSize: 26,
        color: '#147CA6',
        marginBottom: 10,
        textAlign:"justify"
      },
      input: {
        borderWidth: 1,
        height: 150,
        width: '100%',
        color: '#147CA6',
        fontSize:18
      },
      inputimg:{
        borderWidth: 1,
        padding:2,
        height: Dimensions.get('window').height * 0.3,
        width: Dimensions.get('window').width * 0.9, 
        color: '#147CA6',
        justifyContent: 'center',
        alignItems: 'center',
       

      },
      //traductorseñas
      camaraButton: {
        backgroundColor: '#147CA6',
        borderRadius: 20,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 10,
      },
      camaraText: {
        fontSize: 18,
        color: 'white',
      },
      buttonContainer: {
        width: Dimensions.get('window').width * 0.95, 
        paddingHorizontal: 10,
      },
      contenedorinput: {
        marginBottom: 20,
        width: Dimensions.get('window').width * 0.9, 
      },
      inputse:{
        borderWidth: 1,
        height: 150,
        width: '100%',
        color: '#147CA6',
        fontSize:25},
      //camera
      containerCamera: {
        flex: 1,
        backgroundColor: 'black',
      },
      topButtonContainerCamera: {
        position: 'absolute',
        top: 40,
        right: 20,
        flexDirection: 'column',
        alignItems: 'flex-end',
      },
      topButtonCamera: {
        marginBottom: 10,
        backgroundColor: '#00000088',
        borderRadius: 30,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topButtonImageCamera: {
        width: 40,
        height: 40,
      },
      takePhotoButtonCamera: {
        position: 'absolute',
        bottom: 30,
        borderRadius: 30,
        left: '50%',
        backgroundColor: '#00000088',
        transform: [{ translateX: -40 }], 
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        
        // Efecto 3D
        perspective: 1000,
        transform: [
          { translateX: -40 }, 
          { rotateY: '15deg' }, 
        ],
      },
      takePhotoImageCamera: {
        width: 95,
        height: 95,
        transform: [{ rotateY: '-15deg' }],
      },
      photoCamera: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      loadingContainerCamera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      cargandoImagenCamera: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      loadingTextCamera: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      //video
      containervideo: {
        flex: 1,
        backgroundColor: 'black',
      },
      topButtonContainervideo: {
        position: 'absolute',
        top: 40,
        right: 20,
        flexDirection: 'column', 
        alignItems: 'flex-end',
      },
      topButtonvideo: {
        marginBottom: 10,
        backgroundColor: '#00000088',
        borderRadius: 30,
        width: 50, 
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:1000
      },
      topButtonCamera: {
        marginBottom: 10,
        backgroundColor: '#00000088',
        borderRadius: 30,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topButtonTextvideo: {
        width: 40, 
        height: 40,
      },
      timerContainer: {
        position: 'absolute',
        top: 20,
        left: '15%',
        transform: [{ translateX: -50 }],
        width: '100%',
        alignItems: 'center',
      },
      timerText: {
        fontSize: 40,
        color: '#fff', 
        fontWeight: 'bold',
      },
      recordingText: {
        color: '#ff0000', 
      },
      recordButton: {
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: [{ translateX: -45 }], 
        width: 90, 
        height: 90,
        backgroundColor: '#00000058',
        borderRadius: 45, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      recordButtonIcon: {
        width: 90,
        height: 90,
      },
      videoPlayerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      videoPlayer: {
        width: '100%',
        height: '100%',
      },
      loadingContainerVideo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      cargandoImagen: {
        width: 100,
        height: 100,
        marginBottom: 20,
      },
      loadingTextVideo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
    //Diccionario
    contenedordic: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 10,
    },
    palabra: {
      color: 'black',
      fontSize: 29,
      textAlign: 'center',
    },
    buscador: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#147CA6',
      width: '100%',
      height: 50,
      marginBottom: 10,
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    img: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    buscar: {
      flex: 1,
      fontSize: 18,
      color: '#147CA6',
    },
    lista: {
      flex: 1,
      width: '100%',
    },
    resultado: {
      color: 'black',
      fontSize: 30,
    },
    itemContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
    imagenSeleccionada: {
      marginTop: 10,
      width: '100%', 
      height:100,
    },
     
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  boton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  botonActivo: {
    backgroundColor: '#147CA6',
  },
  botonTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
    // componente image
    containercomponent: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    imagecomponent: {
      width: 180, 
      height: 200,
      borderRadius: 10,
    },
    loadingContainer: {
      marginBottom: '50%', 
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      marginTop: 2, 
      fontSize: 16,
      color: '#000', 
    },
    inputextocomponent: {
      fontSize: 28,
      color: '#147CA6',
    },
  //fun maestro
  containerfun: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //inicio
  containerini: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title2: {
    fontSize: 24,
    marginBottom: 20,
    color: '#147CA6',
    textAlign: 'center',
  },
  imagelogoini: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttonContainerini: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  buttonredi: {
    width: '45%',
    marginVertical: 10,
  },
});

export default styles;