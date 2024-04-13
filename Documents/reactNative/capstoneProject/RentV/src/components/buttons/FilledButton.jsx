// import React from 'react';
// import PropTypes from 'prop-types';
// import { TouchableOpacity, Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const Button = ({ title, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.button} onPress={onPress}>
//       <Text style={styles.buttonText}>{title}</Text>
//     </TouchableOpacity>
//   );
// };

// // const GradientButton = ({ title, onPress }) => {
// //   return (
// //     <TouchableOpacity onPress={onPress}>
// //       <LinearGradient
// //        colors={['black']}
// //         style={styles.button}
// //         start={{ x: 0, y: 0 }}
// //         end={{ x: 1, y: 0 }}
// //       >
// //         <Text style={styles.buttonText}>{title}</Text>
// //       </LinearGradient>
// //     </TouchableOpacity>
// //   );
// // };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: 'black',
//     borderRadius: 24,
//     padding: 10,
//     alignItems: 'center',
//     width: 120,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Button;

import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const FilledButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.btnText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height: 60,
    width: 300,
    justifyContent: 'center',
    borderRadius: 12
  },
  btnText: {
    color: '#FFFFFF',
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default FilledButton
