import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
    // const [loading, setLoading] = React.useState(true);

    // useEffect(() => {
    //   // Simulate app loading time (e.g., fetching data, initializing resources)
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 3000); // Set the loading duration (e.g., 3000 milliseconds = 3 seconds)
    // }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/splash.png')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set the background color of the splash screen
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Adjust the image size and aspect ratio
  },
});

export default SplashScreen;
