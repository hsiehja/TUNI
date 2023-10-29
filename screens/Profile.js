/**
 * Profile.js
 *
 * This component represents the user's profile screen. It displays the user's profile picture, username, and a list
 * of profile options.
 *
 * @returns {JSX.Element} A component that represents the user's profile screen.
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Profile = () => {
  // Sample data
  const username = "patrick_star33";
  const profilePicUrl = "https://i.imgflip.com/4txfsc.jpg";

  // Options list
  const options = ['General', 'Privacy', 'Language', 'Other', 'About', 'Help', 'Log Out'];

  return (
    <View style={styles.container}>
      {/* Profile Picture and Username */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: profilePicUrl }} style={styles.profileImage} />
        <Text style={styles.username}>{username}</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={() => alert(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;