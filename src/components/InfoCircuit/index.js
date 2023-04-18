import { StyleSheet, View, Text, Image } from 'react-native';

import IconPercurson from '../../assets/icon/pista-de-corrida.png';
import IconCurva from '../../assets/icon/curvas.png';

function InfoCircuit({ data }) {
  
  return (

    <View style={styles.container}>
      <View style={styles.bgOpacity}>

        <View style={styles.viewTitle}>
          <Text style={styles.title}>{data.circuito}</Text>
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

          <Text style={styles.percurso}>{data.detalhes.percurso}</Text>

          <Text style={styles.curvas}>{data.detalhes.curvas}</Text>
        </View>
        <View style={styles}>
          <Image
            style={styles.imgCircuitoStyle}
            source={{uri: data.detalhes.circuitoImg}}
          />
        </View>
      </View>
    </View>
  )
}

export default InfoCircuit;

const styles = StyleSheet.create({
  container: {

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
  tituloIcones: {
    flexDirection: 'row',
  },
  tituloPercurso: {
    marginTop: 32,
    color: 'white',
    fontSize: 23,
  },
  percurso: {
    marginLeft: 20,
    color: 'white',
    fontSize: 14,
  },
  curvas: {
    marginLeft: 150,
    color: 'white',
    fontSize: 14,
  },
  imgCircuitoStyle: {
    marginTop: 20,
    marginLeft: 25,
    marginBottom: 20,
    width: 350,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center'
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
  title: {
    fontSize: 29,
    color: 'white',
    borderColor: 'black',
     borderStyle: 'solid',
     borderWidth: 2,
    textAlign: 'center',
  }
});