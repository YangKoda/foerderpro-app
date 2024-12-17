import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <View>
      <Text>Welcome to FörderPro!</Text>
    </View>
  );
}
