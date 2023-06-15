import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

const TableEvent = ({ eventos }) => {
  const tableHead = ['Sessões', 'Dia', 'Data', 'Hora'];
  const tableData = [
    ['TL1',     eventos.horario.tl1.day,     eventos.horario.tl1.date,    eventos.horario.tl1.time],
    ['TC',      eventos.horario.tc.day,      eventos.horario.tc.date,     eventos.horario.tc.time],
    ['TL2',     eventos.horario.tl2.day,     eventos.horario.tl2.date,    eventos.horario.tl2.time],
    ['Sprint',  eventos.horario.sprint.day,  eventos.horario.sprint.date, eventos.horario.sprint.time],
    ['GP',      eventos.horario.gp.day,      eventos.horario.gp.date,     eventos.horario.gp.time]
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margintop: 20 ,margin: 16, backgroundColor: '#000000', opacity: 0.7 },
  head: { height: 40, backgroundColor: '#000000' },
  text: { margin: 6, color: '#FFF' }
});

export default TableEvent;