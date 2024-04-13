import React from "react";
import { View,Text, StyleSheet } from "react-native";
import ChoiceState from "../../components/Location/ChoiceState";
import ChoiceTown from "../../components/Location/ChoiceTown";
import CheckButton from "../../components/buttons/CheckButton";
import FilledButton from "../../components/buttons/FilledButton";
import Choice from "../../components/Location/Choice";

const FindACarScreen = () => {
    return(
        <View style={StyleSheet.container}>
            <View style={styles.choose}>

                <Text>Select your choice of state and town</Text>
                <Choice/>
                {/* <Text>Choose Your City:</Text>
                <ChoiceState /> */}

                {/* <Text>Choose Your Town:</Text>
                <ChoiceTown /> */}
            </View>

      <View style={styles.lineStyle} />
      <View style={StyleSheet.booker}>
        <Text>I want to book the car for:</Text>
      </View>

      <CheckButton />
      <View style={styles.buttonContainer}>
        <FilledButton text={'NEXT'} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {   
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 60, 
        
    },
    choose: {
        display: 'flex',
        gap: 40,   
        marginTop: 20,        
    },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        marginTop: 90,        
   },
   booker: {
        marginBottom: 10,
        alignSelf: 'flex-end',
   },
   buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 30
  }
})

export default FindACarScreen
