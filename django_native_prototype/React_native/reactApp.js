import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const [responseText, setResponseText] = useState('');

  const sendHello = async () => {
    try {
      const response = await axios.post('http://192.168.29.243:8000/api/hello/', {
        message: 'Hello',
      });
      setResponseText(response.data.response); // Set response from the server
    } catch (error) {
      console.error(error);
      setResponseText('Error connecting to the server');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Send Hello" onPress={sendHello} />
      <Text style={styles.responseText}>{responseText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  responseText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
