/**
 * Home.js
 *
 * This component represents the home screen of the application.
 * It displays a scrollable list of stories, a search bar, and a list of posts.
 *
 * @returns {JSX.Element} A component that represents the home screen.
 */

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Stories from '../components/Stories';
import SearchBar from '../components/SearchBar';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Stories />
      <SearchBar/>
      <Posts />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
