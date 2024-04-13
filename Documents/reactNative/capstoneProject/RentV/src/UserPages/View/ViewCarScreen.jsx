import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button1 from '../../components/buttons/Button1';
import FilledButton from '../../components/buttons/FilledButton';

const ViewCarScreen = () => {
  const [username, setUsername] = useState('')
  const [uploadedCars, setUploadedCars] = useState([])
  const navigation = useNavigation()

    const handleButtonPress = async () => {
        try {
            const response = await fetch('https://rentv-g660.onrender.com/lender/viewUploadedCar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                }),
            });
            const result = await response.json();
            console.log(result);
            setUploadedCars(result); // Set the uploaded cars data

      // Navigate to UploadedCarsListScreen and pass the uploaded cars data as a parameter
      navigation.navigate('UploadedCarsList', { uploadedCars: result })
    } catch (error) {
      console.error(error)
      Alert.alert('Error', 'Failed to view cars. Please try again later.')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

            <View style={styles.view}>
                <FilledButton text={"View Car"} onPress={handleButtonPress} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        marginTop: 20,
        marginVertical: 20,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    view: {
        paddingHorizontal: 15,

    },
});

export default ViewCarScreen
