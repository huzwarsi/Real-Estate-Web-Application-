
const jwt = require('jsonwebtoken')

const shouldBeLogin = async(req,res) =>{

    const token  = req.cookies.token
    if(!token){
        res.json({"message" : "Not Authenticated"})
    }

    jwt.verify(token,process.env.Secret_key, async(err,payload)=>{
        if(err){
                    
         return   res.json({"message" : "Invalid Token"})
        }
        })
    res.json({"message" : "You are Authenticated"})
}



const shouldBeAdmin = (req,res) =>{

}




module.exports = { shouldBeLogin, shouldBeAdmin }