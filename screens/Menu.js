/**
 * Menu.js
 *
 * This component represents the menu screen of the application. It displays a horizontal list of dining halls,
 * a horizontal calendar, and a list of menu items grouped by category.
 *
 * @returns {JSX.Element} A component that represents the menu screen.
 */

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';


const calendarData = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const menuData = [
  {
    id: '1',
    category: 'Breakfast',
    name: 'Scrambled Eggs',
    description: 'Delicious scrambled eggs with a side of toast.',
  },
  {
    id: '2',
    category: 'Breakfast',
    name: 'Pancakes',
    description: 'Fluffy pancakes served with maple syrup and butter.',
  },
  {
    id: '3',
    category: 'Lunch',
    name: 'Chicken Sandwich',
    description: 'Grilled chicken sandwich with fresh lettuce and tomato.',
  },
  {
    id: '4',
    category: 'Lunch',
    name: 'Vegetable Soup',
    description: 'Homemade vegetable soup with a variety of fresh vegetables.',
  },
  {
    id: '5',
    category: 'Dinner',
    name: 'Spaghetti Bolognese',
    description: 'Classic spaghetti with a rich and flavorful meat sauce.',
  },
  {
    id: '6',
    category: 'Dinner',
    name: 'Grilled Salmon',
    description: 'Grilled salmon fillet served with lemon and dill.',
  },
  // Add more food items as needed
];

const diningHalls = [
  'Kissam',
  'EBI',
  'Commons',
  'Rothschild',
  'Rand',
  '2301',
  // Add more dining halls as needed
];

const Menu = () => {
  const [selectedDiningHall, setSelectedDiningHall] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [isCalendarVisible, setCalendarVisible] = useState(false);

  const handleDiningHallSelection = (diningHall) => {
    setSelectedDiningHall(diningHall);
  };
  const handleMenuItemSelection = (item) => {
    setSelectedMenuItem(item);
  };


  // Group the menu items by category
  const groupedMenu = menuData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.diningHallButtons}>
          {diningHalls.map((hall) => (
            <TouchableOpacity
              key={hall}
              style={[
                styles.diningHallButton,
                selectedDiningHall === hall && styles.selectedDiningHall,
              ]}
              onPress={() => handleDiningHallSelection(hall)}
            >
              <Text style={styles.diningHallButtonText}>{hall}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {calendarData.map((day) => (
          <View key={day} style={styles.calendarDay}>
            <Text>{day}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(groupedMenu).map((category) => (
          <View key={category} style={styles.categoryContainer}>
            <Text style={styles.categoryTitle}>{category}</Text>
            <FlatList
              data={groupedMenu[category]}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleMenuItemSelection(item)}>
                  <View style={styles.menuItem}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  diningHallButtons: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 3,
  },
  diningHallButton: {
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 12,
    marginRight: 10,
   
  },
  calendarDay: {
    padding: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 10,
  },
  diningHallButtonText: {
    fontSize: 12,
  },
  selectedDiningHall: {
    backgroundColor: '#E6E5F7', // Customize the style for the selected dining hall
  },
  categoryContainer: {
    width: 350, // Adjust the width as needed
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#ccc',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    color: '#777',
  },
});

export default Menu;
