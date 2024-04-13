import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions, SafeAreaView } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [registrationResponse, setRegistrationResponse] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isBlurred, setIsBlurred] = useState('');
  const [showError, setShowError] = useState(false);
  const windowWidth = Dimensions.get('window').width;

  const handleSubmit = () => {
    if (!username || !password) {
      setRegistrationResponse('Please fill in all fields.')
      setTimeout(() => {
        setRegistrationResponse('')
      }, 2000)
      return
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordRegex.test(password)) {
      setRegistrationResponse(
        'Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long.'
      )
      return
    }

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      username: username,
      password: password,
      email: email
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    }

    fetch('https://rentv-g660.onrender.com/lender/signup', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setRegistrationResponse(result.message)
        navigation.navigate('Dashboard', { option: 'Dashboard' })
        AsyncStorage.setItem('username', username)
          .then(() => console.log('Username saved to AsyncStorage'))
          .catch((error) =>
            console.error('Error saving username to AsyncStorage:', error)
          )
      })
      .catch((error) => {
        console.error(error)
        setRegistrationResponse('An error occurred during sign up.')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleSignin = () => {
    navigation.navigate('Signin', { option: 'Signin' })
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const handleBlur = () => {
    setIsBlurred(true)
  }

  const handleChange = () => {
    setShowError(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View>
            <Text style={styles.headerText}>Welcome Lender</Text>
          </View> 
          <Text>Create your account.</Text>
          <View>
            {registrationResponse && (
              <View style={styles.registrationResponseContainer}>
                <Text style={styles.registrationResponseText}>
                  {registrationResponse}
                </Text>
              </View>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input]}
              placeholder="Enter username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={[styles.input]}
              placeholder="Enter email address"
              value={email}
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
            {isBlurred && !passwordRegex.test(password) && (
              <Text style={styles.error}>
                Password does not meet the requirements.
              </Text>
            )}
            <TextInput
              style={[styles.input]}
              secureTextEntry={true}
              placeholder="Enter password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              onBlur={handleBlur}
              onFocus={handleChange}
            />
            <Text style={styles.message}>
              Password must contain at least one lowercase letter, one uppercase
              letter, one number, one special character, and be at least 8
              characters long.
            </Text>
          </View>

          <View style={styles.butt}>
            <FilledButton text={'Sign Up'} onPress={handleSubmit} />
          </View>


          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleSignin}>
              <Text style={styles.signinButton}>Signin</Text>
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
  // header: {
  //   marginBottom: 20
  // },
  headerText: {
    fontWeight: '700',
    fontSize: width * 0.07,
    marginBottom: 10,
  },
  inputContainer: {},
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
    fontSize: width * 0.032,
    color: 'blue',
    textDecorationLine: 'underline'
  },
  lastInput: {
    marginBottom: 40
  },
  registrationResponseContainer: {
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
  message: {
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 20
  }
})

export default SignupScreen
