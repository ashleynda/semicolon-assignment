import React,{useRef, useState, useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native'
import FilledButton from '../../components/buttons/FilledButton';
import  { Paystack, paystackProps }  from 'react-native-paystack-webview';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from "react-native-async-storage/async-storage";



const DepositScreen = ({route}) => {
    const navigation = useNavigation();
    const { email, billingDetail, price, bookingId, routeUsername } = route.params
    const paystackWebViewRef = useRef(paystackProps.PayStackRef)
    const [referenceValue, setReference] = useState('');
    const [amountPaidValue, setAmountPaid] = useState('');
    // const [username, setUsername] = useState('');

    // useEffect(() => {
    //     AsyncStorage.getItem('username')
    //       .then((value) => {
    //         setUsername(value);
    //       })
    //     }, []);



    const verifyDeposit = async () => {
        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
    
            const raw = JSON.stringify({
                "reference": referenceValue,
                "amountPaid": amountPaidValue,
                "bookingId": bookingId,
                "username": routeUsername,
            });
    
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };
    
            const response = await fetch("https://rentv-g660.onrender.com/customer/verify/booking", requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error("Error verifying deposit:", error);
        }
    };
    

    
    // const verifyDeposit = () => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //     "reference": reference,
    //     "amountPaid": amountPaid,
    //     "bookingId": bookingId
    //     });

    //     const requestOptions = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow"
    //     };

    //     fetch("https://rentv-g660.onrender.com/customer/verify/booking", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.error(error));
    // };

  return (
    <SafeAreaView>
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Make a deposit</Text>
                </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.priceText}>Price: {price}</Text>                   
                    </View>
                <View style={styles.inputContainer}>             
                    {/* <Text style={styles.priceText}>Price: {price}</Text>  */}
                </View>
                <Paystack
                    paystackKey="pk_test_4a0d0e676bcec5f1632cbfd90b7d60b8fc69e9ce"
                    amount={price}
                    billingEmail={billingDetail.billingEmail}
                  // billingMobile={billingDetail.billingMobile}
                    activityIndicatorColor="green"
                    onCancel={(e) => {
                    }}
                    onSuccess={(res) => {
                        console.log("request success", res);
                    setReference(res.transactionRef.reference);
                    navigation.navigate('DepositSuccess', {option: 'DepositSuccess'})

                    }}
                    ref={paystackWebViewRef}
                />
            
                <View style={styles.deposit}>
                    <FilledButton text={'Deposit'} color={'red'} onPress={()=> paystackWebViewRef.current.startTransaction()}/>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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
    },
    priceText: {
        fontSize: 18,
        marginBottom: 20,
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
    }
})
export default DepositScreen;