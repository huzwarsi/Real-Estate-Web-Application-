

const bcrypt = require("bcrypt");
const prisma = require('../lib/prisma')

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
        res.status(500).json({ message: 'Internal server error' });
    }

}

const login = async (req,res)=>{

    const {email,password} = req.body

    try{

        
        const user = await prisma.User.findUnique({
            where:{
                email
            }})
            if(!user){
             return res.json({ message: 'Invalid Credintials' });

            }


        const ispasswordValid = await bcrypt.compare(password, user.password);
            if(!ispasswordValid){
             return res.json({ message: 'Invalid Credintials' });
       

            }
            res.json({ message: 'Login Successfully' });
            

    }catch(error){
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Error' });
    }

// database Operations



}


const logout = (req,res)=>{

// database Operations

}


module.exports = {register,login,logout}