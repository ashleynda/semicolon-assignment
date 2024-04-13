import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorPage = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Oops! An error occurred:</Text>
      <Text style={styles.errorMessage}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 300,
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
});

export default ErrorPage;