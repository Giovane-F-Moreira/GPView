import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchHandler }) => {
  const [term, setTerm] = useState('');

  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Buscar"
        style={styles.inputStyle}
        value={term}
        onChangeText={(newTerm) => setTerm(newTerm)}
        onEndEditing={() => searchHandler(term)}
      />
      {term ? (
        <Feather
          name="x-circle"
          style={styles.iconStyle}
          onPress={() => setTerm('')}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    width: 350,
    borderRadius: 10,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
