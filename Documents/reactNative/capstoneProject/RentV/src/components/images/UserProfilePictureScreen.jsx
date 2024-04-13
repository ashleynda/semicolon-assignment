import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserProfilePicture = ({ name }) => {
  // Function to generate initials
  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map((name) => name[0]).join('').toUpperCase();
  };

  // Generate initials from name
  const initials = getInitials(name);

  return (
    <View style={styles.container}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120, // Adjust size as needed
    height: 120, // Adjust size as needed
    borderRadius: 60, // Make it a circle
    // backgroundColor: 'lightgrey',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default UserProfilePicture;
