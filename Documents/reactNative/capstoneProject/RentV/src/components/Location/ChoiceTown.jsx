// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';


// const ChoiceTown = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [towns, setTown] = useState([]);

//   const fetchStates = async () => {
//     try {
//       const response = await fetch('https://nigeria-states-towns-lga.onrender.com/api/all', {
//         method: 'GET',
//         headers: {            
//           'Content-Type': 'application/json'
//         }
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch towns');
//       }
//       const data = await response.json();
//       const townsList = data.reduce((accumulator, data) => {
//         data.towns.forEach(town => {
//           accumulator.push(town.name);
//         });
//         return accumulator;
//       }, []);
//       setTown(townsList);
//     } catch (error) {
//       console.error('Error fetching towns:', error);
//     }
//   };
  


//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsModalVisible(false);
//   };
 

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.dropdownButton}>
//         <Text>{selectedOption || 'Select an option'}</Text>
//       </TouchableOpacity>
//       <Modal visible={isModalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <FlatList
//             data={towns.name}
//             renderItem={({ item }) => (
//               <TouchableOpacity onPress={() => handleOptionSelect(item)}>
//                 <Text style={styles.optionText}>{item}</Text>
//               </TouchableOpacity>
//             )}
//             keyExtractor={(item, index) => index.toString()}
//           />
//           <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
//             <Text>Close</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 40,
//     marginTop: 20,
//   },
//   dropdownButton: {
//     // borderWidth: 1,
//     // padding: 10,
//     // borderColor: 'gray',
//     // borderRadius: 5,

//     borderWidth: 1,
//     padding: 15,
//     paddingVertical: 20, 
//     borderColor: 'gray',
//     borderRadius: 5,
//     minWidth: 200,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   optionText: {
//     // paddingVertical: 10,
//     // color: 'black',

//  paddingVertical: 10,
//     paddingHorizontal: 15, // Add horizontal padding for better text visibility
//     color: 'black',
//     fontSize: 20,
//   },
//   closeButton: {
//     marginTop: 20,
//   },
  
// });

// export default ChoiceTown;


import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const ChoiceTown = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [towns, setTowns] = useState([]);

  useEffect(() => {
    const fetchTowns = async () => {
      try {
        const response = await fetch('https://nigeria-states-towns-lga.onrender.com/api/all', {
          method: 'GET',
          headers: {            
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch towns');
        }
        const data = await response.json();
        const townsList = data.reduce((accumulator, data) => {
          data.towns.forEach(town => {
            accumulator.push(town.name);
          });
          return accumulator;
        }, []);
        setTowns(townsList);
      } catch (error) {
        console.error('Error fetching towns:', error);
      }
    };
    fetchTowns();
  }, []);
 
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.dropdownButton}>
        <Text>{selectedOption || 'Select an option'}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <FlatList
            data={towns}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionSelect(item)}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <TouchableOpacity onPress={() => setIsModalVisible(false)} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 20,
  },
  dropdownButton: {
    borderWidth: 1,
    padding: 15,
    paddingVertical: 20,
    borderColor: 'gray',
    borderRadius: 5,
    minWidth: 200,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionText: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: 'black',
    fontSize: 20,
  },
  closeButton: {
    marginTop: 20,
  },
});

export default ChoiceTown;
