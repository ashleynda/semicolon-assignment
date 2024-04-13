import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faNairaSign } from '@fortawesome/free-solid-svg-icons';
import Button2 from "../../components/buttons/Button2.";

const SummaryDetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Car:
            </Text>

            <View style={styles.input}>
                <View style={styles.inputRow}>
                    <Text style={styles.inputRow1}>Pickup Location:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Details"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputRow1}>Return Location:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Details"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputRow1}>Pickup Date & Time:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Details"
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.inputRow1}>Return Date & Time:</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Details"
                    />
                </View>
            </View>

            <View style={styles.lineStyle} />

            <View >
                <View style={styles.amount}>
                    <Text style={styles.duration}>Per day rent:</Text>
                    <Text>    <FontAwesomeIcon icon={faNairaSign} size={12} color="gray"/>220</Text>

                </View>

                <View style={styles.amount}>
                    <Text style={styles.duration}>Two days rent:</Text>
                    <Text>    <FontAwesomeIcon icon={faNairaSign} size={12} color="gray"/>440</Text>
                </View>

                <View style={styles.amount}>
                    <Text style={styles.duration}>Total Payment:</Text>
                    <Text>    <FontAwesomeIcon icon={faNairaSign} size={12} color="gray"/>440</Text>
                </View>

                <View style={styles.btn}>
                    <Button2 text='continue'  />
                </View>



            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingHorizontal: 10,
    },
    input: {
        gap: 20,
        // width: '100%',
        // paddingHorizontal: 40,
    },
    inputRow: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        // alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    inputRow1: {
        fontSize: 18,
        color: 'black',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingHorizontal: 20,
        width: '98%',
        borderRadius: 8,
        backgroundColor: 'white',
        height: 40,

    },
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        margin: 10,
        marginTop: 90,
    },
    amount: {
        flexDirection: 'row',
        gap: 180,
        
    },
    duration: {
        paddingHorizontal: 15,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 40,
        paddingTop: 114,
    },
});

export default SummaryDetailsScreen;
