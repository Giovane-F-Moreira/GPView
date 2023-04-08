import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import CardInfo from './components/Cardinfo';


export default function App() {
  return (
    <>
    <ImageBackground
      source={require('./assets/background-image.jpg')}
      style={styles.imageBackground}>
          <Navbar style={styles.navbar} />
          <View style={styles.content}>

            <SearchBar></SearchBar>
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
            <CardInfo/>
            <StatusBar style="auto" />

          </View>
    </ImageBackground>
    </>

    
  );
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
