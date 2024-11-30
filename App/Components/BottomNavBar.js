// BottomNavBar.js
import React from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const BottomNavBar = ({ navigation }) => {
  return (
    <View style={styles.nav}>
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
  );
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff', // Change as needed
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Change as needed
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
  },
});

export default BottomNavBar;