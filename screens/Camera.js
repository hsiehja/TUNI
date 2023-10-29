/**
 * Camera.js
 *
 * This component displays an image that can be toggled by clicking a touchable image or a circle.
 * Clicking the circle flashes it in white, and the touchable image toggles the main image between two sources.
 * Users can customize the functionality of the touchable image for their specific use case.
 *
 * @returns {JSX.Element} A component for displaying an image with interactive elements.
 */

import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Camera = () => {
  const [mainImage, setMainImage] = useState(
    'https://cdn.vanderbilt.edu/vu-web/insidedores-wpcontent/20190418063843/DSCN12821.jpg'
  );

  const [toggleImage, setToggleImage] = useState(true);

  const changeImage = () => {
    setMainImage(
      toggleImage
        ? 'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/025/853/large/IMG_9141.JPG?1475728735'
        : 'https://cdn.vanderbilt.edu/vu-web/insidedores-wpcontent/20190418063843/DSCN12821.jpg'
    );
    setToggleImage(!toggleImage);
  };

  const handleCircleClick = () => {
    // Add the functionality for the circle here
    // This is where you can specify the action when clicking the circle
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: mainImage }}
        style={styles.image}
      />
      <TouchableOpacity style={styles.circle} onPress={handleCircleClick}>
        <View style={styles.circleInner} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightClickableImage} onPress={changeImage}>
        <Image
          source={{ uri: 'https://static.thenounproject.com/png/817296-200.png' }} // Replace with the URL of the clickable image
          style={styles.clickableImageInner}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.leftClickableImage} onPress={() => {
        // Add the functionality for the left clickable image here
        // This is where you can perform a different action when clicking the left image
        // For now, you can leave it empty or add a placeholder function.
      }}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg' }} // Replace with the URL of the left clickable image
          style={styles.clickableImageInner}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350, // Adjust the width as needed
    height: 350, // Adjust the height as needed
    borderRadius: 30,
    bottom: 80,
  },
  circle: {
    width: 75, // Adjust the circle size as needed
    height: 75, // Adjust the circle size as needed
    borderRadius: 50, // Make it a circle by setting half of the width and height as the border radius
    backgroundColor: 'white', // White background color
    borderColor: 'black', // Black border color
    borderWidth: 2, // Border width
    position: 'absolute', // Position it below the image
    bottom: 75, // Adjust the vertical position as needed
  },
  circleInner: {
    flex: 1,
  },
  leftClickableImage: {
    position: 'absolute',
    left: 50, // Adjust the horizontal position to the left
    bottom: 75, // Adjust the vertical position as needed
    borderRadius: 30,
  },
  rightClickableImage: {
    position: 'absolute',
    right: 60, // Adjust the horizontal position to the right
    bottom: 75, // Adjust the vertical position as needed
  },
  clickableImageInner: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    bottom: 15,
  },
});

export default Camera;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';
// import { Camera } from 'expo-camera';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={styles.cameraContainer}>
//         <Camera
//           style={styles.fixedRatio}
//           type={type}
//           ratio={'1:1'} />
//       </View>

//       <Button
//         title="Flip Image"
//         onPress={() => {
//           setType(
//             type === Camera.Constants.Type.back
//               ? Camera.Constants.Type.front
//               : Camera.Constants.Type.back
//           );
//         }}>
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   cameraContainer: {
//     flex: 1,
//     flexDirection: 'row'
//   },
//   fixedRatio: {
//     flex: 1,
//     apsectRatio: 1
//   }
// })