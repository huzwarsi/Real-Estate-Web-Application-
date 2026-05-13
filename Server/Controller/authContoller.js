

const bcrypt = require("bcrypt");
const prisma = require('../lib/prisma')

const register = async(req,res)=>{

    const {email,userName , password} = req.body

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

}

const login = (req,res)=>{

// database Operations

}


const logout = (req,res)=>{

// database Operations

}


module.exports = {register,login,logout}