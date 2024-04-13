import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
// import ImageComponent from '../../components/images/ImageComponent'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useFonts } from 'expo-font'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
  const navigate = useNavigation()

  const handleChange = () => {
    navigation.navigate('Intro1', { option: 'Intro1' })
    // console.log('hereeeeeee');
  }

  const [fontsLoaded] = useFonts({
    'A Trip To Hell And Back': require('../../../assets/fonts/to_hell_and_back.ttf')
  })

  // State variable to manage font loading state
  const [loading, setLoading] = useState(true)

  // If fonts are not loaded, return null to prevent rendering
  if (!fontsLoaded) {
    return null
  }
  return (
    // <View style={styles.container} onPress={handleChange} >
    <TouchableOpacity style={styles.container} onPress={handleChange}>
      <View style={styles.background}>
        <Icon name="car" size={220} color="white" />
      </View>

      <Text style={styles.text}>RentV</Text>

      {/* <Button
        title="Go to intro1"
        onPress={() => navigation.navigate('Intro1')}
      />
      <Button
        title="Go to intro2"
        onPress={() => navigation.navigate('Intro2')}
      />

      <Button
        title="Go to intro3"
        onPress={() => navigation.navigate('Intro3')}
      /> */}

      {/* <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />

      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      /> */}
      {/* <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
      <Button
        title="Go to upload cars"
        onPress={() => navigation.navigate('UploadCars')}
      />
       <Button
        title="Go to customer dashboard"
        onPress={() => navigation.navigate('CustomerDashboard')}
      /> */}
      {/* <Button
        title="Go to FindACar"
        onPress={() => navigation.navigate('Find')}
      {/* /> */}

      {/* <Button
        title="Go to BookACar"
        onPress={() => navigation.navigate('Book')}
      /> */}

      {/* <Button
        title="Go to Summary Details"
        onPress={() => navigation.navigate('Summary')}
      />

      <Button
        title="Go to Payment Details"
        onPress={() => navigation.navigate('Payment')}
      /> */}

      {/* <Button
        title="Go to Booked Successfully"
        onPress={() => navigation.navigate('Booked')}
      />

      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      /> */}

      {/* <Button
        title="Go to Signup Customer"
        onPress={() => navigation.navigate('SignupCustomer')}
      />

      <Button
        title="Go to Signup Admin"
        onPress={() => navigation.navigate('SignupAdmin')}
      />

      <Button
        title="Go to Signup Admin Login"
        onPress={() => navigation.navigate('SignupAdminLogin')}
      />

      

      <Button
        title="Go to Signup Customer Login"
        onPress={() => navigation.navigate('SignupCustomerLogin')}
      /> */}

      {/* <Button
        title="Go to WithdrawScreen"
        onPress={() => navigation.navigate('Withdraw')}
      /> */}
    </TouchableOpacity>
    // </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'A Trip To Hell And Back',
    position: 'absolute',
    top: '50%',
    textAlign: 'center',
    marginTop: 200,
    justifyContent: 'flex-end'
  }
})

export default HomeScreen
