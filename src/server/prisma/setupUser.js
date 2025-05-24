// const { PrismaClient } = require('@prisma/client');
// const userController = require('../controllers/userController');
// const prisma = new PrismaClient();

// async function createDefaultUserIfNotExists() {
//   const existingUser = await prisma.user.findFirst();
//   if (existingUser) return existingUser;

//   const defaultPlan = await prisma.plan.create({
//     data: { name: 'default', limit: 1000, used_limit: 0 },
//   });

//   const newUser = await prisma.user.create({
//     data: {
//       ipAddress,
//       name: 'Unknown',
//       email: `Unknown`,
//       loggedIn: false,
//       planId: defaultPlan.id,
//     },
//   });

//   return newUser;
// }

// module.exports = createDefaultUserIfNotExists;
