import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WithdrawalSuccessScreen = ({ status, onPressOk }) => {
    const navigation = useNavigation('');

    const handleBack = () => {
        navigation.navigate('Dashboard', {option: 'Dashboard'})
    }
  let message = '';
  switch (status) {
    case 'success':
      message = 'Withdrawal successful!';
      break;
    case 'failure':
      message = 'Withdrawal failed. Please try again later.';
      break;
    case 'pending':
      message = 'Withdrawal is pending. Please check again later.';
      break;
    default:
      message = '';
      break;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title="OK" onPress={handleBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default WithdrawalSuccessScreen;
