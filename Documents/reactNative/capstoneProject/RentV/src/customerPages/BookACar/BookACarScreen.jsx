import React, { useState } from "react";
import { ScrollView, View, TextInput, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FilledButton from "../../components/buttons/FilledButton";

const BookACarScreen = () => {
    const navigation = useNavigation();
    const [selectedUsername, setSelectedUsername] = useState("");
    const [selectedPlateNumber, setSelectedPlateNumber] = useState("");
    const [numberOfDays, setNumberOfDays] = useState("");
    const [bookCarResponse, setBookCarResponse] = useState("");
    const route = useRoute();
    const { plateNumber: navigationPlateNumber = '', routeUsername } = route.params;
    console.log('Route params:', route.params);

    useState(() => {
        setSelectedUsername(routeUsername);
        setSelectedPlateNumber(navigationPlateNumber);
    }, []);

    const handleDeposit = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        
        const raw = JSON.stringify({
        "username": selectedUsername,
        "plateNumber": navigationPlateNumber,
        "numberOfDays": numberOfDays
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("https://rentv-g660.onrender.com/customer/bookACar", requestOptions)
    .then((response) => response.json())
    .then((result) => {
        console.log(result); // Ensure the correct response is received

        // Check if the car is found
        if (result.message === "Car Not Found") {
            setBookCarResponse(result.message);
        } else {
            const userEmail = result.bookingDetails.customer.email;
            const bookingId = result.bookingDetails.id;
            console.log(bookingId);

            setBookCarResponse("Car booked successfully.");
            navigation.navigate('Deposit', { option: 'Deposit', email: userEmail, price: result.totalPrice ,billingDetail: { billingEmail: userEmail}, bookingId});
        }
    })
    .catch((error) => {
        console.error(error);
        setBookCarResponse("An error occurred in booking.");
    });
    };
    

    return(
        <ScrollView style={styles.container}>
            <View style={styles.container1}>
            <View>
                {bookCarResponse && ( // Render registration response if available
                <View style={styles.bookCarResponseContainer}>
                    <Text style={styles.bookCarResponseText}>{bookCarResponse}</Text>
                </View>
                )}
            </View>
                <View>            
                    <TextInput
                    style={styles.input}
                    placeholder="Enter username"
                    value={selectedUsername}
                    onChangeText={(text) => setSelectedUsername(text)}
                    />
                    {/* <View>
                        <Text style={styles.input1}> <Text>{navigationUsername}</Text></Text>
                    </View> */}
                   <View>
                        <Text style={styles.input1}> <Text>{selectedPlateNumber}</Text></Text>
                    </View>


                    {/* <TextInput
                    style={styles.input}
                    placeholder="Enter plate number"
                    value={selectedPlateNumber}
                    onChangeText={(text) => setSelectedPlateNumber(text)}
                    /> */}
                    <TextInput
                    style={styles.input}
                    placeholder="Enter number of days"
                    value={numberOfDays}
                    onChangeText={(text) => setNumberOfDays(text)}
                    keyboardType="numeric"
                    />
                </View>

                <View style={styles.deposit}>
                    <FilledButton text={'Next'} onPress={handleDeposit} />
                </View>



            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,   
        gap: 10,     
    },
    container1: {
        gap: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        padding: 10,
        marginVertical: 5,
    },
    input1: {
        fontSize: 16,
    },
    deposit: {
      paddingHorizontal: 10,
    },
    bookCarResponseContainer: {
        marginTop: 20,
        // backgroundColor: '#eee',
        padding: 10,
        borderRadius: 5,
    },
    bookCarResponseText: {
        fontSize: 20,
        color: 'blue',
    
      },
});

export default BookACarScreen;