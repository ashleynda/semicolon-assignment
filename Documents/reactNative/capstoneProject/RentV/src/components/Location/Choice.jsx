import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';


const Nigeria  = () => {
      try {
        const response = fetch('https://nigeria-states-towns-lga.onrender.com/api/all', {
          method: 'GET',
          headers: {            
            'Content-Type': 'application/json'
          }
        }).then( response => {
            if (!response.ok) {
                throw new Error('Failed to fetch states');
            }
            return response.json();
        })

        return response;
      } catch (error) {
        console.error('Error fetching states:', error);
      }
} 

const Choice = () => {

    const statesData = Nigeria();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [states, setStates] = useState([]);
    const [isModalVisibleTown, setIsModalVisibleTown] = useState(false);
    const [selectedOptionTown, setSelectedOptionTown] = useState('');

  
 const TownsList = ({states, newState}) => {
    console.log(states);
    console.log(`The selected state ${selectedOption}`);
    const foundState = states.forEach((state) => {
        console.log(state.name);
        if(state.name === newState){
            console.log(state.towns.name);
        }
    })
    console.log(foundState);

    return (
        <View>
            {statesData.map((town, index) => (
                <Text key={index}>{town}</Text>
            ))}
        </View>
    )

 }

//   useEffect(() => {
//     const fetchTowns = async () => {
//       try {
//         const response = await fetch('https://nigeria-states-towns-lga.onrender.com/api/all', {
//           method: 'GET',
//           headers: {            
//             'Content-Type': 'application/json'
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch towns');
//         }
//         const data = await response.json();


//         const townsList = data.reduce((accumulator, data) => {
//           data.towns.forEach(town => {
//             if(data.name === states){
//                 accumulator.push(town.name);
//             }
            
//           });
//           return accumulator;
//         }, []);
//         setTowns(townsList);
//       } catch (error) {
//         console.error('Error fetching towns:', error);
//       }
//     };
//     fetchTowns();
//   }, []);


  const handleOptionSelect = (option) => {
    console.log(option)
    setSelectedOption(option);
    setIsModalVisible(false);
    
  };

  const handleOptionSelectTown = (option) => {
    setSelectedOptionTown(option);
    setIsModalVisibleTown(false);
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.dropdownButton}>
            <Text>{selectedOption || 'Select an option'}</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
                <FlatList
                    data={states}
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

        <TouchableOpacity onPress={() => setIsModalVisibleTown(true)} style={styles.dropdownButton}>
            <Text>{selectedOptionTown || 'Select an option'}</Text>
        </TouchableOpacity>
        <Modal visible={isModalVisibleTown} animationType="slide" transparent>
            <View style={styles.modalContainer}>
            <TownsList states={statesData} newState={selectedOption}/>
            {/* <FlatList
                data={towns}
                renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionSelectTown(item)}>
                    <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            /> */}
            <TouchableOpacity onPress={() => setIsModalVisibleTown(false)} style={styles.closeButton}>
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
    // borderWidth: 1,
    // padding: 10,
    // borderColor: 'gray',
    // borderRadius: 5,

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
    // paddingVertical: 10,
    // color: 'black',

    paddingVertical: 10,
    paddingHorizontal: 15, // Add horizontal padding for better text visibility
    color: 'black',
    fontSize: 20,
  },
  closeButton: {
    marginTop: 20,
  },
});



export default Choice;
