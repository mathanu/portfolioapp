import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Card,Title, Paragraph } from 'react-native-paper';
import data from '../mockdata/experience.json';
class WorkComponent extends Component {
  render() {
    const cardColor = ["#B81D1B", "#95AFB5", "#EB6773", "#F197C1", "#DB8E96"]
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
           <View style={styles.container}>
  { data.map((item, i) => (
      <Card key={i} style={styles.cardStyle} style={{backgroundColor:cardColor[i],marginTop: '2%', marginLeft: '2%', marginRight: '2%', marginBottom: '2%'}}>
        <Card.Title title={item.companyname} subtitle={item.year}/>
        <Card.Content>
         <Paragraph>{item.designation} </Paragraph>
         <Paragraph>{item.about} </Paragraph>
        </Card.Content>
      </Card>
  ))}
   </View>
   </ScrollView>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ecf0f1'
  },
  paragraph: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color:"#132F38"
  },
  cardStyle : { marginTop: '2%', marginLeft: '2%', marginRight: '2%', marginBottom: '2%'},
});
export default WorkComponent;