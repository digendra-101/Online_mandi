import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomNavBar from './../Components/BottomNavBar'; // Adjust the path as necessary

const ProfilePage = ({ currentUser , navigation }) => {
  const [profileData, setProfileData] = useState(currentUser ?.profile || {});

  useEffect(() => {
    setProfileData(currentUser ?.profile || {});
  }, [currentUser ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Page</Text>
      
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.info}>{profileData.username || 'N/A'}</Text>
      
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.info}>{profileData.email || 'N/A'}</Text>

      {/* Add the Bottom Navigation Bar */}
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
  label: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default ProfilePage;