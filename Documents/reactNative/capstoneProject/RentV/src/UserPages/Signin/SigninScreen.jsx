import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SigninScreen = () => {
  const navigation = useNavigation();
  const [loginResponse, setLoginResponse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleSignIn = () => {
    if (!username || !password) {
      setLoginResponse("Please fill in all fields.");
      return;
    }

    setLoading(true); 

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": username,
      "password": password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://rentv-g660.onrender.com/lender/signin", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Username or password incorrect.");
        }
        return response.json();
      })
      .then((result) => {
        setLoginResponse(result.message);
        navigation.navigate('Dashboard', { option: 'Dashboard' });

        AsyncStorage.setItem('username', username)
          .then(() => console.log('Username saved to AsyncStorage'))
          .catch(error =>
            console.error('Error saving username to AsyncStorage:', error)
          );
      })
      .catch((error) => {
        console.error(error)
        setLoginResponse(error.message || "An error occurred during sign in.");
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  const handleSignup = () => {
    navigation.navigate('Signup', { option: 'Signup' })
  };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View>
          {loginResponse && (
            <View style={styles.loginResponseContainer}>
              <Text style={styles.loginResponseText}>{loginResponse}</Text>
            </View>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
          <TextInput style={styles.input} secureTextEntry={true} placeholder="password" value={password} onChangeText={(text) => setPassword(text)} />
        </View>


        <FilledButton text={'Sign In'} onPress={handleSignIn} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signinButton}> Sign up</Text>
          </TouchableOpacity>
        </View>
        {/* Conditionally render the loading indicator */}
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </View>
    // </ScrollView>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    fontWeight: '700',
    fontSize: width * 0.10,
  },
  inputContainer: {
    width: '100%', // Take full width
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 20
  },
  footer: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  footerText: {
    fontSize: width * 0.032,
  },
  signinButton: {
    fontSize: width * 0.032, // Responsive font size
    color: 'blue',
    textDecorationLine: 'underline',
  },
  loginResponseContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f2dede',
  },
  loginResponseText: {
    fontSize: width * 0.04, // Responsive font size
    color: 'blue',
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SigninScreen;
