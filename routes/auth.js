const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Google authorization
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google authorization callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback', 
  passport.authenticate('google', {failureRedirect: '/'}),
  (req, res) => {
    res.redirect('/dashboard')
  }
)

// @desc    Logout the user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout()
  res.dedirect('/')
})

module.exports = router