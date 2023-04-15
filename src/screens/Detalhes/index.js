import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import Navbar from '../../components/Navbar';


export const Detalhes = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/img/bg.jpg')}
        style={styles.imageBackground}>
        <StatusBar style="dark" />
        <Navbar style={styles.navbar} />

        <View style={styles.content}>

        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  navbar: {
    left: 0,
    right: 0,
    height: 50, // altura da barra de navegação
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
