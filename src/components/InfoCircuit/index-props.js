import { StyleSheet, View, Text, Image } from 'react-native';

import IconPercurson from '../../assets/icon/pista-de-corrida.png';
import IconCurva from '../../assets/icon/curvas.png';

export const InfoCircuit = (props) => {
  
  return (

    <View style={styles.container}>
      <View style={styles.bgOpacity}>

        <View style={styles.viewTitle}>
          <Text style={styles.title}>{props.titleCircuito}</Text>
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

          <Text style={styles.percurso}>{props.percurso}</Text>

          <Text style={styles.curvas}>{props.curvas}</Text>
        </View>
        <View style={styles}>
          <Image
            style={styles.imgCircuitoStyle}
            source={props.imgCircuito}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  tituloIcones: {
    flexDirection: 'row',
  },
  tituloPercurso: {
    marginTop: 20,
    color: 'white',
    fontSize: 30,
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
  }
});