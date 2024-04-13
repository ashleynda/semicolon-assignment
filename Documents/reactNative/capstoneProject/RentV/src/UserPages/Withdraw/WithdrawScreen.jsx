
// import React, { useState } from 'react'
// import { View, Text, StyleSheet, TextInput, ScrollView, Alert } from 'react-native'
// import FilledButton from '../../components/buttons/FilledButton'
// // import SelectDropdown from 'react-native-select-dropdown'

// import React, { useState } from 'react'
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   ScrollView,
//   Alert
// } from 'react-native'
// import FilledButton from '../../components/buttons/FilledButton'



// const bankCodes = ['234', '444', '555', '666', '678', '419']

// const WithdrawScreen = () => {
//   const [lenderUsername, setLenderUsername] = useState('')
//   const [amount, setAmount] = useState('')
//   const [accountNumber, setAccountNumber] = useState('')
//   const [selectedBankCode, setSelectedBankCode] = useState('')

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder="LenderUsername"
//           value={lenderUsername}
//           onChangeText={(text) => setLenderUsername(text)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Amount"
//           value={amount}
//           onChangeText={(text) => setAmount(text)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Account Number"
//           value={accountNumber}
//           onChangeText={(text) => setAccountNumber(text)}
//         />

//         <View style={styles.inputContainer}>
//           <SelectDropdown
//             data={bankCodes}
//             placeholder="Bankcodes"
//             defaultValueByIndex={0}
//             onSelect={(selectedItem, index) =>
//               setSelectedBankCode(selectedItem)
//             }
//             buttonTextAfterSelection={(selectedItem, index) => {
//               return selectedItem
//             }}
//             rowTextForSelection={(item, index) => {
//               return item
//             }}
//             buttonStyle={styles.input}
//             buttonTextStyle={styles.bankCodeText}
//             renderCustomizedButtonChild={(selectedItem, index) => {
//               return (
//                 <Text style={styles.bankCodeText}>
//                   {selectedItem || 'Select Bank Code'}
//                 </Text>
//               )
//             }}
//           />
//         </View>
//       </View>

//       <View style={styles.buttonContainer}>
//         <FilledButton text={'Withdraw'} />
//       </View>
//     </ScrollView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     justifyContent: 'flex-start',
//     flexGrow: 1
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: 'black',
//     borderRadius: 4,
//     padding: 10,
//     marginBottom: 10,
//     width: '100%'
//   },
//   inputContainer: {
//     width: '100%'
//   },
//   bankCodeText: {
//     textAlign: 'center'
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginBottom: 20
//   }
// })

// export default WithdrawScreen

// export default WithdrawScreen

// change the check logo on uploadsuccess screen

import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import FilledButton from '../../components/buttons/FilledButton';

import SelectComponent from '../../components/wallet/SelectComponenet';

import { useNavigation } from '@react-navigation/native';
import ErrorPage from '../../components/wallet/ErrorPage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WithdrawalSuccessScreen from './WithdrawalSuccessScreen';




const WithdrawScreen = ({route}) => {

  const navigation = useNavigation();
  const [lenderUsername, setLenderUsername] = useState('');
  const [withdrawalStatus, setWithdrawalStatus] = useState(null);



    const banksData = [
  {
    "label": "Access Bank",
    "value": "044"
  },
  {
    "label": "Access Bank (Diamond)",
    "value": "063"
  },
  {
    "label": "ALAT by WEMA",
    "value": "035A"
  },
  {
    "label": "Carbon",
    "value": "565"
  },
  {
    "label": "Citibank Nigeria",
    "value": "023"
  },
  {
    "label": "Ecobank Nigeria",
    "value": "050"
  },
  {
    "label": "Fidelity Bank",
    "value": "070"
  },
  {
    "label": "First Bank of Nigeria",
    "value": "011"
  },
  {
    "label": "First City Monument Bank",
    "value": "214"
  },
  {
    "label": "Globus Bank",
    "value": "00103"
  },
  {
    "label": "Guaranty Trust Bank",
    "value": "058"
  },
  {
    "label": "Heritage Bank",
    "value": "030"
  },
  {
    "label": "Keystone Bank",
    "value": "082"
  },
  {
    "label": "Kuda Bank",
    "value": "50211"
  },
  {
    "label": "Lotus Bank",
    "value": "303"
  },
  {
    "label": "OPay Digital Services Limited (OPay)",
    "value": "999992"
  },
  {
    "label": "Paga",
    "value": "100002"
  },
  {
    "label": "PalmPay",
    "value": "999991"
  },
  {
    "label": "Parallex Bank",
    "value": "104"
  },
  {
    "label": "Polaris Bank",
    "value": "076"
  },
  {
    "label": "Providus Bank",
    "value": "101"
  },
  {
    "label": "Stanbic IBTC Bank",
    "value": "221"
  },
  {
    "label": "Standard Chartered Bank",
    "value": "068"
  },
  {
    "label": "Sterling Bank",
    "value": "232"
  },
  {
    "label": "Suntrust Bank",
    "value": "100"
  },
  {
    "label": "Union Bank of Nigeria",
    "value": "032"
  },
  {
    "label": "United Bank For Africa",
    "value": "033"
  },
  {
    "label": "Unity Bank",
    "value": "215"
  },
  {
    "label": "VFD Microfinance Bank Limited",
    "value": "566"
  },
  {
    "label": "Wema Bank",
    "value": "035"
  },
  {
    "label": "Zenith Bank",
    "value": "057"
  }
]


    const [selectedBank, setSelectedBank] = useState(banksData[0].value);
    const [accountName, setAccountName] = useState('........................')
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(
        {
        name: '',
        amount: '',
        accountNumber: "",
        walletPin: ""}
    )
    const [formData, setFormData] = useState({
    name: accountName,
    bank_code: "",
    amount: 0,
    accountNumber: "",
    walletPin: ""
    })

    function fetchAccountName (){
            console.log('in fetch ------------------>',formData.bank_code);
            setIsLoading(true);
            const url = `https://api.paystack.co/bank/resolve?account_number=${formData.accountNumber}&bank_code=${formData.bank_code}`;
            console.log('url --------->', url);
            fetch(url, {
              method: 'GET',
              headers: {
                  'Authorization': 'Bearer sk_test_9a115c67b66285fc18c219e0e1aa83d290cfd2ad'
                  // sk_test_c96a468f2b8e1269efc3aeafc2f206c079a5f11a
              }
          }).then(response => response.json()).then(data => {
             console.log('Data ---->', data);
              const newName = data.data.account_name;  'Invalid Account Details';
              setAccountName(newName);
              setIsLoading(false);
              setFormData(prevData => ({ ...prevData, name: newName }));
            }
              ).catch(err => {
                  console.log('Error ------>', err);
                  setAccountName('Invalid Account Details');
                  setIsLoading(false);
              });
            

      }

  useEffect(() => {
        if (formData.accountNumber.length === 10) {
            fetchAccountName();
        }
      }, [formData.accountNumber]);

  const handleData = (name, value) => {
  setFormData(prevData => ({ ...prevData, [name]: value }));
  handleVerification(name, value);
};


  const handleVerification = (name, value) => {
      let inputErrorMessage = '';

      switch (name) {
          case 'amount':
              value = parseInt(value)
              inputErrorMessage = isNaN(value) ; value <= 0 ? 'Please enter a valid amount.' : '';
              break;
          case 'accountNumber':
              inputErrorMessage = value.length !== 10 ? 'Account number must be 10 digits long.' : '';
              break;
          case 'walletPin':
              inputErrorMessage = value.length !== 4 ? 'PIN must be a four-digit number.' : '';
              break;
          default:
              break;
      }
      setErrorMessage(prevErrors => ({ ...prevErrors, [name]: inputErrorMessage }));

  }




  const handleSubmit = () => {
      const { amount, accountNumber, walletPin } = formData;
      const isAmountValid = !isNaN(amount) && amount > 0;
      const isAccountNumberValid = accountNumber.length === 10;
      const isWalletPinValid = walletPin.length === 4 ;
      console.log('submit');

      if(accountName === 'Invalid Account Details'){
        setError(true);
      }
      // && isWalletPinValid
      else if (isAmountValid && isAccountNumberValid ) {
        console.log('submit success');
          // navigation.navigate('ConfirmationScreen', {role , token, withdrawalData: formData})
          WithdrawalSuccessScreen();
      } else {
        console.log('submit error');
          setError(true)
      }
  };

  console.log(formData);

const handleBankSelect = (bank) => {
  setSelectedBank(bank);
  setFormData(prevData => ({...prevData, ['bank_code']: bank}));
};

console.log(selectedBank);

useEffect(() => {
  const fetchLenderUsername = async () => {
    try {
      const username = await AsyncStorage.getItem('lenderUsername');
      // Set the lender's username in state
      setLenderUsername(username);
    } catch (error) {
      console.error('Error retrieving lender username:', error);
    }
  };

  fetchLenderUsername();
}, []);

  // Define the withdrawal API function
  const withdraw = async () => {
    const raw = JSON.stringify({
      "lenderUsername": lenderUsername,
      "amount": formData.amount,
      "accountNumber": formData.accountNumber,
      "bankCode": formData.bank_code
    });

    const requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow"
    };

    try {
      const response = await fetch("https://rentv-g660.onrender.com/lender/withdraw", requestOptions);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.text();
      console.log(result); // Log the result if needed
      // Navigate to confirmation screen or handle success
      navigation.navigate('ConfirmationScreen');
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  const handleWithdrawalSuccess = () => {
    // Navigate back to the dashboard
    navigation.navigate('Dashboard');
  };
  return (
    // <SharedLayout>
<View>
  {error ? (
    <ErrorPage message={"Incorrect Details"} />
  ) : (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Make a withdrawal</Text>
      </View>
      {withdrawalStatus && (
        <WithdrawalSuccessScreen status={withdrawalStatus} onPressOk={handleWithdrawalSuccess} />
      )}
      {!withdrawalStatus && (
        <View style={styles.inputContainer}>
          <Text style={styles.usernameText}>Lender Username: {lenderUsername}</Text>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            keyboardType="numeric"
            onChangeText={(value) => handleData('amount', value)}
          />
          <Text style={styles.errorText}>{errorMessage.amount}</Text>

          <View>
            <SelectComponent options={banksData} onSelect={handleBankSelect} />
            <Text></Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter bank account number"
            keyboardType="numeric"
            onChangeText={(value) => handleData('accountNumber', value)}
          />
          <Text style={styles.errorText}>{errorMessage.accountNumber}</Text>
          {/* <TextInput 
                    style={styles.input} 
                    placeholder="Enter your PIN" 
                    keyboardType="numeric"
                    onChangeText={value => handleData('walletPin', value)}
                />
                <Text style={styles.errorText}>{errorMessage.walletPin}</Text> */}
        </View>
      )}
      <View>
        <Text>Account Name:</Text>
        {isLoading ? (
          <ActivityIndicator size="medium" color="#0000ff" />
        ) : (
          <Text style={{ fontSize: 20 }}>{accountName}</Text>
        )}
      </View>
      <Text style={{ marginTop: 20 }}>NOTE: Please confirm the account name </Text>
      <View style={styles.deposit}>
        <FilledButton text={'Withdraw'} onPress={handleSubmit} />
      </View>
    </View>
  )}
</View>
  )
}


const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    header:{
        marginBottom: 20,
    },
    headerText:{
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 30,
        marginTop: 40,

    },
    inputContainer:{},
    input:{
        width: 300,
        height: 50,
        marginVertical: 10,
        borderCurve: 'circular',
        borderRadius: 25,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginTop: 10,
        justifyContent: 'center'
        },
    footer:{
        marginVertical: 15,
    },
    footerText:{
        color: '#77E7F6',
    },
    lastInput:{
        marginBottom: 40,
    },
    deposit: {
        marginTop: 50
    },
    errorText: {
        color: 'red',
        fontSize: 10,
        marginLeft: 10,
    },
})
export default WithdrawScreen;

