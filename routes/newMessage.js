const express = require('express')
const { newMessage } = require('../controllers/indexController')
const router = express.Router()

router.get('/', newMessage)
module.exports = router;