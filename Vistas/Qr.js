import React from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import logo from "./Imagenes/logo.png"



const QRGenerator = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <QRCode
  value="https://drive.google.com/uc?export=download&id=1V_ACQ81LC2lUjNjhIUccGne5sWVPs1VI"
  size={300}
  color="black"
  backgroundColor="white"
/>

    </View>
  );
};

export default QRGenerator;
