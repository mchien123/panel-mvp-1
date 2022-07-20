const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv'); // can be removed w/ heroku
const passport = require('passport');
const session = require('express-session');
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo')
const { ensureAuth, ensureGuest } = require('./middleware/auth')

const Panel = require('./schema/Panel');
const User = require('./schema/User');
const TimeData = require('./schema/TimeData');
const Breaker = require('./schema/Breaker');

const timedataRouter = require('./routes/timedata-route')

// this will be removed after we use heroku 
dotenv.config({ path: './config/config.env'})

require('./config/passport')(passport)

// test te stt
connectDB()

const app = express()
const port = process.env.PORT

// express sessions - passportJS uses this to authenticate user
app.use(session({
  secret: 'cupcakes29 hotwheels2002 leafblower33 wafbwaubufiaganwg',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI})
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/auth', require('./routes/auth'))
app.use('/timedata', timedataRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
app.get('/dashboard', ensureAuth, (req, res) => {
  res.send('This is the dashboard')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
