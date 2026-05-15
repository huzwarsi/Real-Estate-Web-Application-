const express = require('express')
const { getUsers, getUser, updateUser, deleteUser } = require('../Controller/user.Controllers')
const verifyToken = require('../Middleware/verifyToken')

const UserRouter = express.Router()

UserRouter.get('/',verifyToken,getUsers)


UserRouter.get('/:id',verifyToken ,getUser)

 
UserRouter.put('/:id',verifyToken,updateUser)

UserRouter.delete('/:id',verifyToken,deleteUser)






module.exports = {UserRouter}