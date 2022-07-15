const express = require('express');

const router = express.Router();

/* /users HTTP methods */
router.post('/users')
router.get('/users')
router.put('/users')
router.delete('/users')

module.exports = router