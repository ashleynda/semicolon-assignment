import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import FilledButton from "../../components/buttons/FilledButton";
import { useNavigation } from "@react-navigation/native";

const UploadSuccessScreen = ({ route }) => {
    const { carBrand, plateNumber } = route.params;
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Dashboard', {option: 'Dashboard'})
    }
    return (
        <View style={styles.container}>            
            <FontAwesomeIcon icon={faCheckDouble} size={60} color="blue"/>
            <Text>
                `Congratulation your {carBrand}, with plate number {plateNumber} has been uploaded , 
                Successfully. `
            </Text>
                <FilledButton text={'Back to home'} onPress={handleBack}/>
        
        </View>

    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',  
        gap: 20,      
    },
    back: {
        paddingHorizontal: 120,
        alignItems: 'flex-start',
    },
})

export default UploadSuccessScreen;