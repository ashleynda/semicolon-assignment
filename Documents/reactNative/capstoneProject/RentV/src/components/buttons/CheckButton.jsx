import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import { RadioButton } from 'react-native-paper'
import { RadioButton } from 'react-native-paper'

const CheckButton = () => {
  const [selectedInterval, setSelectedInterval] = useState('hour')

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Time Interval:</Text>
      <View style={styles.radioButtonContainer}>
        <View style={styles.radioButtonRow}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedInterval(newValue)}
            value={selectedInterval}
          >
            <View style={styles.radioButtonItem}>
              <RadioButton.Android value="hour" />
              <Text>Every Hour</Text>
            </View>
            <View style={styles.radioButtonItem}>
              <RadioButton.Android value="day" />
              <Text>Every Day</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.radioButtonRow}>
          <RadioButton.Group
            onValueChange={(newValue) => setSelectedInterval(newValue)}
            value={selectedInterval}
          >
            <View style={styles.radioButtonItem}>
              <RadioButton.Android value="week" />
              <Text>Every Week</Text>
            </View>
            <View style={styles.radioButtonItem}>
              <RadioButton.Android value="month" />
              <Text>Every Month</Text>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  label: {
    fontSize: 20,
    marginBottom: 10
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  radioButtonRow: {
    flexDirection: 'row'
  },
  radioButtonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  }
})

export default CheckButton

// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { RadioButton } from 'react-native-paper';

// const TimeIntervalSelector = () => {
//   const [selectedInterval, setSelectedInterval] = useState('hour');

//   return (
//     <View style={StyleSheet.container}>
//       <Text style={{ fontSize: 20, marginBottom: 10 }}>Select Time Interval:</Text>
//       <RadioButton.Group onValueChange={newValue => setSelectedInterval(newValue)} value={selectedInterval}>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <RadioButton.Android value="hour" />
//           <Text>Every Hour</Text>
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <RadioButton.Android value="day" />
//           <Text>Every Day</Text>
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <RadioButton.Android value="week" />
//           <Text>Every Week</Text>
//         </View>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <RadioButton.Android value="month" />
//           <Text>Every Month</Text>
//         </View>
//       </RadioButton.Group>
//     </View>
//   );
// };

// const styles=StyleSheet.create({
// 	container: {
// 		flex: 1,

// 	}

// });
