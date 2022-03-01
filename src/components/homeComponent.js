import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet } from 'react-native';

class HomeComponent extends Component {
  render() {
    return (
      <SafeAreaView>
          <View style={styles.textView}>
              <Text style={styles.textMain}>
                  Hey There,{"\n"}
                  I'm <Text style={styles.letterM}>M</Text>athan
              </Text>
              <Text style={styles.textChild}>
                "I love what i do - build things for the web"
              </Text>
              </View>
              <View>
              <Image source={require('../../assets/photo-app.png')} style={{ width: 400, height: 500, position:'absolute', top:180 }}></Image>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textView: {
    top:90,
    right:10,
    left:30
  },
  textMain: {
    fontFamily:'Roboto',
    fontSize:40,
    color:'#132F38',
    fontWeight:'bold',
  },
  textChild: {
    top:30
  },
  letterM: {
    fontSize:50,
    opacity: 1,
    textShadowRadius:50,
  }
});
export default HomeComponent;