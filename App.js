import * as React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeComponent from './src/components/homeComponent';
import SkillComponent from './src/components/skillComponent';
import workComponent from './src/components/workComponent';
import ProfileComponent from './src/components/profileComponent';
NODE_TLS_REJECT_UNAUTHORIZED=0
function Mathan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mathan!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <><StatusBar barStyle={'light-content'} /><Tab.Navigator
      initialRouteName="Mathan"
      screenOptions={{
        tabBarActiveTintColor: '#132F38',
        headerShown: false
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeComponent}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Experience"
        component={workComponent}
        options={{
          tabBarLabel: 'Experience',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="briefcase" color={color} size={size} />
          ),
        }} />
        
      <Tab.Screen
        name="Skills"
        component={SkillComponent}
        options={{
          tabBarLabel: 'Skills',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="code-braces" color={color} size={size} />
          ),
        }} />
        <Tab.Screen
        name="About"
        component={ProfileComponent}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />

     
    </Tab.Navigator></>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
