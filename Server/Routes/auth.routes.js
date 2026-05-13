const express = require('express')
const { register, login, logout } = require('../../Controller/authContoller')

const Authrouter = express.Router()

router.get('/register',register)


router.post('/login',login)


router.delete('/logout',logout)



module.exports = {Authrouter}