import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet } from 'react-native';
import FilledButton from '../../components/buttons/FilledButton';

const SearchCarScreen = () => {
    const [carBrand, setCarBrand] = useState('');
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const handleView = () => {
        const requestBody = JSON.stringify({ brand: carBrand });
    
        fetch("https://rentv-g660.onrender.com/customer/searchForCar", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json", 
            },
        })
        .then((response) => response.json()) 
        .then(result => {
            console.log(result);
            navigation.navigate('Upload', { option: 'Upload', carBrand }); // Pass carBrand as a parameter
        })
        .catch(error => {
            console.error(error);
        });
       

      
    };
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter car brand"
                    value={carBrand}
                    onChangeText={(text) => setCarBrand(text)}
                />
            </View>
            
            <View style={styles.buttonsContainer}>
                <FilledButton text={'Search'} onPress={handleView} style={styles.search} />  
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        justifyContent: 'space-between',
    },
    inputContainer: {
        // marginBottom: 20,
        // flexDirection: 'row',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

export default SearchCarScreen;