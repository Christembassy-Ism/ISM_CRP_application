import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class TableTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Full Name', 'Email', 'Mobile'],
      tableData: [
        ['1','Dunkwu Alexander', 'dunkwualex@gmail.com', '+234 907 8762 72'],
        ['2','John Ezeoha', 'joeze@gmail.com', '15155151515'],
        ['3','Dunkwu Alexander', 'dunkwualex@gmail.com', '+234 907 8762 72'],
        ['4','John Ezeoha', 'joeze@gmail.com', '15155151515'],
      ]
    }
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <Table borderStyle={{borderWidth: 0}}>
            <Row data={state.tableHead} flexArr={[0.5, 2, 2, 2]} style={styles.head} textStyle={styles.text}/>
            <TableWrapper style={styles.wrapper}>
              <Rows data={state.tableData} flexArr={[0.5, 2, 2, 2]} style={styles.row} textStyle={styles.text}/>
            </TableWrapper>
          </Table>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 30, overflowX : "auto"},
  head: {  height: 40, width : 800,  backgroundColor: '#f1f8ff'},
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#f6f8fa' },
  row: {  height: "auto", paddingVertical : 10, width : 800,  },
  text: { textAlign: 'center', paddingHorizontal : 20, fontFamily : "NunitoBold" }
});