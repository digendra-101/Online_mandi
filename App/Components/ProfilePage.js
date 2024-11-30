import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function ProfilePage({ navigation }) {
  const profileData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Springfield, USA",
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => {
            navigation.navigate("EnglishLoginPage");
          }}
        >
          <Text style={styles.languageButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Information */}
      <View style={styles.profileContainer}>
        <Text style={styles.profileName}>{profileData.name}</Text>
        <Text style={styles.profileEmail}>{profileData.email}</Text>
        <Text style={styles.profilePhone}>📞 {profileData.phone}</Text>
        <Text style={styles.profileAddress}>📍 {profileData.address}</Text>
      </View>

      {/* Navigation Bar */}
      <View style={styles.nev}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/home-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Dashboard</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/add-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Add Product</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Inventory")}>
          <View style={styles.navItem}>
            <Image source={require("../Assets/Image/inventory-icon.png")} style={styles.icon} />
            <Text style={styles.navText}>Inventory</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
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
  profileContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  profileEmail: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  profilePhone: {
    fontSize: 18,
    color: "#666",
    marginBottom: 8,
  },
  profileAddress: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
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
  icon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  navText: {
    fontSize: 12,
    color: "#333",
    fontWeight: "600",
  },
});
