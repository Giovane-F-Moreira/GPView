import React from "react";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, FlatList, TextInput, Image, ScrollView } from 'react-native';
import { Header } from "react-native-elements";
import { EventCard } from "../../components/EventCard";

import SearchBar from '../../components/SearchBar';
import FeedCard from "../../components/FeedCard";
import logo from '../../assets/img/logo.png';
import { eventos } from "../../utils/database.json";


import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";


import { CentralizadoNaMesmaLinha, EsquerdaDaMesmaLinha, EntradaNomeCircuito } from "../../assets/styles";

const FEEDS_POR_PAGINA = 4;

export default class Feeds extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        feeds: [],
        proximaPagina: 1,
        atualizando: false,

        usuario: null, 

        nomeCircuito: null,
        filtrando: false
    };
  }

  render = ()=> {
    return (
      <>
        <StatusBar style="dark" />

        <ImageBackground
          source={require('../../assets/img/bg.jpg')}
          style={styles.imageBackground}
        >

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
        {this.mostrarFeeds()}

        </ImageBackground>
      </>
    )
  }


  mostrarFeeds = () => {
    return (
      <>
        <View style={styles.content}>

          <View>{this.mostrarBarraDePesquisa()}</View>

          {/* <SearchBar></SearchBar> */}

          <FlatList
            data={eventos}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <FeedCard key={item.id} feedId={item.id} feed={item} navegador={this.props.navigation} />
            }
          />
        </View>
      </>  
    );   
  }

  mostrarBarraDePesquisa = () => {
    const { nomeCircuito } = this.state;

    return (
        <EsquerdaDaMesmaLinha>
          <View>
          <TextInput
            style={styles.searchInput}
            onChangeText={(nome) => {
              this.atualizarNomeCircuito(nome);
            }}
            value={nomeCircuito}
            placeholder="Digite sua pesquisa"
          />

          </View>
          <IconIon style={styles.iconBuscar} size={38} name="md-search-circle-outline"
              onPress={
                () => {
                  this.filtrarFeeds()
                }
              } 
          />
          <TextInput 
            >
            {/* <IconIon style={styles.iconBuscar} size={38} name="md-search-circle-outline"
              onPress={
                () => {
                  this.filtrarFeeds()
                }
              } 
              /> */}
          </TextInput>
        </EsquerdaDaMesmaLinha>
    );
  }


  filtrarFeeds = () => {
    const feedsEstaticos = eventos; 
    // console.log('\n\n\n\n\ Feed Estaticos: ',feedsEstaticos)
    const { nomeCircuito } = this.state;

    let feeds = feedsEstaticos.filter((evento) =>
      evento.circuito.toLowerCase().includes(
        nomeCircuito.toLowerCase()
      ));
    console.log('\n\n\n\n\ ============== CIRCUITO FILTRADO: ',feeds)
    if (feeds.length > 2) {
      feeds = feeds.slice(0, 2);
    }

    this.setState({
      feeds: feeds,
      atualizando: false,
      filtrando: true
    });
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
  searchInput:{
    backgroundColor: 'white',
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: '#BF1F2C',
    borderRadius: 10,
    width: 250,
    height: 50,
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
  iconBuscar:{
    marginTop: 6,
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: 'white',
  }
});

