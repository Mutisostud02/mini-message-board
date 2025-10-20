const currentDate = new Date().toLocaleString();
const {body, validationResult} = require('express-validator');
const db = require('../db/query');

const validateUserMessage = [
  body("name").trim()
  .notEmpty().withMessage("Please submit name!")
  .isLength({min:3, max:15}).withMessage("Name must be between 3 and 15 characters"),
  body("text").trim()
  .notEmpty().withMessage("Cannot send empty message!")
]



async function getMessages(req, res) {
   const data = await db.getAllData();
   res.render("index", {title: "Mini Message App", messages: data, href: "/new"})
}
async function getUserById(userId) {
  return messages.find(message => message.id === userId)

}
async function newUser(req, res) {
    const {text, name} = req.body;
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.render("form", {title: "Write new message: ", errors: errors.array()})
    }

    await db.addNewUser(name, text)
    res.redirect("/")
}
async function newMessage(req, res) {
    res.render("form", {title: "Write new message: ", errors: []})
}

async function getUser(req, res) {
  const { id } = req.params;
  const user = await db.getSenderById(Number(id));
  // console.log(user)

  if(!user) {
    res.status(404).send('User Not Found!')
    return;     
  }

  res.render("viewMessage", {text: user.message, user: user.sendername, added: user.timesent, href: `/${user.id}`, id: id})
  
}

async function deleteUser(req, res) {
  const { id } = req.params;
  await db.deleteUser(Number(id))
  res.redirect("/")
}
module.exports = { getUser, getUserById, newUser, getMessages, deleteUser, newMessage, validateUserMessage }