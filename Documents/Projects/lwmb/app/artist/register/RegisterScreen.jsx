import { SafeAreaView, ScrollView, StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import StatePicker from '../../components/location/StatePicker';

const RegisterScreen = () => {
  const [selectedState, setSelectedState] = useState('');
  const statesInNigeria = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta',
    'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT - Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano',
    'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun',
    'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <Text style={styles.headerText}>Register</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Enter Name' />
            <TextInput style={styles.input} placeholder='Enter Email' />
            <TextInput style={styles.input} placeholder='Enter Phone number' />
            {/* <TextInput style={styles.input} placeholder='Enter State'  */}
            <StatePicker
            selectedState={selectedState}
            onStateChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
            states={statesInNigeria}/>
          {/* /> */}
            <TextInput style={styles.input} placeholder='Enter Zone' />
            <TextInput style={styles.input} placeholder='Enter Country' />
            <TextInput style={styles.input} placeholder='Enter Username' />
            <TextInput style={styles.input} placeholder='Enter Password' />
            <TextInput style={styles.input} placeholder='Enter Church' />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log(username, password)}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    alignContent: "center",
  },
  cardContainer: {
    backgroundColor: '#E5B80B',
    padding: 40,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginHorizontal: 20,
  },
  headerText: {
    color: "black",
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    marginVertical: 10,
    borderRadius: 12,
    paddingHorizontal: 20
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    // backgroundColor: '#007AFF',
    backgroundColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    // color: '#E5B80B',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  }
})