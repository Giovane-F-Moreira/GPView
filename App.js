import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from "react-native-popup-menu";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from './src/screens/Home';
import { Detalhes } from './src/screens/Detalhes'

const Navegador = createStackNavigator(
  {
    Home: { screen: Home },
    Detalhes: { screen: Detalhes }
  },
  {
    headerMode: "none"
  }
);

const Contenedor = createAppContainer(Navegador)

export default function App() {
  return (
    <>
       <MenuProvider>
        <StatusBar style='dark'/>
        <Contenedor></Contenedor>
       </MenuProvider>
    </>  
  );
}