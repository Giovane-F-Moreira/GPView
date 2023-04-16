import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import Navbar from '../../components/Navbar';

import IconPercurson from '../../assets/icon/pista-de-corrida.png';
import IconCurva from '../../assets/icon/curvas.png';
import imgCircuito from '../../assets/img/portimao.png';
import imgNuvem from '../../assets/icon/nublado.png';
import imgUmidade from '../../assets/icon/pingo-dagua.png';
import imgBiruta from '../../assets/icon/biruta.png';
import imgTabela from '../../assets/img/tabela.png';

export const Detalhes = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/img/bgDetalhe.png')}
        style={styles.imageBackground}>
        <StatusBar style="dark" />
        <Navbar style={styles.navbar} />

        <View style={styles.container}>
          <View style={styles.viewTitle}>
            <Text style={styles.title}>Circuito Portimão</Text>
          </View>
          
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

            <Text style={styles.percurso}>4.6 Km</Text>

            <Text style={styles.curvas}>15 (7 Direita, 8 Esquerda)</Text>
          </View>
          <View style={styles}>
            <Image
              style={styles.imgCircuito}
              source={imgCircuito}
            />
          </View>
          <View style={styles.containerClima}>
            <Text style={styles.titleClima}>Condições Climaticas</Text>
            <View style={styles.tituloIcones}>
              <Image
                style={styles.imgNuvem}
                source={imgNuvem}
              />
              <Text style={styles.textTemp}>13° C</Text>

              <Image
                style={styles.iconUmidade}
                source={imgUmidade}
              />
              <Text style={styles.textTemp}>64%</Text>

              <Image
                style={styles.iconBiruta}
                source={imgBiruta}
              />
              <Text style={styles.textTemp}>7.1 m/s</Text>
            </View>
          </View>
          <Image
                style={styles.imgemTabela}
                source={imgTabela}
              />
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
  iconPercurso: {
    width: 40,
    height: 40, 
    marginTop: 20
  },
  iconCurvas: {
    marginLeft: 40,
    width: 40,
    height: 40, 
    marginTop: 20
  },
  percurso: {
    color: 'white',
    fontSize: 15,
  },
  curvas: {
    marginLeft: 160,
    color: 'white',
    fontSize: 15,
  },
  tituloPercurso: {
    marginTop: 20,
    color: 'white',
    fontSize: 30,
  },
  tituloIcones: {
    flexDirection: 'row',
  },
  imgCircuito: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 20,
    width: 350,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerClima: {
    backgroundColor: '#000',
    height: 100,
    opacity: 0.66,
    marginBottom: 20
  },
  imgNuvem: {
    width: 60,
    height: 60,
    marginLeft: 15
  },
  iconUmidade: {
    marginTop: 14,
    marginLeft: 30,
    width: 45,
    height: 45
  },
  iconBiruta: {
    marginTop: 14,
    marginLeft: 30,
    width: 45,
    height: 45
  },
  titleClima: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20
  },
  textTemp: {
    color: 'white',
    fontSize: 20,
    marginTop: 30
  },
  imgemTabela: {
    marginLeft: 20,
    marginBottom: 20,
    width: 350,
    height: 200
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
    backgroundColor: '#000',
    height: 60,
    opacity: 0.66,
    marginBottom: 20
  },
  title: {
    fontSize: 40,
    color: 'white',
    borderColor: 'black',
    // borderStyle: 'solid',
    // borderWidth: '2',
    textAlign: 'center',
  }
});
