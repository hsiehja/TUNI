/**
 * App.js
 *
 * This is the main entry point of the TUni app. It configures the app's navigation using React Navigation,
 * sets up the bottom tab navigation, and defines the screens for Home, Menu, Camera, Notifications, and Profile.
 *
 * @returns {JSX.Element} The root component that represents the TUni app.
 */

import React from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Menu from './screens/Menu';
import Camera from './screens/Camera';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import BottomBar from './components/BottomBar';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}>TUni</Text>
      </View>
      <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // or any color you want for the header background
    paddingTop: StatusBar.currentHeight + 45,
  },
  headerText: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'purple',
    fontStyle: 'italic',
  },
});


export default App;