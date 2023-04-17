import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity, Button } from 'react-native';

import Navbar from '../../components/Navbar';
import imgTabela from '../../assets/img/tabela.png';

import { ClimateConditions } from '../../components/ClimateConditions';
import { MotorcycleCircuit } from '../../components/MotorcycleCircuit';
import { EVENTOS } from '../../utils/eventos';
import  TableProgrammer from '../../components/TableProgrammer';

import bancoEstatico from "../../utils/database.json";


export const Detalhes = () => {

  return (
    <>
      <ImageBackground
        source={require('../../assets/img/bgDetalhe.png')}
        style={styles.imageBackground}>
        <StatusBar style="dark" />
        <Navbar style={styles.navbar} />

        <View style={styles.container}>
          <View style={styles.bgOpacity}>

            {/* <View style={styles.viewTitle}>
              <Text style={styles.title}>Circuito  de Portimão</Text>
            </View> */}
{/*             
            <View style={styles.tituloIcones}>
              <Image
                style={styles.iconPercurso}
                source={IconPercurson}
              />
              <Text style={styles.tituloPercurso}>Percurso</Text>

              <Image
                style={styles.iconCurvas}
                source={IconCurva}
              />
              <Text style={styles.tituloPercurso}>Curvas</Text>
            </View>
            <View style={styles.tituloIcones}>

              <Text style={styles.percurso}>props.percurso</Text>

              <Text style={styles.curvas}>15 (7 Direita, 8 Esquerda)</Text>
            </View> */}
            {/* <View style={styles}>
              <Image
                style={styles.imgCircuito}
                source={imgCircuito}
              />
            </View> */}

            {/* <MotorcycleCircuit

            />

            <ClimateConditions
              // temperatura={EVENTOS.clima.temperatura}
            /> */}

            {/* <TableProgrammer
            /> */}

            <Button
              title="Pressione-me"
              onPress={() => console.log('Botão pressionado')}
            />

          </View>
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  imageBackground: {
    
  },
  bgOpacity: {
    backgroundColor: '#000',
    height: 700,
    opacity: 0.66,
    marginBottom: 20
  },
  iconPercurso: {
    marginLeft: 20,
    width: 40,
    height: 40, 
    marginTop: 20
  },
  iconCurvas: {
    marginLeft: 30,
    width: 40,
    height: 40, 
    marginTop: 20
  },
  percurso: {
    marginLeft: 20,
    color: 'white',
    fontSize: 15,
  },
  curvas: {
    marginLeft: 150,
    color: 'white',
    fontSize: 15,
  },
  tituloIcones: {
    flexDirection: 'row',
  },
  navbar: {
    left: 0,
    right: 0,
    height: 50, // altura da barra de navegação
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTitle: {

  },
  title: {
    fontSize: 35,
    color: 'white',
    borderColor: 'black',
    // borderStyle: 'solid',
    // borderWidth: '2',
    textAlign: 'center',
  }
});
