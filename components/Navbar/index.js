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
          source={logo }
          style={{ width: 150, height: 40}}
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
    backgroundColor: '#BF1F2C',
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