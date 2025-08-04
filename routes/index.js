const express = require('express')
const router = express.Router()

const { getUser, getUserById, messages } = require('../controllers/indexController.js')

router.get('/', (req, res) => {
    res.render("index", {title: "Mini Message App", messages: messages, href: "/new"})
})

router.post('/new', (req, res) => {
    const {text, name} = req.body;
    messages.push({id: messages.length + 1, text: text, user: name,added: new Date().toLocaleString()})
    res.redirect("/")
})


router.get('/:id', getUser)


module.exports = router;