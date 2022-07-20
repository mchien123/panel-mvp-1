const express = require('express');
const { check, validationResult } = require('express-validator')

const { postTimedata } = require('../controllers/timedata-controller')

const timedataRouter = express.Router();

/* Login POST route */
timedataRouter.post('/timedata',
  // check('breakerID').exists(),
  check('start_date').exists().isDate(),
  check('end_date').exists().isDate(),
  check('dataSet').exists().isArray(),
  check('nsamples').exists().isNumeric(),
  check('sum_voltage').exists().isNumeric(),
  check('sum_current').exists().isNumeric(),
  (req, res, next) => {
    const errors = validationResult(req)
    postTimedata(res, req, next)
    next()
  }
);

module.exports = timedataRouter