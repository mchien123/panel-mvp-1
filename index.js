const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // can be removed w/ heroku
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');

const Panel = require('./schema/Panel');
const User = require('./schema/User');
const TimeData = require('./schema/TimeData');
const Breaker = require('./schema/Breaker');

// this will be removed after we use heroku 
dotenv.config({ path: './config/config.env'})

//require('./config/passport')(passport)

connectDB()

const app = express()
const port = process.env.PORT

// express sessions (what's this?) .M
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

// passport middleware - uh I don't know what this is yes .M
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})