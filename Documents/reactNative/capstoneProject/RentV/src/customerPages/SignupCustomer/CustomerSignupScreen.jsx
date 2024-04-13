import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator, SafeAreaView, Dimensions } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';

const CustomerSignupScreen = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [username, setUserName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationCustomerResponse, setRegistrationCustomerResponse] = useState('');
  const [isBlurred, setIsBlurred] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showError, setShowError] = useState(true);

  const handleSubmit = () => {
    if (!fullName || !username || !address || !email || !password) {
      setRegistrationCustomerResponse('Please fill in all fields.');
      setTimeout(() => {
        setRegistrationCustomerResponse('');
      }, 2000); 
      return;
    }

    setLoading(true);

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      fullName: fullName,
      username: username,
      address: address,
      email: email,
      password: password
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch('https://rentv-g660.onrender.com/customer/signup', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setRegistrationCustomerResponse(result.message);
        navigation.navigate('CustomerDashboard', { option: 'CustomerDashboard' });
      })
      .catch((error) => {
        console.error(error);
        setRegistrationCustomerResponse('An error occurred during sign up.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSignin = () => {
    navigation.navigate('SignupCustomerLogin', {
      option: 'SignupCustomerLogin'
    });
  };

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleBlur = () => {
    setIsBlurred(true);
  };

  const handleChange = () => {
    setShowError(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.headerText}>Welcome to RentV</Text>
        </View>
        <Text>Create your account.</Text>
        <View>
          {registrationCustomerResponse && (
            <View style={styles.registrationResponseCustomer}>
              <Text style={styles.registrationResponseText}>{registrationCustomerResponse}</Text>
            </View>
          )}
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter fullName"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter username"
            value={username}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType='email-address'
          />
          {isBlurred && !passwordRegex.test(password) && (
            <Text style={styles.error}>
              Password must contain at least one lowercase letter, one uppercase letter, one number,
              one special character, and be at least 8 characters long.
            </Text>
          )}
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onBlur={handleBlur}
            onFocus={handleChange}
          />
        </View>

        <View style={styles.butt}>
          <FilledButton text={'Sign Up'} onPress={handleSubmit}/>
        </View>


        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleSignin}>
            <Text style={styles.signinButton}>Sign in</Text>
          </TouchableOpacity>
        </View>
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.08,
    marginTop: 20,
    gap: 10
  },
  headerText: {
    fontWeight: '700',
    fontSize: width * 0.07,
    marginBottom: 10,
  },
  inputContainer: {
    
  },
  input: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderRadius: 25,
    paddingHorizontal: 20
  },
  butt: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  footer: {
    marginVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 50,
  },
  footerText: {
    fontSize: width * 0.032,
  },
  signinButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: width * 0.032,
  },
  registrationResponseCustomer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5
  },
  registrationResponseText: {
    fontSize: width * 0.05,
    color: 'blue'
  },
  error: {
    fontSize: width * 0.035,
    color: 'red',
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default CustomerSignupScreen;
