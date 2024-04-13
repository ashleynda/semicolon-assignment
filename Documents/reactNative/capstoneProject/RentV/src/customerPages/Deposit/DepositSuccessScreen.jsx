import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
// import FilledButton from './FilledButton'; // assuming FilledButton is a custom component
import FilledButton from '../../components/buttons/FilledButton';
import { useNavigation } from '@react-navigation/native';

const DepositSuccessScreen = () => {
    const navigation = useNavigation("");

    const handleChange = () => {
        navigation.navigate('CustomerDashboard', {option: 'CustomerDashboard'})
    };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Deposit Successful</Text>
        <FilledButton text={'OK'} onPress={handleChange}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // background color of SafeAreaView
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    marginBottom: 20,
  },
});

export default DepositSuccessScreen;
