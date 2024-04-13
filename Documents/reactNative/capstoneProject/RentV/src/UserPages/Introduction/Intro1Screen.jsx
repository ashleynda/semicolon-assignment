import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import FilledButton from "../../components/buttons/FilledButton";
import GhostButton from "../../components/buttons/GhostButton";
import { useNavigation } from "@react-navigation/native";


const Intro1Screen = () => {
  const navigation = useNavigation();

  const handleChange = () => {
    navigation.navigate('GetStarted', {option:'GetStarted'})
  }

  const handleIntro2 = () => {
    navigation.navigate('Intro2', {option:'Intro2'})
  }
  
    return (
        <View style={styles.container}>
          <Image
            source={require('../../../assets/intro/3129573.jpg')}
            style={styles.image}
          />

          <View>
            <Text>Welcome to RentV</Text>
            <Text>Our mission is to transform car ownership by offering convenient and sustainable mobility solutions. We aim to foster community, trust, and collaboration while prioritizing safety and environmental sustainability. Through innovation and technology, we're creating a future where transportation is accessible, efficient, and eco-friendly.
</Text>
          </View>

          <View>
            <FilledButton text='Next' onPress={handleIntro2} />
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


export default Intro1Screen;