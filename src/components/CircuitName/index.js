import React from 'react';
import { View, Text } from 'react-native';
import { EVENTOS } from '../../utils/eventos';

function CircuitName({ eventos }) {
  return (
    <View>
     
        <View>
          { eventos.map(({ circuito }) => {
            <Text>circuito</Text>
          })}
          {/* <Text>{eventos[0].circuito}</Text> */}
        </View>
  
    </View>
  );
}

export default CircuitName;