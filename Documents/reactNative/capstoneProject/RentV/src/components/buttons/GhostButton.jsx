import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const GhostButton = (props) => {      
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.btnText}>{props.text}</Text>
        </TouchableOpacity>
      )

};

const styles = StyleSheet.create({
    button:{
    //   backgroundColor:'blue',
      height: 60,
      width: 300,
      justifyContent: 'center',
      borderRadius: 12,
    },
    btnText:{
      color:'gray',
      alignSelf:'center',
      fontSize: 18,
      fontWeight: 'bold'
    }
  })



export default GhostButton;