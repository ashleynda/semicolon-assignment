import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
    <ImageBackground
      // source={require('../../../assets/homepic.jpg')}
      // source={require('')}
      style={styles.background}
      resizeMode='cover'
    >
      <Text style={styles.text}>RentV</Text>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
 
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    
  },
});

export default ImageComponent;
