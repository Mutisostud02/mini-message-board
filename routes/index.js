const express = require('express')
const router = express.Router()
const currentDate = new Date().toLocaleString();
const messages = [
  {
    id: 1,
    text: "Unakam saa ngapi",
    user: "Love",
    added: currentDate,
  },
  {
    id: 2,
    text: "Rada, alafu niliwai ile shugli",
    user: "Adwerah",
    added: currentDate,
  }
];

async function getUserById(userId) {
  return messages.find(message => message.id === userId)

}

router.get('/', (req, res) => {
    res.render("index", {title: "Mini Message App", messages: messages, href: "/new"})
})

router.post('/new', (req, res) => {
    const {text, name} = req.body;
    messages.push({id: messages.length + 1, text: text, user: name,added: new Date().toLocaleString()})
    res.redirect("/")
})

async function getUser(req, res) {
  const { id } = req.params;
  const user = await getUserById(Number(id));
  if(!user) {
    res.status(404).send('User Not Found!')
    return;     
  }
  res.render("viewMessage", {text: user.text, user: user.user, added: user.added, href: `/${user.id}`})
  
}

router.get('/:id', getUser)


module.exports = router;