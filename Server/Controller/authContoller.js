

const bcrypt = require("bcrypt");
const prisma = require('../lib/prisma');
const { json } = require("express");
const jwt = require('jsonwebtoken')

const dotenv =  require('dotenv')
dotenv.config()



const register = async(req,res)=>{

    const {email,userName , password} = req.body

    try{

        
        const hashedPassword = await bcrypt.hash(password, 10);
        // database Operations
        console.log(email,userName,hashedPassword);
        
        
        // Create a new user in the database using Prisma
        
        const newUser = await prisma.User.create({
            data:{
                email, 
                userName,
                password:hashedPassword
            }
        })
        
        
        
        
        res.json({
            message:'User registered successfully',
            user: newUser
        })      
    }catch(error){
        console.error('Error registering user:', error);
        res.status(500).json({ message: 'You are already exists' });
    }

}



const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      return res.json({ message: 'Invalid Credentials' });
    }

    const ispasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!ispasswordValid) {
      return res.json({ message: 'Invalid Credentials' });
    }


   const token = jwt.sign({
    id  : user.id,
    email : user.email,
    userName : user.userName,
      isAdmin : false

   }, process.env.Secret_Key,{expiresIn: '1h'})


   
   res.cookie("token", token, {
       httpOnly: true,
       secure: false,
       maxAge: 1 * 60 * 60 * 1000
    });
    
    res.json({
     message : 'Login successful',
     token
    })
    
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Error' });
  }
};


const logout = (req,res)=>{

// database Operations
res.clearCookie("token").status(200).json({
    "message" : 'LogOut Successfully'
})

}


module.exports = {register,login,logout}