import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import TextToAudio from './TextToSpeach';

export default function Dashboard({ navigation }) {
  const [text, setText] = React.useState('');

  const handleSpeak = () => {
    if (!text.trim()) {
      alert('Please enter text to speak!');
      return;
    }
    TextToAudio.speak(text);
  };

  return (
    <View style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => {
            navigation.navigate('EnglishLoginPage');
          }}
        >
          <Text style={{ color: 'white' }}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Welcome to the Dashboard</Text>
        <TextInput
          placeholder="Enter text to convert to audio"
          value={text}
          onChangeText={setText}
          style={styles.input}
        />
        <Button title="Speak" onPress={handleSpeak} />
        <Button title="Stop" onPress={TextToAudio.stop} />
      </View>

      {/* Navigation Bar */}
      <View style={styles.nev}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <View style={styles.navItem}>
            <Image source={require('../Assets/Image/home-icon.png')} style={styles.icon} />
            <Text style={styles.navText}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <View style={styles.navItem}>
            <Image source={require('../Assets/Image/add-icon.png')} style={styles.icon} />
            <Text style={styles.navText}>Add Product</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Inventory')}>
          <View style={styles.navItem}>
            <Image source={require('../Assets/Image/inventory-icon.png')} style={styles.icon} />
            <Text style={styles.navText}>Inventory</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.navItem}>
            <Image source={require('../Assets/Image/profile-icon.png')} style={styles.icon} />
            <Text style={styles.navText}>Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  searchContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
  },
  searchInput: {
    paddingVertical: 10,
    paddingLeft: 20,
    margin: 10,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    width: 250,
  },
  languageButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    margin: 10,
  },
  nev: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
  },
  navText: {
    color: 'black',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60, // Avoid overlap with navigation bar
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});
