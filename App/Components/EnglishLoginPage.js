import { View, Text ,Image, TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import axios from "axios";

export default function EnglishLoginPage({navigation}) {
  const [role, setRole] = useState('');
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const handleLogin = ()=>{
    const user = {
        username:username,
        password:password,
        role:role
    }
  console.log(role);
  try{
    axios.post("http://10.0.2.2:8000/login",user)
  
    
        
        navigation.replace("Dashboard");
    }
    catch(err){
        Alert.alert("Login Error","Invalid Email");
        console.log(err);
    }
}

  return (
    <View>
      <View style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
        <Image source={require("../Assets/Image/login-page-iml.png")} style={{height:100,width:100,marginTop:70}} ></Image>
        <Text style={{fontSize:30, display:"flex", flexDirection:"column",marginTop:10}}>Login/SignUp</Text>
      </View>
      <View style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <View>
            <Text style={{marginTop:20}}> Enter Username</Text>
        <TextInput placeholder='UserName' style={styles.inputForn} value={username} onChangeText={(text)=>{
          setUserName(text)
        }}/>
        <Text>Enter Password</Text>
        <TextInput placeholder='Password' style={styles.inputForn} value={password} onChangeText={(text)=>setPassword(text)}/ >
        <Text>Select Role</Text>
          <Picker
            selectedValue={role}
            style={styles.picker}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Picker.Item label="Business" value="Business" />
            <Picker.Item label="Farmer" value="Farmer" />
          </Picker>
        <TouchableOpacity style={styles.submitButton} onPress={handleLogin} ><Text style={{color:"white"}}>Submit</Text></TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate("EnglishRegisterPage")}
            style={{ marginTop: 10 }}
          >
            <Text style={{ color: "blue", textAlign: "center" }}>
              Don't have an account? Register here
            </Text>
          </TouchableOpacity>
        </View>
        

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    inputForn:{
        marginTop:10,
        marginBottom:10,
        width:300,
        backgroundColor:"lightgray",
        paddingLeft:40,
        paddingRight:40,
        paddingTop:10,
        paddingBottom:10,
        borderStyle:"solid",
        borderColor:"black",
        borderWidth:2,
        borderRadius:8,

    },

    submitButton:{
        backgroundColor:"black",
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10,
        marginBottom:10,
        marginLeft:0,
        width:100
    
    
      }
})
