import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Button1 from '../../components/buttons/Button1';
import { useNavigation } from '@react-navigation/native';
import FilledButton from '../../components/buttons/FilledButton';

const UploadedCarsListScreen = ({ route }) => {
    const { uploadedCars } = route.params; // Assuming uploadedCars is an array of car objects
    const navigation = useNavigation('');

    const handleBack = () => {
        navigation.navigate('Dashboard', {option: 'Dashboard'});
    }
   

    return (
        <ScrollView>
            <View style={styles.container}>
                {uploadedCars.map((car, index) => (
                    <View key={index} style={styles.carContainer}>
                        <Image source={{ uri: car.image }} style={styles.image} />
                        <Text>Brand: {car.brand}</Text>
                        <Text>Color: {car.color}</Text>
                        <Text>Model: {car.model}</Text>
                        <Text>Plate Number: {car.plateNumber}</Text>
                        <Text>Price Per Day: {car.pricePerDay}</Text>
                        <Text>Year: {car.year}</Text>
                        <Text>Lender: {car.lenderUsername.username}</Text>                        
                    </View>
                ))}
                <View style={styles.back}>
                    <FilledButton text={'Back to dashboard'} onPress={handleBack}  />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,        
    },
    carContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        gap: 10,
    },
    image: {
        // width: 200,
        height: 200,
        marginBottom: 10,
    },
    back: {
        paddingHorizontal: 40,

    },
  
  
});

export default UploadedCarsListScreen;
