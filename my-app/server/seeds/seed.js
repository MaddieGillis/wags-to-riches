const db = require('../config/connection');
const { User } = require('../models');
//const User = require('../models/User');

const userData = require('./userData.json');

db.once('open', async () => {
  await User.deleteMany({});

  const User = await User.insertMany(userData);

  console.log('User seeded!');
  process.exit(0);
});