const express = require('express')
const router = express.Router()

const { getUser, getUserById, messages, newUser, getMessages, validateUserMessage, deleteUser } = require('../controllers/indexController.js')

router.get('/', getMessages)
router.post('/new', validateUserMessage, newUser)
router.post('/messages/delete/:id', deleteUser)
router.get('/messages/:id', getUser)


module.exports = router;