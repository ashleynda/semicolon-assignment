import React from "react";
import { Image, View, StyleSheet } from "react-native";

const myImage = require('../../../assets/Rectangle.png');


const RegisterBgComponent = () => {
    return(
        <View style={StyleSheet.container}>
           <Image source={myImage} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
    // bottom: 83.08,
    bottom: 380,
    left: 107,
    // Optional: Adjust the image resize mode
  
  },
});
export default RegisterBgComponent;



// Import or require the image file

const MyComponent = () => {
  return (
    <View style={styles.container}>
      {/* Use the Image component */}
      <Image source={myImage} style={styles.image} />
    </View>
  );
};


