import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomerLoginScreen = () => {
  const navigation = useNavigation();
  const [customerloginResponse, setCustomerLoginResponse] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    if (!username || !password) {
      setCustomerLoginResponse("Please fill in all fields.");
      setTimeout(() => {
        setCustomerLoginResponse('');
      }, 2000);
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

    fetch("https://rentv-g660.onrender.com/customer/signin", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Username or password incorrect.");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);

        AsyncStorage.setItem('username', username)
          .then(() => console.log('Username saved to AsyncStorage'))
          .catch(error =>
            console.error('Error saving username to AsyncStorage:', error)
          );
        navigation.navigate('CustomerDashboard', { option: 'CustomerDashboard' });

      })
      .catch((error) => {
        console.error(error)
        setCustomerLoginResponse(error.message || "An error occurred during sign in.");
        setTimeout(() => {
          setCustomerLoginResponse('');
        }, 3000);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSignup = () => {
    navigation.navigate('SignupCustomer', { option: 'SignupCustomer' })
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View>
        {customerloginResponse && (
          <View style={styles.loginResponseContainer}>
            <Text style={styles.loginResponseText}>{customerloginResponse}</Text>
          </View>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={(text) => setUsername(text)} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" value={password} onChangeText={(text) => setPassword(text)} />
      </View>

      <FilledButton text={'Sign In'} onPress={handleSignIn} />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account yet?</Text>
        <TouchableOpacity onPress={handleSignup}>
          <Text style={styles.signupButton}> SignUp</Text>
        </TouchableOpacity>
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const { width } = Dimensions.get('window');

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
    fontSize: width * 0.10, // Responsive font size
  },
  inputContainer: {
    width: '100%', // Take full width
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%', // Take full width
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
    fontSize: width * 0.032, // Responsive font size
  },
  signupButton: {
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

export default CustomerLoginScreen;
