import React, { useState } from 'react';
import { ScrollView, TextInput, View, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const EditLenderProfileScreen = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
        // justifyContent: 'center',
        padding: 40,
        paddingHorizontal: width * 0.05,
    },
    inputContainer: {
        alignItems: 'center',
        gap: 20,
    },
    input: {
        borderWidth: 1,
        width: width * 0.9,
        height: height * 0.05,
        marginVertical: height * 0.01,
        borderRadius: height * 0.025,
        paddingHorizontal: width * 0.04,
    },
});

export default EditLenderProfileScreen;
