import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const BookSuccessScreen = () => {
    return (
        <View style={styles.container}>            
            <FontAwesomeIcon icon={faCheckDouble} size={45} color="blue"/>
            <Text>
                Congratulation you have booked a {`$`} {'\n'}
                Successfully. Go to my booking for more details.
            </Text>
            <View style={styles.back}>
                <Text>Back to home</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',        
    },
    back: {
        paddingHorizontal: 120,
        alignItems: 'flex-start',
    },
})

export default BookSuccessScreen;