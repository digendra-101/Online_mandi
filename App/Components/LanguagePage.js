import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LanguagePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Language</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')} // Navigate to English Login Page
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')} // Redirect to English Login Page
      >
        <Text style={styles.buttonText}>हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default LanguagePage;