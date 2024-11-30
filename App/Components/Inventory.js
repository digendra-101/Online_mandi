import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';

// Sample product data with quantity added
const products = [
  { id: '1', name: 'Apple', category: 'Fruit', price: '$2.5', quantity: 50 },
  { id: '2', name: 'Banana', category: 'Fruit', price: '$1.2', quantity: 100 },
  { id: '3', name: 'Carrot', category: 'Vegetable', price: '$1.5', quantity: 80 },
  { id: '4', name: 'Broccoli', category: 'Vegetable', price: '$3.0', quantity: 30 },
  { id: '5', name: 'Spinach', category: 'Vegetable', price: '$2.0', quantity: 70 },
  { id: '6', name: 'Potato', category: 'Vegetable', price: '$1.0', quantity: 200 },
  { id: '7', name: 'Tomato', category: 'Vegetable', price: '$2.2', quantity: 120 },
  { id: '8', name: 'Cucumber', category: 'Vegetable', price: '$1.8', quantity: 150 },
  { id: '9', name: 'Strawberry', category: 'Fruit', price: '$3.5', quantity: 40 },
  { id: '10', name: 'Grapes', category: 'Fruit', price: '$2.7', quantity: 60 },
];

export default function Inventory({ navigation }) {
  const renderItem = ({ item }) => (
    <View style={styles.productCard}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productCategory}>{item.category}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.languageButton} onPress={() => { navigation.navigate("EnglishLoginPage") }}>
          <Text style={styles.languageButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Inventory List */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Inventory</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* Navigation Bar */}
      <View style={styles.nev}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Dashboard</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Add Product</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Inventory")}>
          <View style={styles.navItem}>
            <Text style={styles.navText}>Inventory</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <View style={styles.navItem}>
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
    backgroundColor: "#f4f4f4",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333",
    marginRight: 10,
  },
  languageButton: {
    backgroundColor: "#388E3C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  languageButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  mainContent: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    paddingRight: 200,
    paddingLeft:20,
    paddingTop: 10,
    paddingBottom:20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '100%',
  },
  productInfo: {
    justifyContent: 'center',
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  productCategory: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
  productQuantity: {
    fontSize: 16,
    color: '#FF5722',
    marginTop: 5,
  },
  nev: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
  },
});
