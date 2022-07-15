const express = require('express');
const mongoose = require('mongoose');

const Panel = require('./schema/Panel');
const User = require('./schema/User');
const TimeData = require('./schema/TimeData');
const Breaker = require('./schema/Breaker');

const app = express()
const port = process.env.PORT

// MAKE SURE TOCHANGE PASSWORD TO .ENV THING
mongoose.connect(process.env.MONGO_URA);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })