import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Traductor from './Vistas/Pages/Traductor';
import Traductorseñas from './Vistas/Pages/Traductorseñas';
import Diccionario from './Vistas/Pages/Diccionario';
import CamaraPage from './Vistas/Componentes/CamaraPage';
import Inicio from './Vistas/Pages/inicio';
import Traductorinicio from './Vistas/Pages/Traductorinicio';
import Cameravideo from './Vistas/Componentes/Cameravideo';
import Resultado from './Vistas/Pages/Resultado';
import QRGenerator from './Vistas/Qr';
const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer> 
      <Stack.Navigator>
       <Stack.Screen name="Inicio" component={Inicio} />
       <Stack.Screen name="Traductorseñas" component={Traductorseñas}/>
        <Stack.Screen name="Diccionario" component={Diccionario} />
        <Stack.Screen name="Inicio traductor" component={Traductorinicio} />
        <Stack.Screen name="QRGenerator" component={QRGenerator} />
        <Stack.Screen name="Traductor" component={Traductor} />
        <Stack.Screen name="Resultado" component={Resultado} />
        <Stack.Screen name="Cameravideo" component={Cameravideo} options={{headerShown:false}} />
        <Stack.Screen name="CamaraPage" component={CamaraPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

