import React, { useEffect, useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, FlatList, Image } from 'react-native';
import { Header } from "react-native-elements";


import logo from '../../assets/img/logo.png';

import Icon from "react-native-vector-icons/Entypo";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEvil from "react-native-vector-icons/EvilIcons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";

import InfoCircuit from '../../components/InfoCircuit';
import DetalheClima from '../../components/DetalheClima';
import { eventos } from '../../utils/database.json';
import TableEvent from '../../components/TableEvent';

import { CentralizadoNaMesmaLinha, EntradaNomeCircuito } from "../../assets/styles";

export default class Detalhes extends React.Component {

  constructor(props) {
    super(props);

    const { feedId } = this.props.navigation.state.params;
    // console.log("-------- Eventos: ",eventos)
    this.state = {
        feedId: feedId,
        feed: null,
        comentarios: [],
        proximaPagina: 1,
        atualizandoComentarios: false,

        textoNovoComentario: null,
        telaNovoComentarioVisivel: false,

        usuario: null
      }
      // console.log("\n\n\n\nItem encontrado: ",eventos.find(({id}) => id === this.state.feedId), '\n\n\n\n')
  }

  circuito = () => eventos.find(({id}) => id === this.state.feedId)

  render = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/img/bgDetalhe.png')} 
      >
        <StatusBar style="dark" />

        <Header  backgroundColor='#BF1F2C'
          leftComponent={
            <IconAnt size={28} name="arrowleft" onPress={() => {
                this.props.navigation.goBack();
            }} />
          }

          centerComponent={
            <CentralizadoNaMesmaLinha>
              <Image
                style={{ width: 150, height: 40}}
                source={logo}
              />
            </CentralizadoNaMesmaLinha>
          }

          rightComponent={
            <CentralizadoNaMesmaLinha>
              {/* <IconEvil size={50} name="user" onPress={() => {
                  this.props.navigation.goBack();
              }} /> */}
            </CentralizadoNaMesmaLinha>
          }
        />
        <View style={styles.container}>
          <View style={styles.bgOpacity}>

            <InfoCircuit data={this.circuito()} />

            <DetalheClima eventos={this.circuito()} />

            <TableEvent eventos={this.circuito()} />

            <TableEvent eventos={this.circuito()} />
          </View>
        </View>
      </ImageBackground>
    </>
    ) 
  }

}


const styles = StyleSheet.create({
  container: {

  },
  header:{
    backgroundColor: '#fff',
    color: '#FFF'
  },
  imageBackground: {
    
  },
  bgOpacity: {
    backgroundColor: '#000',
    height: 750,
    opacity: 0.66,
    marginBottom: 20
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
});
