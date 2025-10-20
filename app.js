const express = require('express');
require('dotenv').config()
const {body, validationResult} = require('express-validator')

const path = require('path')
const app = express()

const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

const indexRouter = require('./routes/index.js')
const newRouter = require('./routes/newMessage.js');

app.use('/new', newRouter)
app.use('/', indexRouter)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(process.cwd(), "public", "404.html"))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})