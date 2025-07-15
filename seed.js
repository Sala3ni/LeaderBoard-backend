const mongoose = require('mongoose');
const User = require('./models/User');
mongoose.connect('mongodb://127.0.0.1:27017/leaderboard');

const names = ['Rahul', 'Kamal', 'Sanak', 'Priya', 'Aman', 'Riya', 'Neha', 'Tina', 'Rohan', 'Zara'];

const seedUsers = async () => {
  await User.deleteMany();
  await Promise.all(names.map(name => new User({ name }).save()));
  console.log('Users seeded');
  process.exit();
};

seedUsers();