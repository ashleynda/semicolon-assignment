import React from 'react';
import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
  const navigation = useNavigation();

  const handleSignUpCustomer = () => {
    navigation.navigate('SignupCustomer')
  }

  const handleSignupLender = () => {
    navigation.navigate('Signup')
  }
  return (
    <View style={styles.container}>
      <FilledButton text={'Sign up As Customer'} onPress={handleSignUpCustomer} />
      <FilledButton text={'Sign up As Lender/User'} onPress={handleSignupLender}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
  },
});

export default GetStartedScreen;
