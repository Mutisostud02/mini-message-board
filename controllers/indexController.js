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

async function getUser(req, res) {
  const { id } = req.params;
  const user = await getUserById(Number(id));
  if(!user) {
    res.status(404).send('User Not Found!')
    return;     
  }
  res.render("viewMessage", {text: user.text, user: user.user, added: user.added, href: `/${user.id}`})
  
}
module.exports = { getUser, messages, getUserById }