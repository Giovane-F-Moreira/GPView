import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';
import logo from '../../assets/img/logo.png';

const Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Início')}
      >

      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Sobre')}
      >
        <Image
          source={{ uri: 'https://www.thesportsdb.com/images/media/league/badge/rppvpw1422400797.png' }}
          style={{ width: 80, height: 40}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navbarButton}
        onPress={() => navigation.navigate('Contato')}
      >
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/848/848006.png' }}
          style={{ width: 35, height: 35}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginTop: 28,
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navbarButton: {
    flex: 1,
    alignItems: 'center',
  },
  navbarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Navbar;