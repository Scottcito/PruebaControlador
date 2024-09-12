
import { useState, useEffect } from 'react';
const remover = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

const imagenesPorLetra = {
    "A": require("../Vistas/Imagenes/A.jpeg"),
    "B": require("../Vistas/Imagenes/B.jpeg"),
    "C": require("../Vistas/Imagenes/C.jpeg"),
    "D": require("../Vistas/Imagenes/D.jpeg"),
    "E": require("../Vistas/Imagenes/E.jpeg"),
    "F": require("../Vistas/Imagenes/F2.jpeg"),
    "I": require("../Vistas/Imagenes/I2.jpeg"),
    "K": require("../Vistas/Imagenes/K.jpeg"),
    "L": require("../Vistas/Imagenes/L.jpeg"),
    "M": require("../Vistas/Imagenes/M.jpeg"),
    "N": require("../Vistas/Imagenes/N.jpeg"),
    "O": require("../Vistas/Imagenes/O.jpeg"),
    "P": require("../Vistas/Imagenes/P.jpeg"),
    "Q": require("../Vistas/Imagenes/Q.jpeg"),
    "R": require("../Vistas/Imagenes/R.jpeg"),
    "T": require("../Vistas/Imagenes/T.jpeg"),
    "U": require("../Vistas/Imagenes/U.jpeg"),
    "V": require("../Vistas/Imagenes/V.jpeg"),
    "W": require("../Vistas/Imagenes/W.jpeg"),
    "X": require("../Vistas/Imagenes/X.jpeg"),
    "Y": require("../Vistas/Imagenes/Y.jpeg"),
};

const imagenesPorPalabra = {
  "Buenos días": require("../Vistas/Imagenes/homer.gif"),
};

const useDiccionario = () => {
  const palabras = [
    "A", "B", "C", "D", "E", "F", "I", "K", "L", "M",
    "N", "O", "P", "Q", "R", "T", "U", "V", "W", "X", "Y"
  ];

  const palabrasCompletas = [
    "Buenos días", "Buenas tardes", "Buenas noches", "Hola", "Adiós",
  ];

  const [buscar, setBuscar] = useState('');
  const [resultado, setResultado] = useState('');
  const [numColumns, setNumColumns] = useState(3);
  const [letraSeleccionada, setLetraSeleccionada] = useState(null);
  const [palabraSeleccionada, setPalabraSeleccionada] = useState(null); 
  const [mostrarAlfabeto, setMostrarAlfabeto] = useState(true);

  useEffect(() => {
    const query = remover(buscar.trim().toLowerCase());
    if (mostrarAlfabeto) {
      if (query === '') {
        setResultado(''); 
      } else {
        const search = palabras.find(palabra => remover(palabra.toLowerCase()) === query);
        setResultado(search ? ` ${search}` : 'Letra no encontrada');
      }
    } else {
      if (query === '') {
        setResultado(''); 
      } else {
        const search = palabrasCompletas.find(palabra => remover(palabra.toLowerCase()) === query);
        setResultado(search ? search : 'Palabra no encontrada');
      }
    }
  }, [buscar, mostrarAlfabeto]);

  const manejarClickLetra = (letra) => {
    setLetraSeleccionada(letraSeleccionada === letra ? null : letra);
    setPalabraSeleccionada(null); 
  };

  const manejarClickPalabra = (palabra) => {
    setPalabraSeleccionada(palabraSeleccionada === palabra ? null : palabra);
    setLetraSeleccionada(null); 
  };

  return {
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
  };
};

export default useDiccionario;
