import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';  // You can remove Text, TouchableOpacity, Image
import LanguagePage from './App/Components/LanguagePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnglishLoginPage from './App/Components/EnglishLoginPage';
import Dashboard from './App/Components/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddProduct from "./App/Components/AddProduct"
import Inventory from "./App/Components/Inventory"
import ProfilePage from "./App/Components/ProfilePage"
import RegisterPage from './App/Components/EnglishRegisterPage';
export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName='Language'>
        <Stack.Screen name='Language' component={LanguagePage} options={{ title: "Select Language" }} />

        <Stack.Screen name='EnglishLoginPage' component={EnglishLoginPage} options={{ title: "Login Page",  }} />
        <Stack.Screen name = 'EnglishRegisterPage' component = {RegisterPage} options={{title:'Register Page'}} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ title: "Dashboard",  headerStyle: { backgroundColor: '#4CAF50' },headerTintColor: '#fff', }} />
        <Stack.Screen name='AddProduct' component={AddProduct} options={{ title: "Add Products",  headerStyle: { backgroundColor: '#4CAF50' },headerTintColor: '#fff', }} />
        <Stack.Screen name='Inventory' component={ Inventory} options={{ title: "Inventory",  headerStyle: { backgroundColor: '#4CAF50' },headerTintColor: '#fff', }} />
        <Stack.Screen name='Profile' component={ProfilePage} options={{ title: "Profile",  headerStyle: { backgroundColor: '#4CAF50' },headerTintColor: '#fff', }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}
