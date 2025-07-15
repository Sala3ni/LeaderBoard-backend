const User = require('../models/User.js');

exports.getUsers = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
};

exports.addUser = async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.status(201).json(newUser);
};