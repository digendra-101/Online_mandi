import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import BottomNavBar from './../Components/BottomNavBar'; // Adjust the path as necessary

const AddProduct = ({ addProduct, navigation }) => {
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    description: '',
  });

  const handleAddProduct = () => {
    console.log('Adding product:', productData); // Debugging line
    const price = parseFloat(productData.price); // Convert price to a number
    if (!productData.name || isNaN(price) || price <= 0) {
      Alert.alert('Error', 'Please fill in all required fields with valid data');
      return;
    }
    
    // Pass the product data to addProduct function
    addProduct(productData.name, price, productData.description);
    
    Alert.alert('Success', 'Product added successfully');
    navigation.goBack(); // Navigate back after adding the product
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={productData.name}
        onChangeText={name => setProductData({ ...productData, name })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={productData.price}
        onChangeText={price => setProductData({ ...productData, price })}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={productData.description}
        onChangeText={description => setProductData({ ...productData, description })}
      />
      
      <TouchableOpacity 
        style={styles.addButton} 
 onPress={handleAddProduct}
      >
        <Text style={styles.addButtonText}>Add Product</Text>
      </TouchableOpacity>

      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddProduct;