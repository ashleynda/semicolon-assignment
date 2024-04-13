import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const DrawerSide = () => {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); 
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false); 
    navigation.navigate('Dashboard'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburger} onPress={toggleDrawer}>
        <Ionicons name={isDrawerOpen ? 'close' : 'menu'} size={24} color="black" />
      </TouchableOpacity>
      {isDrawerOpen && (
        <View style={styles.drawerContent}>
          {/* <TouchableOpacity style={styles.menuItem} onPress={closeDrawer}>
            <Ionicons name="close" size={24} color="black" />
            <Text style={styles.menuText}>Cancel</Text>
          </TouchableOpacity> */}
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
            <Ionicons name="person" size={24} color="black" />
            <Text style={styles.menuText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('View')}>
            <Ionicons name="car" size={24} color="black" />
            <Text style={styles.menuText}>View Cars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('UploadCars')}>
            <Ionicons name="image" size={24} color="black" />
            <Text style={styles.menuText}>Upload Cars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Withdraw')}>
            <Ionicons name="cash" size={24} color="black" />
            <Text style={styles.menuText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('TransactionHistory')}>
            <Ionicons name="time" size={24} color="black" />
            <Text style={styles.menuText}>Transaction History</Text>
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
  },
  hamburger: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1001, // Make sure the hamburger is above other content
  },
  drawerContent: {
    position: 'relative',
    top: 10,
    bottom: 0,
    right: 80,
    width: 250, // Adjust the width of the drawer as needed
    backgroundColor: 'grey',
    elevation: 16, // Android elevation for shadow
    zIndex: 5, // Make sure the drawer is above other content
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

export default DrawerSide;


