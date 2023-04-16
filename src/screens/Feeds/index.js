import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, FlatList, TextInput } from 'react-native';

import SearchBar from '../../components/SearchBar';
import Navbar from '../../components/Navbar';

import { EVENTOS } from "../../utils/eventos";
import { EventCard } from "../../components/EventCard";


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
          <Navbar style={styles.navbar} />

          <View style={styles.content}>
            {/* <TextInput 
              placeholderTextColor="#ffffff"
              placeholder="Buscar"
              style={styles.input}
            /> */}
            <SearchBar></SearchBar>
            <FlatList 
              data={EVENTOS}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => 
                <EventCard
                  img={item.localImg}
                  date={item.date}
                  month={item.month}
                  local={item.local}
                  circuito={item.circuito}
                  navegador={this.props.navigation}
                />
              }
            >
            </FlatList>
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

