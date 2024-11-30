import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv"
import jwt from "jsonwebtoken";
import User from "./models/user.js"
import cookieParser from "cookie-parser";
import bcrypt from "bcryptjs"
dotenv.config();
const PORT = process.env.PORT||8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cookieParser());
const conn = async ()=>{
    try{
        console.log("how");
         mongoose.connect("mongodb+srv://shahidiqbal63209:Shahid786@cluster0.lbxy9hu.mongodb.net/",{
             useNewUrlParser:true,
              useUnifiedTopology:true,
        })
        console.log("database was connected")
    }catch(err){
        console.log("database was disconnected");

    }
}
mongoose.set('debug', true);

app.listen(PORT,()=>{
    conn();
    console.log("server is running");
})
console.log("how1");

console.log("me")
app.post("/register", async (req, res) => {
    try {
      const { name, email, password, role } = req.body;
      console.log(role);
      // Validate required fields
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "All fields (name, email, password, role) are required" });
      }
      
      // Check if email is already registered
      const findemail = await User.findOne({ email });
      console.log(findemail);
      if (findemail) {
        return res.status(400).json({ message: "Email is already registered" });
      }
  
      // Hash the password before saving
      console.log(findemail,"kol");
      const hashedPassword = bcrypt.hashSync(password, 10);
  
      // Create a new user
      const newuser = new User({ name, email, password: hashedPassword, role });
      console.log("popl");
      await newuser.save();
  
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      console.log("Something went wrong during registration:", err);
      res.status(500).json({ message: "Registration failed" });
    }
  });
  

app.post("/login",async (req,res)=>{
    try{
      console.log("kon");
        const {email,password,role} = req.body;
        //console.log(password);
        const uses = await User.findOne({email,role});
        console.log(uses.password)
        if(!uses){
          console.log("hello")
           return  res.status(401).json({message:"Invalid password and Email"});
        }
        
        
        const passok = bcrypt.compareSync(password,uses.password);
        console.log("me shahid")
        //generate the token
       // console.log("me shahid")
       const expiresInDays = 7;
       if(!passok){
        const token = jwt.sign({userId:uses._id},process.env.JWT,{expiresIn:expiresInDays * 24 * 60 * 60});
       console.log(uses._id)
       res.cookie('token', token, { httpOnly: true , secure: true, // Set for HTTPS
       sameSite: 'strickt' });
      
        res.status(200).json("login successfully");
        console.log(uses._id);
       }
    }
    catch(err){
        res.status(500).json("login is failed");
    }
})
// app.get('/profiles', (req, res) => {
//   const token = req.cookies.token;
//  // console.log(req.cookies.token);
//   console.log("hrello",token)
//   if (!token) {
//     return res.status(401).send('Unauthorized');
//   }
// console.log("me hoo kon")
//   try {
//    //console.log(process.env.JWT);
//    const expiresInDays = 7;
//     const decoded = jwt.verify(token, process.env.JWT,{expiresIn:expiresInDays * 24 * 60 * 60});
//     //console.log("hello",decoded);
//     const userId = decoded.userId;
    
//     res.send(`User ID: ${userId}`);
//   } catch (error) {
//     res.status(401).send('Unauthorized');
//   }
// });
app.post('/logout', (req, res) => {
  
  res.clearCookie('token');
  res.send('Logout successful');
  console.log("hello")
});

