// import { StyleSheet, Text, TextInput, View, Platform, StatusBar, Dimensions, SafeAreaView } from 'react-native'
// import React, { useState } from 'react'
// import { Button } from '@mui/material';

// const LoginScreen = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('')

//   // console.log(Dimensions.get("screen"));
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.cardContainer}>
//         <Text style={styles.headerText}>Login</Text>

//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder='Enter username'  value={username} onChangeText={(text) => setUsername(text)} />
//           <TextInput style={styles.input} placeholder='Enter password' secureTextEntry={true}  value={password} onChangeText={(text) => setPassword(text)} />
//         </View>
//         <View style={styles.buttonContainer}>
//           <Button style={styles.button} variant="contained" color="primary" onClick={() => console.log(username, password)}>Login</Button>
//         </View>
      
//       </View>
//   </SafeAreaView>
// )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   justifyContent: "center",
// },
// cardContainer: {
//   // backgroundColor: '#E5B80B', 
//   // padding: 40, 
//   // borderRadius: 10, // Add rounded corners for a card-like style
//   // shadowColor: '#000', // Set a shadow for a more elevated look
//   // shadowOffset: { width: 0, height: 2 }, // Adjust shadow position
//   // shadowOpacity: 0.25, // Set shadow opacity
//   // shadowRadius: 4, // Set shadow blur radius

//   backgroundColor: '#E5B80B',
//   paddingHorizontal: 60,
//   paddingVertical: 60,
//   borderRadius: 10,
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.25,
//   shadowRadius: 4,
//   // flex: 1, // Allow the card to expand to fill available space
//   alignSelf: 'stretch', // Stretch the card horizontally
//   marginHorizontal: 20,
// },
// headerText: {
//   // color: "#E5B80B",
//   // fontSize: 25,
//   // justifyContent: 'center',
//   // alignItems: 'center'

// },
// inputContainer: {
//   // width: '100%', // Take full width
//   // marginBottom: 20,
// },
// input: {
//   borderWidth: 1,
//   // width: '100%', // Take full width
//   height: 50,
//   marginVertical: 10,
//   borderRadius: 12,
//   paddingHorizontal: 20
// },
// })


import { StyleSheet, Text, TextInput, View, Platform, StatusBar, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')

  // console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.headerText}>Login</Text>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Enter username'  value={username} onChangeText={(text) => setUsername(text)} />
          <TextInput style={styles.input} placeholder='Enter password' secureTextEntry={true}  value={password} onChangeText={(text) => setPassword(text)} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log(username, password)}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
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
