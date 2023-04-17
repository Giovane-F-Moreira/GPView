import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import  Feeds  from './src/screens/Feeds';
import { Detalhes } from './src/screens/Detalhes';

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


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
        {/* <Stack.Navigator initialRouteName="Feeds">
          <Stack.Screen name="Home" component={Feeds} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator> */}
        <Contenedor></Contenedor>
      </NavigationContainer> 
    </>
  );
}