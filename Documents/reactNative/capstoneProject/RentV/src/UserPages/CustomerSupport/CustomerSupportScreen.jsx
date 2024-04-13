import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CustomerSupportScreen = () => {
  const [message, setMessage] = React.useState('');
  const navigation = useNavigation();

  const sendMessage = () => {
    console.log('Sending message:', message);
    alert('Message sent successfully!');
    setMessage('');
    navigation.navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How can we help you?</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Type your message..."
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button 
      title="Send Message" 
      onPress={sendMessage} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 26,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    textAlignVertical: 'top', 
  },
});

export default CustomerSupportScreen;
