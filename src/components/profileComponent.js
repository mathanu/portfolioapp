import React, { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Linking  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class ProfileComponent extends Component {
  render() {
    return (
      <SafeAreaView>
          <View style={styles.textView}>
              <Text style={styles.textMain}>
                 Who I Am?
              </Text>
              <View style={styles.textviewChild}>
              <Text style={styles.textChild}>
                 I am a Full Stack Developer from Thanjavur, with a strong focus in javascript. I love to get new experiences and always learn from my surroundings.
              </Text>
              </View>
              <View style={styles.findMeView}>
              <Text style={styles.findMeText}>
                  Find Me on - <MaterialCommunityIcons name="linkedin" color = {'blue'} size={50} onPress={() => Linking.openURL('https://www.linkedin.com/in/mathan-j-65aa64a9/')}/>
                <MaterialCommunityIcons name="github" color = {'black'} size={50} onPress={() => Linking.openURL('https://github.com/mathanu')}/>
                </Text>
              </View>
          </View>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textView: {
    top:50,
    left:20
  },
  textMain: {
    fontFamily:'Roboto',
    fontSize:30,
    color:'#132F38',
    fontWeight:'bold',
  },
  textChild: {
    top:30,
    fontSize:20
  },
  findMeView:{
    top:300
  },
  findMeText:{
    fontSize:20
  }
});

export default ProfileComponent;