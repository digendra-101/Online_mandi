import React from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import BottomNavBar from './../Components/BottomNavBar'; // Adjust the path as necessary

const Inventory = ({ navigation, inventory }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Text style={styles.productName}>{item[1].name}</Text>
      <Text style={styles.productDetails}>
        Quantity: {item[1].quantity}
      </Text>
      <Text style={styles.productDescription}>
        {item[1].description || 'No description'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inventory Management</Text>
      
      <FlatList
        data={Object.entries(inventory.items)}
        renderItem={renderProductItem}
        keyExtractor={item => item[0]}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No products in inventory</Text>
        }
      />
      
      <TouchableOpacity 
        style={styles .addButton} 
        onPress={() => navigation.navigate('AddProduct')}
      >
        <Text style={styles.addButtonText}>Add New Product</Text>
      </TouchableOpacity>
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  productCard: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetails: {
    fontSize: 16,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Inventory;