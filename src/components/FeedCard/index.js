import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet, View } from "react-native";

import Barra from '../../assets/img/barra.png';
import IconLocalization from '../../assets/icon/localizacao.png';
// import Icon from "react-native-vector-icons/AntDesign";


export default class FeedCard extends React.Component {

    constructor(props) {
        super(props);

        const {feed, navegador} = this.props;
        this.state = {
            feed: feed,
            navegador: navegador
        }
    }

    exibirDetalhes = () => {
        const { feed, navegador } = this.state;

        navegador.navigate("Detalhes", { feedId: feed._id });
    }

    render = () => {
        const {feed} = this.state;

        return(
            <TouchableOpacity onPress={ () => {
                this.exibirDetalhes();
            }}>          

                        <View style={styles.container}>
                            <View style={styles.content}>
                                <Image
                                    style={styles.imagem}
                                    source={{uri: feed.localImg}}
                                />

                                <View style={styles.textContainer}>
                                    <Text style={styles.date}>{feed.date}</Text>
                                    <Text style={styles.month}>{feed.month}</Text>
                                </View>

                                <Image
                                    style={styles.barra}
                                    source={Barra}
                                />
                                <View>
                                    <Text style={styles.titulo}>{feed.local}</Text>
                                    <View style={styles.circuito}>
                                        <Image
                                        style={styles.iconLocalizacao}
                                        source={IconLocalization}
                                        />
                                        <Text style={styles.textoCircuito}>{feed.circuito}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>                                       

            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      
    },
    content: {
  
      position: 'relative',
      backgroundColor: '#141211',
      opacity: 0.66,
      marginTop: 15,
      height: 85,
      width: 350,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#BF1F2C',
  
      flexDirection: 'row',
      alignItems: 'center',
    },
    imagem: {
      width: 65,
      height: 65,
      marginLeft: 10,
      borderRadius: 50,

    },
    textContainer: {
      alignItems: 'flex-start',
  
    },
    date: {
      fontSize: 35,
      color: '#fff',
      fontWeight: 'bold',
    },
    month: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    barra: {
      marginLeft: 4,
      width: 2,
      height: 70,
    },
    titulo: {
      fontWeight: 'bold',
      color: 'white',
      fontSize: 25,
    },
    iconLocalizacao: {
      width: 25,
      height: 25,
    },
    circuito: {
      flexDirection: 'row',
    },
    textoCircuito: {
      marginTop: 10,
      color: 'white',
    },
});