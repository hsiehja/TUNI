/**
 * Posts.js
 *
 * This component displays a list of user posts with various content, including user information,
 * images, stars, likes, comments, and interactions.
 *
 * It utilizes a FlatList to render a dynamic list of posts based on provided data.
 *
 * @returns {JSX.Element} A component for rendering user posts.
 */

import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Sample data for posts
const postData = [
  {
    id: '1',
    userName: 'anon',
    userImage: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
    imageUrl: 'https://cdn.vanderbilt.edu/vu-web/insidedores-wpcontent/20190418063843/DSCN12821.jpg',
    content: 'The pho is so mid today :)',
    likes: 42,
    comments: 7,
    stars: 2,
  },
  {
    id: '2',
    userName: 'user123',
    userImage: 'https://cdn-iajap.nitrocdn.com/mvNrxudaKoEWobCFWKPZbAlZChQnweFq/assets/images/optimized/rev-3415120/surfskate.love/wp-content/uploads/2022/03/longboard_vs_surfskate.png',
    imageUrl: 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
    content: 'Commons breakfast!',
    likes: 56,
    comments: 12,
    stars: 4
  },
  // Add more posts as needed
];

// Function to create an array of star images
const renderStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <Image
        key={i}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png' }}
        style={styles.star}
      />
    );
  }
  return stars;
};

// Posts Component
const Posts = () => {
  return (
    <FlatList
      data={postData}
      renderItem={({ item }) => (
        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image source={{ uri: item.userImage }} style={styles.userImage} />
            <Text style={styles.userName}>{item.userName}</Text>
          </View>
          <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
          <View style={styles.starContainer}>
            {renderStars(item.stars)}
          </View>
          <View style={styles.interactions}>
            <Text>{item.likes} likes</Text>
            <TouchableOpacity onPress={() => alert(`Comments for post by ${item.userName}`)}>
              <Text>{item.comments} comments</Text>
            </TouchableOpacity>
          </View>
          <Text>{item.content}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

// Styles for Posts Component
const styles = StyleSheet.create({
  postContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Added margin for spacing
  },
  userImage: {
    width: 40, // Increase the width to make it rounder
    height: 40, // Increase the height to make it rounder
    borderRadius: 20, // Increase the borderRadius to make it rounder
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: '#09046E',
  },
  postImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    borderRadius: 20, // Apply a borderRadius to make the image rounder
    marginBottom: 10,
  },
  starContainer: {
    flexDirection: 'row',
  },
  star: {
    width: 20, // Adjust the width as needed
    height: 20, // Adjust the height as needed
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Posts;







// import React from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

// // Sample data for posts
// const postData = [
//   {
//     id: '1',
//     userName: 'anon',
//     userImage: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
//     imageUrl: 'https://cdn.vanderbilt.edu/vu-web/insidedores-wpcontent/20190418063843/DSCN12821.jpg',
//     content: 'The pho is so mid today :)',
//     likes: 42,
//     comments: 7,
//     stars: 2,
//   },
//   {
//     id: '2',
//     userName: 'user123',
//     userImage: 'https://cdn-iajap.nitrocdn.com/mvNrxudaKoEWobCFWKPZbAlZChQnweFq/assets/images/optimized/rev-3415120/surfskate.love/wp-content/uploads/2022/03/longboard_vs_surfskate.png',
//     imageUrl: 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735',
//     content: 'Commons breakfast!',
//     likes: 56,
//     comments: 12,
//     stars: 4
//   },
//   // Add more posts as needed
// ];

// // Posts Component
// const Posts = () => {
//   return (
//     <FlatList
//       data={postData}
//       renderItem={({ item }) => (
//         <View style={styles.postContainer}>
//           <View style={styles.userInfo}>
//             <Image source={{ uri: item.userImage }} style={styles.userImage} />
//             <Text style={styles.userName}>{item.userName}</Text>
//           </View>
//           <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
//           <Image source={{ uri: item.stars }} style={styles.stars} />
//           <View style={styles.interactions}>
//             <Text>{item.likes} likes</Text>
//             <TouchableOpacity onPress={() => alert(`Comments for post by ${item.userName}`)}>
//               <Text>{item.comments} comments</Text>
//             </TouchableOpacity>
//           </View>
//           <Text>{item.content}</Text>
//         </View>
//       )}
//       keyExtractor={(item) => item.id}
//     />
//   );
// };

// // Styles for Posts Component
// const styles = StyleSheet.create({
//   postContainer: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   userInfo: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10, // Added margin for spacing
//   },
//   userImage: {
//     width: 40, // Increase the width to make it rounder
//     height: 40, // Increase the height to make it rounder
//     borderRadius: 20, // Increase the borderRadius to make it rounder
//     marginRight: 10,
//   },
//   userName: {
//     fontWeight: 'bold',
//   },
//   stars: {
//     // Code in question
//   },
//   postImage: {
//     width: '100%',
//     height: 300, // Adjust the height as needed
//     borderRadius: 20, // Apply a borderRadius to make the image rounder
//     marginBottom: 10,
//   },
//   interactions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
// });

// export default Posts;
