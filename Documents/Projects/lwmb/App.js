import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/WelcomeScreen';
import LoginScreen from './app/artist/login/LoginScreen';
import RegisterScreen from './app/artist/register/RegisterScreen';
// import { useDimensions } from '@react-native-community/hooks';

export default function App() {
  return (
    // <WelcomeScreen />
    // <LoginScreen />
    <RegisterScreen />
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
