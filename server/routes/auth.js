/* eslint-disable linebreak-style */
import express from 'express';

// eslint-disable-next-line new-cap
const router = express.Router();

// controllers
const {signup, signin,
  forgotPassword, resetPassword} = require('../controllers/auth');

router.get('/', (req, res) => {
  return res.json({
    data: 'hello world from the API',
  });
});

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
