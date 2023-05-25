import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Onboarding from './screens/Onboarding.js';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';

 const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     
    <Stack.Navigator
    screenOptions={{header: NavHeader}}>
        <Stack.Screen name="Home" component={Home}>
        </Stack.Screen>
        <Stack.Screen name='Onboarding' component={Onboarding}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
    
  );
}

function NavHeader(){ 
  return   <View style={styles.profileHeader}>
      <Image source={require('./assets/Logo.png')} style={styles.logo} />
      <Image source={require('./assets/Profile.png')} style={styles.profile} />
    </View>;
}

const styles = StyleSheet.create({
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80
  },
  logo: {
    resizeMode: 'contains',
    marginLeft: 100,
    marginTop: 35
  },
  profile:{
    width: 50,
    height: 50, 
    borderRadius: 100,
    overflow: "hidden",
    margin:20
  }
});
