import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransactionHistoryScreen = () => {
    const [transactions, setTransactions] = useState([]);
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('username')
            .then((value) => {
                setUsername(value);
            });
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const lenderUsername = await AsyncStorage.getItem('username');
            const response = await fetch(`https://rentv-g660.onrender.com/lender/${encodeURIComponent(lenderUsername)}`);
            if (!response.ok) {
                throw new Error('Failed to fetch lender balance');
            }
            const data = await response.json();
            console.log(data);
            if (data.transactionHistory === null) {
                console.log('No transaction history available');
                setTransactions([]); // Set transactions to an empty array
            } else if (Array.isArray(data.transactionHistory)) {
                setTransactions(data.transactionHistory);
            } else {
                throw new Error('Invalid data structure');
            }
        } catch (error) {
            console.error('Error fetching transaction history:', error);
            setError(error.message);
        }
    };
    

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {error ? (
                    <Text style={styles.errorText}>{error}</Text>
                ) : (
                    transactions.length === 0 ? (
                        <Text style={styles.noTransactionsText}>No transaction history available</Text>
                    ) : (
                        transactions.map((transaction, index) => (
                            <View key={index} style={styles.transaction}>
                                <Text style={styles.id}>Id: {transaction.id}</Text>
                                <Text style={styles.amount}>Amount: {transaction.amount}</Text>
                            </View>
                        ))
                    )
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
    

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    transaction: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    id: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    amount: {
        fontSize: 14,
        color: '#888',
    },
    errorText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    noTransactionsText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
});
    

export default TransactionHistoryScreen;
