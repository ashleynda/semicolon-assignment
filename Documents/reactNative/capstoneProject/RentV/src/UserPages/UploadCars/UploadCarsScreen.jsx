import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import FilledButton from '../../components/buttons/FilledButton'



const UploadCarsScreen = ({ route }) => {
    const { carBrand } = route.params;
    const [uploadCarsResponse, setUploadCarsResponse] = useState('');
    const [carBrands, setCarBrands] = useState('');
    const [carModel, setCarModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [pricePerDay, setPricePerDay] = useState('');
    const [plateNumber, setPlateNumber] = useState('');
    const [lenderUsername, setLenderUsername] = useState('');
    const [image, setImage] = useState("");

    const navigation = useNavigation();

    const uploadImageToCloudinary = async(uri) => {
        const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dcaaesbhv/image/upload';
        const cloudinaryPreset = 'qsgbbzjn';
      
        console.log(uri);
        const filename = uri.split('/').pop();
      
        const formData = new FormData();
        formData.append('file', {
          uri: uri,
          type: 'image/jpeg', 
          name: filename,
        });
        formData.append('upload_preset', cloudinaryPreset);
      
        try {
          const response = await fetch(cloudinaryUrl, {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`Cloudinary upload failed with status ${response.status}`);
          }
      
          const data = await response.json();
          console.log('Image uploaded successfully:', data);
          return data.secure_url; 
        } catch (error) {
          console.error('Error uploading image to Cloudinary:', error);
          throw error; 
        }
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
                console.log(result.assets[0].uri);
                setImage(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error selecting image:', error);
        }
    };

    const handleUploadSuccess = async () => {
        const imageUrl = await uploadImageToCloudinary(image);
        const requestBody = {
            carBrand,
            carModel,
            year,
            color,
            pricePerDay,
            plateNumber,
            lenderUsername,
            imageLink: imageUrl,
            available: false,
        };

        fetch("https://rentv-g660.onrender.com/lender/uploadCar", {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then(result => {
            console.log(result);
            setUploadCarsResponse(result.message);
            navigation.navigate('Uploaded', {
                option: 'Uploaded',
                carBrand: carBrand,
                plateNumber: plateNumber,
            });
        })
        .catch(error => {
            console.error(error);
            setUploadCarsResponse('An error occurred during upload.');
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container1}>
                <View>
                    {uploadCarsResponse && (
                        <View style={styles.uploadCarsResponseContainer}>
                            <Text style={styles.uploadCarsResponseText}>{uploadCarsResponse}</Text>
                        </View>
                    )}
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter car Brand"
                        value={carBrand}
                        onChangeText={(text) => setCarBrands(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter car model"
                        value={carModel}
                        onChangeText={(text) => setCarModel(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter car year"
                        value={year}
                        onChangeText={(text) => setYear(text)}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter car color"
                        value={color}
                        onChangeText={(text) => setColor(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter price per day"
                        value={pricePerDay}
                        onChangeText={(text) => setPricePerDay(text)}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter plate number"
                        value={plateNumber}
                        onChangeText={(text) => setPlateNumber(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Enter lender username"
                        value={lenderUsername}
                        onChangeText={(text) => setLenderUsername(text)}
                    />
                </View>
            </View>
            <View style={styles.selectedImage}>
                <Button title="Select Image" onPress={handleSelectImage} style={styles.select} />
                <FilledButton text={'Upload'} onPress={handleUploadSuccess} style={styles.upload} />                
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 10
  },
  container1: {
    gap: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    marginVertical: 5
  },
  selectedImage: {
    paddingHorizontal: 26,
    gap: 10,
  },
  uploadCarsResponseContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5
  },
  uploadCarsResponseText: {
    fontSize: 20,
    color: 'blue'
  },
  select: {
    borderRadius: 80,
    color: 'red',
  },
  upload:{
    // paddingHorizontal: 30,
    // marginRight: 20,
  }
})

export default UploadCarsScreen;

