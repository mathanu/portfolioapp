import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
class SkillComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.container}>
       <Text style={styles.Title}>
         My Toolbox & Things I Can Do
       </Text>
       <Text style={styles.paragraph}>
         The skills, tools and technologies i use  to bring your products to life:
       </Text>
       <Text>
       <MaterialCommunityIcons name="language-javascript" color = {'red'} size={100}/>
       <MaterialCommunityIcons name="nodejs"  color = {'green'} size={100}/>
       <MaterialCommunityIcons name="language-php" color = {'blue'} size={100}/>
       <MaterialCommunityIcons name="api" color = {'blue'} size={100}/>
       <MaterialCommunityIcons name="angularjs" color = {'red'} size={100}/>
       <MaterialCommunityIcons name="language-typescript" color = {'black'} size={100}/>
       <MaterialCommunityIcons name="jquery" color = {'blue'} size={100}/>
       <MaterialCommunityIcons name="react" color = {'blue'} size={100}/>
       <MaterialCommunityIcons name="language-html5" color = {'brown'} size={100}/>
       <MaterialCommunityIcons name="git" color = {'green'} size={100}/>
       <MaterialCommunityIcons name="github" color = {'black'} size={100}/>
       <MaterialCommunityIcons name="microsoft-visual-studio-code" size={100}/>
       <MaterialCommunityIcons name="database-search" color = {'orange'} size={100}/>
       <MaterialCommunityIcons name="linux" color = {'yellow'} size={100}/>
       <MaterialCommunityIcons name="jira" color = {'blue'} size={100}/>
       </Text>
      </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    padding: 20
  },
  Title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
export default SkillComponent;