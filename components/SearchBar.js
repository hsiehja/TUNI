/**
 * SearchBar.js
 *
 * This component provides a search bar feature allowing users to input search terms and
 * trigger a search action by pressing a "Search" button.
 *
 * It includes state management to store the search text and an alert message to demonstrate
 * the search functionality.
 *
 * @returns {JSX.Element} A component for rendering a search bar.
 */

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// Search Bar Component
const SearchBar = () => {
  const [searchText, setSearchText] = useState(''); // State to hold search text

  // Function to handle search
  const handleSearch = () => {
    alert(`Searching for: ${searchText}`);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for tags..."
        placeholderTextColor="#B7B5F3" // Set placeholder text color
        onChangeText={text => setSearchText(text)}
        value={searchText}
      />
      <Button
        title="Search"
        onPress={handleSearch}
        style={styles.searchButton} />
    </View>
  );
};

// Convert HEX color value to RGB equivalent
function hexToRgb(hex) {
  // Remove the hash character from the beginning of the HEX string
  hex = hex.replace(/^#/, '');

  // Parse the HEX value into separate R, G, and B components
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  // Return the RGB string
  return `rgb(${r}, ${g}, ${b})`;
}

// Styles for Search Bar Component
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  searchInput: {
    flex: 1,
    borderColor: hexToRgb('#E6E5F7'),
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 8,
    paddingLeft: 8,
  },
  searchButton: {
    fontSize: 16,
    color: 'purple',
  }
});

export default SearchBar;