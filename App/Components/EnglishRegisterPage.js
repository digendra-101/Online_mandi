import { View, Text, TextInput, StyleSheet, TouchableOpacity, Picker } from 'react-native';
import React, { useState } from 'react';

export default function RegisterPage({ navigation }) {
  const [selectedRole, setSelectedRole] = useState("Business");
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleRegister =  ()=>{
    console.log("how are you");
    //console.log(name);
    const user = {
        name:name,
        email:email,
    password:password,
selectedRole:selectedRole}
   // console.log(user);
    //post request to the backend
    try{
        axios.post("http://10.0.2.2:8000/register",user);
        Alert.alert("registration successfully");
    setEmail("");
    setName("");
setPassword("");
setSelectedRole("");
navigation.navigate("EnglishLoginPage");

    }
    catch(err){
Alert.alert("not registred Error","An Error occured during registration")
console.log("error in registration",err);
}
}

  return (
    <View>
      <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Text style={{ fontSize: 30, marginTop: 50 }}>Register</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <View>
          <Text style={{ marginTop: 20 }}>Enter Name</Text>
          <TextInput placeholder='Name' style={styles.inputForm} 
          value={name} onChangeText={(text)=>{
            setName(text)
          }}/>
          
          <Text>Enter Email</Text>
          <TextInput placeholder='Email' style={styles.inputForm} 
          value={email}
          onChangeText={(text)=>{
            setEmail(text)
          }}/>
          
          <Text>Enter Password</Text>
          <TextInput placeholder='Password' style={styles.inputForm} secureTextEntry={true} 
          value={password} onChangeText={(text)=>{
            setPassword(text)
          }}/>
          
          <Text>Select Role</Text>
          <Picker
            selectedValue={selectedRole}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
          >
            <Picker.Item label="Business" value="Business" />
            <Picker.Item label="Farmer" value="Farmer" />
          </Picker>
          
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              console.log(`Name, Email, Password, Role: ${selectedRole}`);
              navigation.navigate("Dashboard");
            }}
          >
            <Text style={{ color: "white" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    marginTop: 10,
    marginBottom: 10,
    width: 300,
    backgroundColor: "lightgray",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
  },
  picker: {
    height: 50,
    width: 300,
    backgroundColor: "lightgray",
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: "black",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 0,
    width: 100,
    alignItems: "center",
  },
});