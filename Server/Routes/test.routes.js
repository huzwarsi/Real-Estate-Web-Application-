const express = require('express')
const { shouldBeAdmin, shouldBeLogin } = require('../Controller/testcontrollers')

const router = express.Router()

router.get('/should_be_loggedIn',shouldBeLogin)
router.get('/should_be_Admin',shouldBeAdmin)


module.exports = router