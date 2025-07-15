const User = require('../models/User');
const ClaimHistory = require('../models/ClaimHistory');

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({
    userId: user._id,
    userName: user.name,
    points
  });
  await history.save();

  res.json({ message: 'Points claimed', user, points });
};

exports.getLeaderboard = async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const rankedUsers = users.map((u, index) => ({
    rank: index + 1,
    name: u.name,
    totalPoints: u.totalPoints,
    id: u._id
  }));
  res.json(rankedUsers);
};

exports.getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find().sort({ claimedAt: -1 });
  res.json(history);
};