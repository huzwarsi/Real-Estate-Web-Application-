const express = require('express')
const { register, login, logout } = require('../Controller/authContoller')

const Authrouter = express.Router()

Authrouter.post('/register',register)


Authrouter.post('/login',login)

 
Authrouter.delete('/logout',logout)



module.exports = {Authrouter}