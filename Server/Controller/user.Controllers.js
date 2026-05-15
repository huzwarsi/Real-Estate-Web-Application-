const prisma = require("../lib/prisma");

const getUsers = async(req,res) =>{
    console.log('getUsers working fine!!!!!!!!');

    
    try{
        
        const users = await prisma.user.findMany()
        res.json({"message" : "All users Data", users})


    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to get Users"})
        

    }
}


const getUser = async(req,res) =>{

    const id = req.params.id
    
    try{
        
        const user = await prisma.user.findUnique({
            where : {id}
        })
        res.json({"message" : "user Data", user})


    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to get User"})
        

    }
}





const updateUser = async(req,res) =>{
    const id = req.params.id
    const tokenId = req.id
    console.log(tokenId);
    
    
    if(id !== tokenId){
        return res.json({"message" : "You are not authorized to update this user"})
    }

    try{
        
        const body = req.body
        const updateusers = await prisma.user.update({
            where : {id},
            data : body
        })
        console.log(updateusers);
        
        res.json({"message" : "user Data updated", updateusers})


    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to get User"})
        

    }
}




const deleteUser = async(req,res) =>{
    try{


    }catch(error){
        console.log(error);
        res.json({"message" : "Failed to delete User"})
        

    }
}






module.exports = {getUsers,getUser,updateUser,deleteUser}