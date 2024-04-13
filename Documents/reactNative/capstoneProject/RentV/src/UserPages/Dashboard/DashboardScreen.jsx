import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, Dimensions } from 'react-native';
import DrawerSide from '../../components/drawer/DrawerSide';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button1 from '../../components/buttons/Button1';
import { useFonts } from "expo-font";

const { width, height } = Dimensions.get('window');

const DashboardScreen = () => {
  const [lenderBalance, setLenderBalance] = useState(null);
  const [uploadedCars, setUploadedCars] = useState([]);
  const [username, setUsername] = useState('');

  useEffect( () =>  {
    getUsername();
    fetchLenderBalance();
  }, []);

  const getUsername = async() => {

    setUsername(await AsyncStorage.getItem('username'))
      

    await fetchUploadedCars();
  }
  const fetchLenderBalance = async () => { 
    try {
      const lenderUsername = await AsyncStorage.getItem('username');
      const response = await fetch(`https://rentv-g660.onrender.com/lender/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch lender balance');
      }
      const data = await response.json();
      setLenderBalance(data.balance);
    } catch (error) {
      console.error('Error fetching lender balance:', error);
    }
  };

  // const fetchUploadedCars = async () => {
  //   try {
  //     const response = await fetch('https://rentv-g660.onrender.com/lender/viewUploadedCar', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //       }),
  //     });
  //     const result = await response.text();
  //     console.log("Raw response:", result);
  
  //     if (result === "User not found") {
  //       console.log("User not found");
  //       // Handle the case where user is not found, e.g., show a message to the user
  //     } else {
  //       try {
  //         const data = JSON.parse(result);
  //         setUploadedCars(data); // Set the uploaded cars data
  //       } catch (error) {
  //         console.error("Error parsing JSON:", error);
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching uploaded cars:", error);
  //   }
  // };

  

  // const fetchUploadedCars = async () => {
  //   console.log(username);
  //   try {
  //     const response = await fetch('https://rentv-g660.onrender.com/lender/viewUploadedCar', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         lenderUsername: username,
  //       }),
  //     });
  //     const result = await response.json();
  //     console.log(result.lenderUsername.username);
  //     console.log("Raw response:", result); // Log the raw response data
  
  //     try {
  //       if(result === "User not found"){ throw new Error("User Not Found")}
  //       const data = JSON.parse(result);
  //       setUploadedCars(data); // Set the uploaded cars data
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching uploaded cars:", error);
  //   }
  // };
  

  const fetchUploadedCars = async () => {
    console.log(username);
    try {
      const response = await fetch('https://rentv-g660.onrender.com/lender/viewUploadedCar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
        }),
      });
      const responseData = await response.text(); // Get the raw response data
      console.log(responseData); // Log the raw response data
      
      // Check if the response indicates user not found
      if (responseData === "User not found") {
        console.log("User not found");
        // Handle the case where user is not found, e.g., show a message to the user
      } else {
        try {
          const data = JSON.parse(responseData); // Try parsing the response data as JSON
          console.log(data); // Log the parsed data
          setUploadedCars(data); // Set the uploaded cars data
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    } catch (error) {
      console.error("Error fetching uploaded cars:", error);
    }
  };
  
  

  const [fontsLoaded] = useFonts({
    "Oswald-Light": require("../../../assets/fonts/Oswald-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.des}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome {username}</Text>
            <DrawerSide />
          </View>
          <View style={styles.card}>
            <Text style={styles.balance}>Balance:    {lenderBalance !== null ? `\u20A6 ${lenderBalance}` : '...'}</Text>
          </View>
        </View>
        <Text style={styles.message}>
          {/* {uploadedCars.length === 0 ? "Oops... No cars uploaded yet..." : ""} */}
        </Text>
        <View style={styles.carsContainer}>
          {uploadedCars.map((car, index) => (
            <View key={index} style={[styles.carContainer, index % 2 === 1 && styles.carContainerOdd]}>
              <Image
                source={{ uri: car.image }}
                style={styles.carImage}
              />
              <View style={styles.carDetails}>
                <Text style={styles.carModel}>Model: {car.model}</Text>
                <Text style={styles.carBrand}>Brand: {car.brand}</Text>
                <Text style={styles.plateNumber}>Plate Number: {car.plateNumber}</Text>
                <Text style={styles.pricePerDay}>Price: {car.pricePerDay}</Text>
                <View style={styles.bookContainer}>
                  <Button1 title='Delete' style={styles.book} />
                </View>
              </View>

            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
    
  },
  des: {
    flexDirection: 'column',
    marginBottom: height * 0.05,
  },
  welcomeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcomeText: {
    marginRight: width * 0.03,
    fontSize: width * 0.08,
    marginTop: height * 0.05,
    fontFamily: 'Oswald-Light',
  },  
  card: {
    backgroundColor: 'white',
    borderRadius: width * 0.05,
    padding: width * 0.1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: height * 0.05,
  },
  balance: {
    fontSize: width * 0.1,
    color: 'blue',
  },
  message: {
    paddingBottom: height * 0.02,
    fontSize: width * 0.055,
    color: 'gray',
  },
  carsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: Dimensions.get('window').width * 0.03,
  },
  carContainer: {
    width: "48%",
    backgroundColor: "#f0f0f0",
    // backgroundColor:'blue',
    marginBottom: Dimensions.get('window').width * 0.03,
    padding: Dimensions.get('window').width * 0.03,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  carContainerOdd: {
    marginLeft: width * 0.025,
  },
  carImage: {
    width: "90%",
    height: Dimensions.get('window').width * 0.3,
    resizeMode: 'contain',
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  carDetails: {
    marginTop: Dimensions.get('window').width * 0.03,
  },
  carModel: {
    fontSize: Dimensions.get('window').width * 0.04,
    fontWeight: "bold",
  },
  carBrand: {
    fontSize: Dimensions.get('window').width * 0.035,
    color: "gray",
  },
  plateNumber: {
    fontSize: Dimensions.get('window').width * 0.035,
    color: "gray",
  },
  pricePerDay: {
    fontSize: Dimensions.get('window').width * 0.035,
    color: "gray",
  },
  bookContainer: {
    // padding: Dimensions.get('window').width * 0.02,
    marginTop: Dimensions.get('window').width * 0.03,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  book: {
    backgroundColor: 'blue',
    color: 'white',
    marginTop: height * 0.02,
    textAlign: "center",  
  },
  // pricePerDay: {
  //   fontSize: width * 0.05, 
  //   color: 'gray',
  //   paddingHorizontal: width * 0.02,
  // }
});

export default DashboardScreen;


// 8CPP419