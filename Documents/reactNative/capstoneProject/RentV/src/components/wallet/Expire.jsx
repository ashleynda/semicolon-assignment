import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CardInput = ({ placeholder, onChangeText, secureTextEntry = false }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

const Expire = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer1}>
        <CardInput placeholder="Card Number" onChangeText={value => console.log(value)} />
        <CardInput placeholder="Card Holder Name" onChangeText={value => console.log(value)} />
      </View> */}
      <View style={styles.inputContainer}>
        <CardInput placeholder="MM" onChangeText={value => console.log(value)} />
        <View style={styles.separator}></View>
        <CardInput placeholder="YY" onChangeText={value => console.log(value)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // inputContainer1: {
  //   flexDirection: "column",
  //   alignItems: "center",
  //   marginBottom: 20,
  // },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1, 
    borderBottomColor: "gray", // Change color as needed
    // paddingVertical: 1,
  },
  separator: {
    width: 1, // Adjust width as needed
    height: 20,
    backgroundColor: "gray", // Separator line color
    marginHorizontal: 10,
  },
});

export default Expire;
