/**
 * Stories.js
 *
 * This component renders a collection of user stories with interactive features. Users can
 * click on story circles to open a modal with image slides. The modal allows users to navigate
 * between images and provides a close button. It also demonstrates swipe-down to close functionality.
 *
 * @param {Object} navigation - React Navigation object for navigation within the app.
 * @returns {JSX.Element} A component for rendering interactive user stories.
 */

import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Modal,
  PanResponder
} from 'react-native';

const Stories = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy > 50) {
          setModalVisible(false);
        }
      }
    })
  ).current;

  const storyData = [
    {name: 'Kissam', image: 'https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/279/2019/10/19172918/Moorelogo.gif'},
    {name: 'Rothschild', image: 'https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/279/2022/05/19211138/RC-logo.gif'},
    {name: 'EBI', image: 'https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/279/2019/10/19172918/EBIlogo.gif'},
    {name: 'Zeppos', image: 'https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/279/2020/08/19172911/Zeppos-College-logo.gif'},
    {name: '2301', image: 'https://campusdining.vanderbilt.edu/wp-content/uploads/Fall-2020-Kissam-Allergen-Meal-SM-Signs-11x17.png'},
  ]; // Sample data for stories

  const images = [
    'https://cdn.vanderbilt.edu/vu-web/insidedores-wpcontent/20190418063843/DSCN12821.jpg',
    'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
    // Add more image paths
  ];

  const handleNext = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const handlePrev = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <View style={styles.storiesContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingStart: 10,
          paddingEnd: 10,
        }}
      >
        {storyData.map((story, index) => (
          <TouchableOpacity key={index} onPress={() => setModalVisible(true)} style={styles.storyWrapper}>
            <View style={styles.storyCircle}>
              <Image
                source={{ uri: story.image }}
                style={styles.storyImage}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.storyLabelText}>{story.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={{ flex: 1 }} {...panResponder.panHandlers}>
          <TouchableOpacity onPress={handlePrev} style={styles.leftTouchable} />
          <Image source={{ uri: images[currentImage] }} style={{ width: '100%', height: '100%' }} />
          <TouchableOpacity onPress={handleNext} style={styles.rightTouchable} />
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={{ fontSize: 35 }}>x</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    paddingTop: 20,
  },
  storyWrapper: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyCircle: {
    width: 70,
    height: 70,
    borderRadius: 40,
    borderColor: '#301AD6',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
  },
  storyImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  storyLabelText: {
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
    color: '#09046E',
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    top: 40,
    zIndex: 1
  },
  leftTouchable: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    zIndex: 1
  },
  rightTouchable: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    zIndex: 1
  }
});

export default Stories;