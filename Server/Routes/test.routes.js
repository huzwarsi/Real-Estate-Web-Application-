const express = require('express')
const {shouldBeLogin ,shouldBeAdmin}= require('../Controller/testcontrollers')
const verifyToken = require('../Middleware/verifyToken')

const router = express.Router()

router.get('/should_be_loggedIn',verifyToken, shouldBeLogin)
router.get('/should_be_Admin', verifyToken, shouldBeAdmin)


module.exports = router