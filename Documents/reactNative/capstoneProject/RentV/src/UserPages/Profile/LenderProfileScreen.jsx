import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const LenderProfileScreen = () => {
  const [userData, setUserData] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState("");
  const navigation = useNavigation("");
  


  const handleEditProfile = () => {
    navigation.navigate('EditLender', {option: 'EditLender'})
  };

  const handleSelectImage = async () => {
    try {
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert('Permission to access camera roll is required!');
        return;
      }
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.canceled) {
        uploadImage(result.uri); 
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const uploadImage = async (uri) => {
    const formData = new FormData();
    formData.append('image', {
      uri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const data = await response.json();
      setImage(data.imageUrl); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = await AsyncStorage.getItem("username")
        const userDataFromStorage = await AsyncStorage.getItem('userData');
        if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
          setLoading(false);
        } else {
          const response = await fetch(`https://rentv-g660.onrender.com/lender/${username}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userDataFromAPI = await response.json();
          setUserData(userDataFromAPI);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        // setError('Failed to fetch user data');
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <UserProfilePicture name={userData && userData.fullName ? userData.fullName : ''} />
        
        {/* <TouchableOpacity onPress={handleSelectImage}>
          <Image
            style={styles.profileImage}
            // source={image ? { uri: image } : require('./defaultProfileImage.jpg')}
            source={image ? { uri: image } : require('../../../assets/adaptive-icon.png')}
          />
        </TouchableOpacity>
          {/* <Text style={styles.username}>{userData ? userData.id : 'Full Name not available'}</Text> */}
      </View> 
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Id:</Text>
            <Text style={styles.detailValue}>{userData ? userData.id : 'Id not available'}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Username:</Text>
            <Text style={styles.detailValue}>{userData ? userData.username : 'Username not available'}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Email:</Text>
            <Text style={styles.detailValue}>{userData ? userData.email : 'Email not available'}</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailLabel}>Balance:</Text>
            <Text style={styles.detailValue}>{userData ? userData.balance : 'Address not available'}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={handleEditProfile}
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  detailValue: {
    color: 'blue',
    fontSize: 15,
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  editProfileButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LenderProfileScreen;