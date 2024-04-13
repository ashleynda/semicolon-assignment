import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

const Button2 = (props) => {      
      return (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{props.text}</Text>
          </TouchableOpacity>
        )

};

const styles = StyleSheet.create({
  button:{
    backgroundColor:'blue',
    height: 60,
    width: 370,
    justifyContent: 'center',
    borderRadius: 12,
  },
  btnText:{
    color:'#FFFFFF',
    alignSelf:'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})



export default Button2;