// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const CustomerProfile = () => {
//   // const [image, setImage] = useState("");

//   // const handleSelectImage = async () => {
//   //   try {
//   //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//   //     if (!permissionResult.granted) {
//   //       alert('Permission to access camera roll is required!');
//   //       return;
//   //     }
//   //     const result = await ImagePicker.launchImageLibraryAsync({
//   //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//   //       allowsEditing: true,
//   //       aspect: [4, 3],
//   //       quality: 1,
//   //     });
//   //     if (!result.cancelled) {
//   //       setImage(result.uri);
//   //     }
//   //   } catch (error) {
//   //     console.log('Error selecting image:', error);
//   //   }
//   // };

//   const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = "";

//     const requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };

//     fetch("http://localhost:8080/customer/ACP new", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         {/* <TouchableOpacity onPress={handleSelectImage}>
//           <Image
//             style={styles.profileImage}
//             source={image ? { uri: image } : require('./defaultProfileImage.jpg')}
//           />
//         </TouchableOpacity> */}
//         <Text style={styles.username}>Your Username</Text>
//         <Text style={styles.bio}>A brief bio about yourself.</Text>
//       </View>
//       <View style={styles.detailsContainer}>
//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Email:</Text>
//           <Text style={styles.detailValue}>your.email@example.com</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Text style={styles.detailLabel}>Location:</Text>
//           <Text style={styles.detailValue}>City, Country</Text>
//         </View>
//       </View>
//       <TouchableOpacity
//         style={styles.editProfileButton}
//         onPress={() => {
//           console.log('Edit Profile button pressed');
//         }}
//       >
//         <Text style={styles.editProfileButtonText}>Edit Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: 20,
//   },
//   header: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 10,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   bio: {
//     fontSize: 16,
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   detailsContainer: {
//     width: '100%',
//     marginBottom: 20,
//   },
//   detailItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontWeight: 'bold',
//   },
//   detailValue: {},
//   editProfileButton: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//   },
//   editProfileButtonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
// });

// export default LenderProfileScreen;



import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UserProfilePicture from '../../components/images/UserProfilePictureScreen';


const CustomerProfileScreen = ({ customerUsername }) => {
  const [userData, setUserData] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);

//   const handleSelectImage = async () => {
//     try {
//         const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (!permissionResult.granted) {
//             alert('Permission to access camera roll is required!');
//             return;
//         }
//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             allowsEditing: true,
//             aspect: [4, 3],
//             quality: 1,
//         });
//         if (!result.canceled) {
//             setImage(result.uri);
//         }
//     } catch (error) {
//         console.log('Error selecting image:', error);
//     }
// };

// const uploadImage = async (uri) => {
//   const formData = new FormData();
//   formData.append('image', {
//     uri,
//     name: 'image.jpg',
//     type: 'image/jpeg',
//   });

//   try {
//     const response = await fetch('YOUR_UPLOAD_ENDPOINT', {
//       method: 'POST',
//       body: formData,
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     if (response.ok) {
//       const data = await response.json();
//       // Assuming the response contains the updated image URL
//       setImage(data.imageUrl);
//     } else {
//       console.error('Failed to upload image:', response.status);
//     }
//   } catch (error) {
//     console.error('Error uploading image:', error);
//   }
// };




  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const username = await AsyncStorage.getItem('username');
        const userDataFromStorage = await AsyncStorage.getItem('userData');
        if (userDataFromStorage) {
          setUserData(JSON.parse(userDataFromStorage));
          setLoading(false);
        } else {
          const response = await fetch(`https://rentv-g660.onrender.com/customer/${username}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userDataFromAPI = await response.json();
          setUserData(userDataFromAPI);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);

  // onPress={handleSelectImage}>

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <UserProfilePicture name={userData && userData.fullName ? userData.fullName : ''} />

        {/* <TouchableOpacity >
          <Image
            style={styles.profileImage}

            // source={image ? { uri: image } : require('./defaultProfileImage.jpg')}
            // source={image ? { uri: image } : require('../../../assets/adaptive-icon.png')}
          />
        </TouchableOpacity> */}
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Full Name:</Text>
          <Text style={styles.detailValue}>{userData ? userData.fullName : 'Full Name not available'}</Text>
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
          <Text style={styles.detailLabel}>Address:</Text>
          <Text style={styles.detailValue}>{userData ? userData.address : 'Address not available'}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => {
          console.log('Edit Profile button pressed');
        }}
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
  },
  detailValue: {},
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

export default CustomerProfileScreen;

