// import { useNavigation } from '@react-navigation/native';
// import React, {useState} from 'react'
// import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
// import { Ionicons } from '@expo/vector-icons';

// const DrawerSide2 = ({ navigation }) => {
//   // const navigation = useNavigation();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen); // Toggle the state of the drawer
//   };

//   const closeDrawer = () => {
//     setIsDrawerOpen(false); // Close the drawer
//     navigation.navigate('CustomerDashboard');// Navigate to the Home screen
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.hamburger} onPress={toggleDrawer}>
//         <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={24} color="black" />
//       </TouchableOpacity>
//       {isDrawerOpen && (
//         <View style={styles.drawerContent}>
//           {/* <TouchableOpacity style={styles.menuItem} onPress={closeDrawer}>
//             <Ionicons name="close" size={24} color="black" />
//             <Text style={styles.menuText}>Cancel</Text>
//           </TouchableOpacity> */}
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CustomerProfile')}>
//             <Ionicons name="person" size={24} color="black" />
//             <Text style={styles.menuText}>Customer Profile</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Book')}>
//             <Ionicons name="book" size={24} color="black" />
//             <Text style={styles.menuText}>Book A Car</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Summary')}>
//             <Ionicons name="time" size={24} color="black" />
//             <Text style={styles.menuText}>Summary Details</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
//             <Ionicons name="log-out" size={24} color="black" />
//             <Text style={styles.menuText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'transparent',
//   },
//   hamburger: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     zIndex: 1001, // Make sure the hamburger is above other content
//   },
//   drawerContent: {
//     position: 'relative',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     width: 250, // Adjust the width of the drawer as needed
//     backgroundColor: 'white',
//     elevation: 16, // Android elevation for shadow
//     zIndex: 5, // Make sure the drawer is above other content
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   menuText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
// });
  

// export default DrawerSide2



// // summary details
// // customer profile
// // withdraw


import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DrawerSide2 = ({ navigation }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle the state of the drawer
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false); // Close the drawer
    navigation.navigate('CustomerDashboard'); // Navigate to the Home screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburger} onPress={toggleDrawer}>
        <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={28} color="black" />
      </TouchableOpacity>
      {isDrawerOpen && (
        <View style={styles.drawerContent}>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CustomerProfile')}>
            <Ionicons name="person" size={24} color="black" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Book')}>
            <Ionicons name="book" size={24} color="black" />
            <Text style={styles.menuText}>Book A Car</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Summary')}>
            <Ionicons name="time" size={24} color="black" />
            <Text style={styles.menuText}>Summary Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
            <Ionicons name="log-out" size={24} color="black" />
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative', 
  },
  hamburger: {
    position: 'absolute',
    right: 20,
    zIndex: 1001, 
    marginTop: -12,
  },
  drawerContent: {
    position: 'relative',
    top: 0,
    right: 180,
    bottom: 0,
    width: 250, 
    backgroundColor: 'grey',
    elevation: 16, 
    zIndex: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default DrawerSide2;

