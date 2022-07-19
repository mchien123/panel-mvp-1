const express = require('express');
const { check } = require('express-validator')

const { postLogin } = require('../controllers/login-controller')


const router = express.Router();

/* Login POST route */
router.post('/login',
  check('username').exists(),
  check('password').exists(),
  postLogin 
);

module.exports = router