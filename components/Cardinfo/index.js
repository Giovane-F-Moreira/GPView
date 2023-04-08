import {Text, StyleSheet, View } from 'react-native';
import { Image } from 'react-native';

const CardInfo = () => {
  return (
    <View style={styles.background}>
      <Image style={styles.img}
        source={{ uri: 'https://images.uncyc.org/pt/thumb/d/d9/Bandeira_de_Portugal.png/300px-Bandeira_de_Portugal.png' }}
      />
      <Text style={styles.date}>26</Text><Text style={styles.title}>GP de Portugal</Text>
      

    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flexDirection: 'row',
    backgroundColor: '#141211',
    opacity: 0.66,
    marginTop: 15,
    height: 76,
    width: 337,
    borderRadius: 10,
  }, 
  img: {
    flexDirection: 'column',
    marginTop: 12,
    marginLeft: 12,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  date: {
    fontSize: 40,
    color: '#fff',
    flexDirection: 'row',
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 30,
    flexDirection: 'row',
    borderRadius: 50,
  }
});

export default CardInfo;
