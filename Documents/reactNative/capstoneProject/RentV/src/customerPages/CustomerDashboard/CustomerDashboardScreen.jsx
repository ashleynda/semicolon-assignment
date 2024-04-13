// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity, Modal, TextInput, Button } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Button1 from "../../components/buttons/Button1";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import CustomerHamburger from "../../components/Hamburger/CustomerHamburger";

// const CustomerDashboardScreen = () => {
//   const navigation = useNavigation();
//   const [uploadedCars, setUploadedCars] = useState([]);
//   const [username, setUsername] = useState('');
//   const [searchModalVisible, setSearchModalVisible] = useState(false);
//   const [searchKeyword, setSearchKeyword] = useState('');
  
//   useEffect(() => {
//     AsyncStorage.getItem('username')
//       .then((value) => {
//         setUsername(value);
//       })
//     fetchUploadedCars();
//   }, []);

//   const fetchUploadedCars = () => {
//     fetch("https://rentv-g660.onrender.com/customer/allcars")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setUploadedCars(data);
//       })
//       .catch((error) => console.error("Error fetching uploaded cars: ", error));
//   };

//   const handleBooking = (plateNumber) => {
//       navigation.navigate('Book', {option: 'Book', plateNumber, routeUsername: username});
//   }

//   const handleSearchIconPress = () => {
//     setSearchModalVisible(true);
//   };

//   // Function to handle search
//   const handleSearch = () => {
//     // Perform search operation using searchKeyword
//     console.log("Searching for: ", searchKeyword);
//     // Close the modal
//     setSearchModalVisible(false);
//     // Reset search keyword
//     setSearchKeyword('');
//   };
//   return (
//     <View style={styles.container}>
//       <SafeAreaView>
//         <View style={styles.headerContainer}>
//           <Text style={styles.header}>Cars</Text>
//           <TouchableOpacity onPress={handleSearchIconPress}>
//             <Icon name="search" size={26} color="black" style={styles.search} />
//           </TouchableOpacity>
//           <CustomerHamburger />
//         </View>
//         <ScrollView>
//           {uploadedCars.map((car, index) => (
//             <View key={index} style={styles.carContainer}>
//               <Image
//                 source={{ uri: car.image }}
//                 style={styles.carImage}
//               />
//               <View style={styles.carDetails}>
//                 <Text style={styles.carModel}>Model: {car.model}</Text>
//                 <Text style={styles.carBrand}>Brand: {car.brand}</Text>
//                 <Text style={styles.plateNumber}>Plate Number: {car.plateNumber}</Text>
//                 <Text style={styles.pricePerDay}>Price: {car.pricePerDay}</Text>
//               </View>
//               <View style={styles.bookContainer}>
//                 <Button1 title='Book A Car' style={styles.book} onPress={() => handleBooking(car.plateNumber)}/>     
//               </View>
//             </View>
//           ))}
//         </ScrollView>
//       </SafeAreaView>
//       <Modal
//       animationType="slide"
//       transparent={true}
//       visible={searchModalVisible}
//       onRequestClose={() => {
//         setSearchModalVisible(false);
//       }}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Enter keyword..."
//             onChangeText={(text) => setSearchKeyword(text)}
//             value={searchKeyword}
//           />
//           <Button title="Search" onPress={handleSearch} />
//           <Button title="Close" onPress={() => setSearchModalVisible(false)} />
//         </View>
//       </View>
//     </Modal>
//     {/* End of Search Modal */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   headerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     marginRight: 10,
//     marginTop: 50,
//   },
//   search: {
//     marginLeft: 200,
//     marginTop: 60,
    

//   },
//   carContainer: {
//     marginBottom: 20,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     width: 350,
//     minHeight: 590,
//     marginTop: 40,

  


//     // backgroundColor: 'white',
//     // borderRadius: 10,
//     // padding: 20,
//     // marginBottom: 20,
//     // elevation: 3,
//     // shadowColor: '#000',
//     // shadowOffset: { width: 0, height: 2 },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.84,
//   },
//   carImage: {
//     width: '91%',
//     height: '70%', 
//     borderTopLeftRadius: 10,
//     borderTopRightRadius: 10,
//     resizeMode: 'contain', 
//   },
//   carDetails: {
//     padding: 10,
//   },
//   carModel: {
//     fontSize: 20, 
//     fontWeight: 'bold',
//     paddingHorizontal: 10,
//   },
//   carBrand: {
//     fontSize: 20, 
//     color: 'gray',
//     paddingHorizontal: 10,
//   },
//   plateNumber: {
//     fontSize: 20, 
//     color: 'gray',
//     paddingHorizontal: 10,
//   },
//   bookContainer: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     paddingRight: 10,
//   },
//   book: {
//     backgroundColor: 'blue',
//     color: 'white',
//     gap: 10,
//   },
//   pricePerDay: {
//     fontSize: 20, 
//     color: 'gray',
//     paddingHorizontal: 10,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5
//   },
//   searchInput: {
//     height: 40,
//     width: 200,
//     marginBottom: 20,
//     borderWidth: 1,
//     paddingHorizontal: 10,
//   },
// });

// export default CustomerDashboardScreen;


import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView, TouchableOpacity, Modal, TextInput, Button, Dimensions, Platform, StatusBar, ActivityIndicator } from "react-native"; // Added Platform and StatusBar
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome';
import DrawerSide2 from "../../components/drawer/DrawerSide2";

const CustomerDashboardScreen = () => {
  const navigation = useNavigation();
  const [uploadedCars, setUploadedCars] = useState([]);
  const [username, setUsername] = useState('');
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10); // Define the number of items per page

  const [searchResults, setSearchResults] = useState([]);

// Function to handle search


  
  // useEffect(() => {
  //   AsyncStorage.getItem('username')
  //     .then((value) => {
  //       setUsername(value);
  //     })
  //   fetchUploadedCars();
  // }, []);

  // const fetchUploadedCars = () => {
  //   fetch("https://rentv-g660.onrender.com/customer/allcars")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUploadedCars(data);
  //     })
  //     .catch((error) => console.error("Error fetching uploaded cars: ", error));
  // };

  useEffect(() => {
    AsyncStorage.getItem('username')
      .then((value) => {
        setUsername(value);
      })
    fetchUploadedCars(currentPage); 
  }, [currentPage]);

  const fetchUploadedCars = async (page) => {
    try {
      const response = await fetch(`https://rentv-g660.onrender.com/customer/allcars?page=${page}&pageSize=${pageSize}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Update state variables with fetched data and pagination info
        setUploadedCars(data.cars);
        setCurrentPage(data.currentPage);
        setTotalPages(data.totalPages);
        setLoading(true);
      } catch (error) {
        console.error('Error fetching uploaded cars:', error);
      } finally {
        setLoading(false);
      }
  };




  const handleBooking = (plateNumber) => {
      navigation.navigate('Book', {option: 'Book', plateNumber, routeUsername: username});
  }

  const handleSearchIconPress = () => {
    setSearchModalVisible(true);
  };

  // const toggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };
  

  // Function to handle search
  // const handleSearch = () => {
  //   // Perform search operation using searchKeyword
  //   console.log("Searching for: ", searchKeyword);
  //   // Close the modal
  //   setSearchModalVisible(false);
  //   // Reset search keyword
  //   setSearchKeyword('');
  // };

// Function to handle search
const handleSearch = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "brand": searchKeyword // Use the entered brand name as the search parameter
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const response = await fetch("https://rentv-g660.onrender.com/customer/searchForCar", requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    // Update search results state with the fetched data
    setSearchResults(result);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{username}</Text>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.hamburger} onPress={handleSearchIconPress}>
            <Icon name="search" size={Dimensions.get('window').width * 0.06} color="black" />
          </TouchableOpacity>
          <DrawerSide2 navigation={navigation} style={styles.draw} />
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <ScrollView>
          <View style={styles.carsContainer}>
            {uploadedCars.map((car, index) => (
              <TouchableOpacity key={index} style={styles.carContainer} onPress={() => handleBooking(car.plateNumber)}>
                <Image
                  source={{ uri: car.image }}
                  style={styles.carImage}
                />
                <View style={styles.carDetails}>
                  <Text style={styles.carModel}>Model: {car.model}</Text>
                  <Text style={styles.carBrand}>Brand: {car.brand}</Text>
                  <Text style={styles.plateNumber}>Plate Number: {car.plateNumber}</Text>
                  <Text style={styles.pricePerDay}>Price: {car.pricePerDay}</Text>
                  <TouchableOpacity style={styles.bookButton} onPress={() => handleBooking(car.plateNumber)}>
                    <Text style={styles.bookButtonText}>Book A Car</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
      <View style={styles.pagination}>
        <Button title="Previous" onPress={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} />
        <Text>{`Page ${currentPage} of ${totalPages}`}</Text>
        <Button title="Next" onPress={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} />
      </View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={searchModalVisible}
      onRequestClose={() => {
        setSearchModalVisible(false);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.searchInput}
            placeholder="Enter keyword..."
            onChangeText={(text) => setSearchKeyword(text)}
            value={searchKeyword}
          />
          <Button title="Search" onPress={handleSearch} />
          <Button title="Close" onPress={() => setSearchModalVisible(false)} />
        </View>
      </View>
    </Modal>
    {/* End of Search Modal */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    paddingHorizontal: Dimensions.get('window').width * 0.05,
    paddingTop: Dimensions.get('window').height * 0.03,
    width: '100%',
  },
  header: {
    fontSize: Dimensions.get('window').width * 0.08,
    fontWeight: "bold",
    color: 'blue',
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Add this line to evenly space the icons
    width: '30%',
  },
  hamburger: {
    paddingRight: Dimensions.get('window').width * 0.03,
  },
  search: {
    marginRight: Dimensions.get('window').width * 0.03,
  },
  carsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: Dimensions.get('window').width * 0.03,
    marginTop: 50,
  },
  carContainer: {
    width: "48%",
    backgroundColor: "#f0f0f0",
    marginBottom: Dimensions.get('window').width * 0.03,
    padding: Dimensions.get('window').width * 0.03,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  carImage: {
    width: "100%",
    height: Dimensions.get('window').width * 0.3,
    resizeMode: "cover",
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
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Dimensions.get('window').height * 0.03,
    gap: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Dimensions.get('window').height * 0.03,
  },
  modalView: {
    margin: Dimensions.get('window').width * 0.05,
    backgroundColor: "white",
    borderRadius: Dimensions.get('window').width * 0.03,
    padding: Dimensions.get('window').width * 0.07,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  searchInput: {
    height: Dimensions.get('window').height * 0.05,
    width: Dimensions.get('window').width * 0.8,
    marginBottom: Dimensions.get('window').height * 0.03,
    borderWidth: 1,
    paddingHorizontal: Dimensions.get('window').width * 0.02,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  bookButton: {
    backgroundColor: "#007bff",
    padding: Dimensions.get('window').width * 0.02,
    marginTop: Dimensions.get('window').width * 0.03,
    borderRadius: Dimensions.get('window').width * 0.03,
  },
  bookButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  loadingIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});

export default CustomerDashboardScreen;



