// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { DrawerContentScrollView } from '@react-navigation/drawer';
// import { useNavigation } from '@react-navigation/native';

// const SidePane = ({ navigation }) => {
//   const navigate = useNavigation();
//   return (
//     <DrawerContentScrollView>
//       <View style={styles.container}>
//         <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
//           <Text style={styles.link}>Dashboard</Text>
//         </TouchableOpacity>
//         {/* Add more navigation links as needed */}
//       <View style={styles.side}>
//         <Button
//         title="Go to FindACar"
//         onPress={() => navigation.navigate('Find')}
//       />

//       <Button
//         title="Go to BookACar"
//         onPress={() => navigation.navigate('Book')}
//       /> 
   
      
//       <Button
//         title="Go to Summary Details"
//         onPress={() => navigation.navigate('Summary')}
//       />

//       <Button
//         title="Go to Payment Details"
//         onPress={() => navigation.navigate('Payment')}
//       /> 

//        <Button
//         title="Go to Booked Successfully"
//         onPress={() => navigation.navigate('Booked')}
//       />

//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
        
//       </View>
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   link: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   side: {
  
//   }
// });

// export default SidePane;
