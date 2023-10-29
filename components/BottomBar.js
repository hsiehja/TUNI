/**
 * BottomBar.js
 *
 * This component represents the bottom navigation bar for the application.
 * It contains icons and handles navigation between different screens.
 *
 * - `Home` navigates to the Home screen.
 * - `Menu` navigates to the Menu screen.
 * - `Camera` navigates to the Camera screen.
 * - `Notifications` navigates to the Notifications screen.
 * - `Profile` navigates to the Profile screen.
 *
 * @param {Object} navigation - The navigation object for screen navigation.
 *
 * @returns {JSX.Element} The bottom navigation bar component.
 */

import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Bottom Bar Component
const BottomBar = ({ navigation }) => {
  return (
    <View style={styles.bottomBarContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialIcons name="home" size={32} color='#09046E' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <MaterialIcons name="restaurant" size={32} color='#09046E' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
        <MaterialIcons name="camera-alt" size={32} color='#09046E' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <MaterialIcons name="notifications" size={32} color='#09046E' />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <MaterialIcons name="account-circle" size={32} color='#09046E' />
      </TouchableOpacity>
    </View>
  );
};

// Styles for BottomBar Component
const styles = StyleSheet.create({
  bottomBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E6E5F8',
    padding: 10,
    paddingTop: 18,
    paddingBottom: 20,
  },
  cameraImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default BottomBar;