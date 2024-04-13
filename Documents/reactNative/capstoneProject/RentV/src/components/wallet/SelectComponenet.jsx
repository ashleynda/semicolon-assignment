import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, ScrollView,Image } from 'react-native';

const SelectComponent = ({ options, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setModalVisible(false);
  };

  return (
    <View  style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10}}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center'}}>
        <Text>{selectedOption.label}</Text>
        {/* <Image source={require('../../../../assets/chevron.png')} style={{width: 20, height: 20}}/> */}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <ScrollView>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{ backgroundColor: '#fff', padding: 20, borderRadius: 10 }}>
            {options.map((option, index) => (
                <TouchableOpacity key={index} onPress={() => handleSelectOption(option)}>
                <Text style={{padding : 10, borderWidth: 1, margin: 10, fontSize: 20}}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
            </ScrollView>
      </Modal>
    </View>
  );
};

export default SelectComponent;