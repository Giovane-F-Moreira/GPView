import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import CardInfo from './components/Cardinfo';


export default function App() {
  return (
    <>
    <ImageBackground
      source={require('./assets/img/bg.jpg')}
      style={styles.imageBackground}>
      <StatusBar style="dark" />
      <Navbar style={styles.navbar} />

      <View style={styles.content}>
        <SearchBar></SearchBar>
        <CardInfo 
        img='https://images.uncyc.org/pt/thumb/d/d9/Bandeira_de_Portugal.png/300px-Bandeira_de_Portugal.png' 
        date='26'
        month='Mar'
        local='GP de Portugal'
        circuito='Circuito de Portimão'
        />

        <CardInfo 
        img='https://imagepng.org/wp-content/uploads/2017/10/bandeira-argentina.png' 
        date='02'
        month='Abr'
        local='GP da Argentina'
        circuito='Circuito Termas de Rio Hondo'
        />

        <CardInfo 
        img='https://www.gov.br/agricultura/pt-br/assuntos/relacoes-internacionais/agro-mais-investimentos/imagens/bandeira-dos-estados-unidos.png/@@images/image.png' 
        date='16'
        month='Abr'
        local='GP das Americas'
        circuito='Circuito das Américas'
        />

        <CardInfo 
        img='https://imagepng.org/wp-content/uploads/2017/09/bandeira-espanha.png' 
        date='30'
        month='Abr'
        local='GP da Espanha'
        circuito='Circuito Jerez de la Frontera'
        />
        <CardInfo 
        img='https://www.bandeirasnacionais.com/data/flags/big/fr.png' 
        date='14'
        month='Abr'
        local='GP da França'
        circuito='Circuito le Mans-Bugatti'
        />
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
