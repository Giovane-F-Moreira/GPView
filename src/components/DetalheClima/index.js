import React from 'react';
import { EVENTOS } from '../../utils/eventos';
import { StyleSheet, View, ImageBackground, Text, Image } from 'react-native';

import imgNuvem from '../../assets/icon/nublado.png';
import imgUmidade from '../../assets/icon/pingo-dagua.png';
import imgBiruta from '../../assets/icon/biruta.png';

function DetalheClima({eventos}) { 
  return (
      <View style={styles.containerClima}>
        <Text style={styles.titleClima}>Condições Climaticas</Text>
        <View style={styles.tituloIcones}>
          <Image
            style={styles.imgNuvem} 
            source={imgNuvem}
          />
          <Text style={styles.textTemp}>{eventos.clima.temperatura}</Text>

          <Image
            style={styles.iconUmidade}
            source={imgUmidade}
          />
          <Text style={styles.textTemp}>{eventos.clima.umidade}</Text>

          <Image
            style={styles.iconBiruta}
            source={imgBiruta}
          />
          <Text style={styles.textTemp}>{eventos.clima.vento}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  imageBackground: {
    
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
    height: 75,
    opacity: 0.66,
    marginBottom: 20
  },
  imgNuvem: {
    width: 40,
    height: 40,
    marginLeft: 15
  },
  iconUmidade: {
    marginTop: 7,
    marginLeft: 30,
    width: 30,
    height: 30
  },
  iconBiruta: {
    marginTop: 7,
    marginLeft: 30,
    width: 30,
    height: 30
  },
  titleClima: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20
  },
  textTemp: {
    color: 'white',
    fontSize: 20,
    marginTop: 15
  }
});

export default DetalheClima;