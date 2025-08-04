const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render("form", {title: "Write new message: "})
})

module.exports = router;