/**
 * Notifications.js
 *
 * This component represents the notifications screen of the application. It displays a list of notifications
 * grouped by time (Today, This Week, This Month). Notifications can be of various types, including likes, comments,
 * and popups.
 *
 * @returns {JSX.Element} A component that represents the notifications screen.
 */

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, SectionList } from 'react-native';

// Sample data
const notificationData = [
  { 
    title: 'Today',
    data: [
      {
        id: '1',
        type: 'like',
        user: '@john',
        isNew: true,
        time: '37 seconds ago',
        profileImage: 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
        postImage: 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
      },
      {
        id: '2',
        type: 'popup',
        user: '@zeppos',
        content: ' is giving out free squirrel mugs while supplies last',
        isNew: false,
        time: '2 minutes ago',
        profileImage: 'https://cdn.vanderbilt.edu/vu-URL/wp-content/uploads/sites/279/2020/08/19172911/Zeppos-College-logo.gif',
      },
      // ... more 'Today' notifications
    ]
  },
  { 
    title: 'This Week',
    data: [
      {
        id: '3',
        type: 'comment',
        user: '@user123',
        comment: 'that looks so good omg',
        isNew: true,
        time: '2 days ago',
        profileImage: 'https://cdn-iajap.nitrocdn.com/mvNrxudaKoEWobCFWKPZbAlZChQnweFq/assets/images/optimized/rev-3415120/surfskate.love/wp-content/uploads/2022/03/longboard_vs_surfskate.png',
        postImage: 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
      },
      // ... more 'This Week' notifications
    ]
  },
  { 
    title: 'This Month',
    data: [
      // ... 'This Month' notifications
    ]
  },
];
const Notifications = () => {
    const [notifications, setNotifications] = useState(notificationData);
  
    const handlePress = (id) => {
      const updatedSections = notifications.map(section => ({
        ...section,
        data: section.data.map(notification => 
          notification.id === id ? { ...notification, isNew: false } : notification
        )
      }));
      setNotifications(updatedSections);
    };
  
    const renderNotification = ({ item }) => (
      <TouchableOpacity style={styles.notificationContainer} onPress={() => handlePress(item.id)}>
        <View style={styles.profileContainer}>
            <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
            {item.isNew && <View style={styles.dot} />}
        </View>
        <View style={styles.contentContainer}>
            {item.type === 'popup' ? (
            <Text style={styles.popupText}>
                POPUP!{'\n'}{item.user}{item.content}
                </Text>
            ) : (
            <>
            <Text style={styles.notificationText}>
                {item.user} {item.type === 'like' ? 'liked your post' : `commented on your post: "${item.comment}"`}
            </Text>
            <Text style={styles.time}>{item.time}</Text>
            </>
            )}
        </View>
        {item.type !== 'popup' && item.postImage && <Image source={{ uri: item.postImage }} style={styles.postImage} />}
      </TouchableOpacity>
    );
  
    return (
      <SectionList
        sections={notifications}
        renderItem={renderNotification}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item, index) => item.id + index}
      />
    );
  };
  
  const styles = StyleSheet.create({
    notificationContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    contentContainer: {
      flex: 1,
    },
    notificationText: {
      marginBottom: 5,
    },
    time: {
      color: 'gray',
    },
    postImage: {
      width: 40,
      height: 40,
      borderRadius: 5,
      marginRight: 10,
    },
    profileContainer: {
      position: 'relative',
      marginRight: 8,
    },
    dotContainer: {
      width: 20,
      alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        position: 'absolute',
        top: 5,
        right: 8,
      },
    sectionHeader: {
      fontWeight: 'bold',
      fontSize: 18,
      padding: 10,
      backgroundColor: '#f2f2f2',
    },
    popupText: {
      fontStyle: 'italic',
      color: 'black',
      fontWeight: 'bold',
    },
  });
  
  export default Notifications;
