import mongoose, { Schema } from "mongoose";
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true,
},
password:{
    type:String,
    required:true,
},
role:{
    type:String,
    required:true
}
})
const User = mongoose.model("users",userSchema);
export default  User;
