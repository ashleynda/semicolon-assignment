import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import FilledButton from "../../components/buttons/FilledButton";
import GhostButton from "../../components/buttons/GhostButton";
import { useNavigation } from "@react-navigation/native";

const Intro2Screen = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate('GetStarted', {option:'GetStarted'})
  }

  const handleIntro3 = () => {
    navigation.navigate('Intro3', {option:'Intro3'})
    console.log('did you get here');
  }
  
    return (
        <View style={styles.container}>
        <Image
          source={require('../../../assets/intro/3908628.jpg')}
          style={styles.image}
        />

        <View>
          <Text>Select your dream car</Text>
          <Text>Worry no more about owning one</Text>
        </View>

        <View>
          <FilledButton text='Next' onPress={handleIntro3} />
          <GhostButton text='Skip' onPress={handleChange} />
        </View>

    </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 30,
      marginTop: 120,
      gap: 60,
    },
    image: {
      width: 200, 
      height: 200, 
      resizeMode: 'cover', 
    },
  });


export default Intro2Screen;