import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';

export default function AddProduct({ navigation }) {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  const handleAddProduct = () => {
    // Basic validation
    if (!productName || !productCategory || !productPrice || !productQuantity) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Here you would typically send the product data to your backend or state management
    Alert.alert('Success', `Product ${productName} added successfully!`);

    // Clear the input fields
    setProductName('');
    setProductCategory('');
    setProductPrice('');
    setProductQuantity('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Search'
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.languageButton} onPress={() => { navigation.navigate("EnglishLoginPage") }}>
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.title}>Add Product</Text>

        <TextInput
          placeholder='Product Name'
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
        />
        <TextInput
          placeholder='Category'
          style={styles.input}
          value={productCategory}
          onChangeText={setProductCategory}
        />
        <TextInput
          placeholder='Price'
          style={styles.input}
          value={productPrice}
          onChangeText={setProductPrice}
          keyboardType='numeric'
        />
        <TextInput
          placeholder='Quantity'
          style={styles.input}
          value={productQuantity}
          onChangeText={setProductQuantity}
          keyboardType='numeric'
        />

        <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
          <Text style={styles.addButtonText}>Add Product</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nev}>
        <TouchableOpacity onPress={() => { navigation.navigate("Dashboard") }}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/home-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Dashboard</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("AddProduct") }}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/add-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Add Product</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate('Inventory') }}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/inventory-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Inventory</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/profile-icon.png")} style={styles.icon} />
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
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#4CAF50",
  },
  searchInput: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    borderRadius: 25,
    backgroundColor: "lightgray",
    width: 250,
  },
  languageButton: {
    backgroundColor: "gray",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  navText: {
    color: "black",
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});