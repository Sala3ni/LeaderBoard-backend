const express = require('express');
const { claimPoints, getLeaderboard, getClaimHistory } = require('../controllers/pointController');

const router = express.Router();

router.post('/claim', claimPoints);
router.get('/leaderboard', getLeaderboard);
router.get('/history', getClaimHistory);

module.exports = router;