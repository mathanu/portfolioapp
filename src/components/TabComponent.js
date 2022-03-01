import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeComponent from './homeComponent';
import skillComponent from './skillComponent';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === 'Skill') {
              iconName = focused ? 'md-code-working' : 'md-code-working';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { position: 'absolute' },
        })}
      >
      <Tab.Screen name="Home" component={HomeComponent} />
      <Tab.Screen name="Skill" component={skillComponent} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;