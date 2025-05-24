const prisma = require('../models/prismaClient.js');

const sayHello = async (req, res) => {
  const user = await prisma.user.findFirst();
  res.json({ user: user ? `Hello, ${user.name}!` : 'Hello, World!' });
};



module.exports = { sayHello};
