import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_URL } from '@env'; // Import environment variable

export default function App() {
    useEffect(() => {
        // Use environment variable for API URL
        axios.get(`${API_URL}/health`) // Access the health endpoint
            .then(response => console.log('API Response:', response.data))
            .catch(error => console.error('API Error:', error));
    }, []);

    return (
        <View style={styles.container}>
            <Text>Welcome to FörderPro!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
