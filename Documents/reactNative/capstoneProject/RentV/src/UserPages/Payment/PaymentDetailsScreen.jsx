
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PaymentDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* <View> */}
        <Text>Enter card details:</Text>
        <Icon name='credit-card' size={80} color='gray' style={styles.card}/>

      {/* </View> */}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Card Holder Name"
        />
      </View>
      <View style={styles.row}>
         <View style={[styles.halfInput, styles.marginRight]}>
            <TextInput
                style={styles.input}
                placeholder="Expiry Date (MM/YYYY)"
            />
         </View>
        <View style={styles.halfInput}>
          <TextInput
            style={styles.input}
            placeholder="Security Code (CVC)"
          />
        </View>

     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  halfInput: {
    flex: 1,
    height: 30,
    
    
  },
  marginRight: {
    marginRight: 16,
  },
  card: {
    // flex: 1,
    // justifyContent: 'center'
    paddingHorizontal: 60,
  }
});

export default PaymentDetailsScreen;



