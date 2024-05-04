// StatePicker.js
import React, { useState } from 'react';
// import { Picker } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const StatePicker = ({ selectedState, onStateChange, states }) => {
  return (
    <Picker
      selectedValue={selectedState}
      onValueChange={onStateChange}
    >
      <Picker.Item label="Select State" value="" />
      {states.map((state, index) => (
        <Picker.Item key={index} label={state} value={state} />
      ))}
    </Picker>
  );
}

export default StatePicker;
