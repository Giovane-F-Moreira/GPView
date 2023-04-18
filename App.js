import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import  Feeds  from './src/screens/Feeds';
import  Detalhes from './src/screens/Detalhes';

const Navegador = createStackNavigator(
  {
    Feeds: { screen: Feeds },
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
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        <Contenedor></Contenedor>
      </NavigationContainer> 
    </>
  );
}