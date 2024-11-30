import 'react-native-gesture-handler'; // Add this at the top
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Ensure correct file paths and names
import LanguagePage from './App/Components/LanguagePage';
import EnglishLoginPage from './App/Components/EnglishLoginPage';
import EnglishRegisterPage from './App/Components/EnglishRegisterPage';
import Dashboard from './App/Components/Dashboard';
import Inventory from './App/Components/Inventory';
import AddProduct from './App/Components/AddProduct';
import ProfilePage from './App/Components/ProfilePage';


// Create Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Global State Management
  const [users, setUsers] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  const [inventory, setInventory] = useState({
    items: {}
  });

  // User Registration
  const registerUser = (username, password, email) => {
    const userId = `user_${Object.keys(users).length + 1}`;
    setUsers(prevUsers => ({
      ...prevUsers,
      [userId]: {
        username,
        password,
        email,
        profile: {}
      }
    }));
    return userId;
  };

  // User Login
  const loginUser = (username, password) => {
    const user = Object.values(users).find(
      u => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  // Inventory Management
  const addProduct = (name, price, description) => {
    const productId = `product_${Object.keys(inventory.items).length + 1}`;
    setInventory(prevInventory => ({
      ...prevInventory,
      items: {
        ...prevInventory.items,
        [productId]: { 
          name, 
          price, 
          description,
          addedBy: currentUser ?.username || 'Unknown'
        }
      }
    }));
  };

  // Update Profile
  const updateProfile = (profileData) => {
    if (currentUser) {
      setCurrentUser(prev => ({
        ...prev,
        profile: { ...prev.profile, ...profileData }
      }));
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Language"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {/* Use component prop for cleaner rendering */}
        <Stack.Screen 
          name="Language" 
          component={LanguagePage} 
          options={{ title: 'Select Language' }}
        />
        <Stack.Screen 
          name="Login" 
          options={{ title: 'Login' }}
        >
          {props => (
            <EnglishLoginPage 
              {...props} 
              loginUser={loginUser} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="Register" 
          options={{ title: 'Register' }}
        >
          {props => (
            <EnglishRegisterPage 
              {...props} 
              registerUser={registerUser} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="Dashboard" 
          options={{ title: 'Dashboard' }}
        >
          {props => (
            <Dashboard 
              {...props} 
              currentUser={currentUser} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="Inventory" 
          options={{ title: 'Inventory' }}
        >
          {props => (
            <Inventory 
              {...props} 
              inventory={inventory} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="AddProduct" 
          options={{ title: 'Add Product' }}
        >
          {props => (
            <AddProduct 
              {...props} 
              addProduct={addProduct} 
            />
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="Profile" 
          options={{ title: 'Profile' }}
        >
          {props => (
            <ProfilePage 
              {...props} 
              currentUser={currentUser}
              updateProfile={updateProfile}
            />
          )}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;