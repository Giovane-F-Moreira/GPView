import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { MenuProvider } from "react-native-popup-menu";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  Feeds  from './src/screens/Home';
import { Detalhes } from './src/screens/Detalhes';

// const Navegador = createStackNavigator(
//   {
//     Feeds: { screen: Feeds },
//     Detalhes: { screen: Detalhes }
//   },
//   {
//     headerMode: "none"
//   }
// );

// const Contenedor = createAppContainer(Navegador)

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={"#fff"} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feeds">
          <Stack.Screen name="Feeds" component={Feeds} />
          <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
        {/* <Contenedor></Contenedor> */}
      </NavigationContainer> 
    </>
  );
}