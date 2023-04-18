import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';

export default class TableEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tableHead: ['Sessões', 'Dia', 'Data', 'Hora'],
      tableData: [
        ['TL1',    'Sexta-Feira', '24/03/2023', '07:45'],
        ['TC',     'Sábado',      '25/03/2023', '07:50'],
        ['TL2',    'Sexta-Feira', '24/03/2023', '12:00'],
        ['Spring', 'Sábado',      '25/03/2023', '12:00'],
        ['GP',     'Domingo',     '26/03/2023', '10:00']
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { margin: 16, backgroundColor: '#000000', opacity: 0.70 },
  head: { height: 40, backgroundColor: '#000000' },
  text: { margin: 6, color: '#FFF'}
});