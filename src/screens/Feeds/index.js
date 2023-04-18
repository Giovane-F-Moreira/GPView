import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, FlatList, TextInput, Image } from 'react-native';
import { Header } from "react-native-elements";
import { EventCard } from "../../components/EventCard";
import { EVENTOS } from "../../utils/eventos";

import SearchBar from '../../components/SearchBar';
import FeedCard from "../../components/FeedCard";
import logo from '../../assets/img/logo.png';
import { eventos } from "../../utils/database.json";

import Icon from "react-native-vector-icons/Entypo";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconEvil from "react-native-vector-icons/EvilIcons";
import IconSimple from "react-native-vector-icons/SimpleLineIcons";

import {
  CentralizadoNaMesmaLinha,
} from "../../assets/styles";

export default class Feeds extends React.Component {

  render = ()=> {
    return (
      <>
        {this.mostrarFeeds()}
      </>
    )
  }

  mostrarFeeds = () => {
    return (
      <>
        <ImageBackground
          source={require('../../assets/img/bg.jpg')}
          style={styles.imageBackground}>

          <StatusBar style="dark" />
          <Header  backgroundColor='#BF1F2C'
            leftComponent={
              <CentralizadoNaMesmaLinha>

              </CentralizadoNaMesmaLinha>
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

          <View style={styles.content}>

            <SearchBar></SearchBar>
            <FlatList
              data={eventos}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => <FeedCard key={item.id} feedId={item.id} feed={item} navegador={this.props.navigation} />
              }
            />
          </View>
        </ImageBackground>
      </>  
    );
      
  }
}

const styles = StyleSheet.create({
  navbar: {
    left: 0,
    right: 0,
    height: 50, // altura da barra de navegação
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInput: {
    backgroundColor: "#67686D",
    height: 42,
    padding: 10,
    borderRadius: 16,
    marginTop: 24,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  content: {
    marginTop: 30, // espaço para a barra de navegação
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

