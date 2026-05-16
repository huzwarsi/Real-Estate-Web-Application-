const jwt = require('jsonwebtoken')

const verifyToken = async(req,res,next) => {

    const token  = req.cookies.token
    if(!token){
       return  res.json({"message" : "Not Authenticated"})
    }

    jwt.verify(token,process.env.Secret_key, async(err,payload)=>{
        if(err){
             return res.json({"message" : 'Invalid Token'})
        }
        req.userId = payload.id
        console.log(req.userId);
        
        next()
    })


}



module.exports = verifyToken