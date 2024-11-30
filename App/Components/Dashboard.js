// Dashboard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavBar from './../Components/BottomNavBar'; // Adjust the path as necessary

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard Screen</Text>
      {/* Other content of the Dashboard screen */}
      <BottomNavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;