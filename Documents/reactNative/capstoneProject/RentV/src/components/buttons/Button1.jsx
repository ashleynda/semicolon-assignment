import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';





const Button1 = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      
    </TouchableOpacity>
  );
};

// const GradientButton = ({ title, onPress }) => {
//     return (
//       <TouchableOpacity onPress={onPress}>
//         <LinearGradient
//            colors={['rgb(153, 153, 153)', 'rgb(153, 153, 153)']}
//           style={styles.button}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 1, y: 0 }}
//         >
//           <Text style={styles.buttonText}>{title}</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     );
//   };

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 24,
    padding: 10,
    alignItems: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Button1;

 

