/*
This file authenticates the user with google OAuth2 by using PassportJS
*/

const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../schema/User')

module.exports = function(passport) {

  // What strategy we're using
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  // adding the User to the database
  async (accessToken, refreshToken, profile, done) => {
    // create the user
    const newUser = {
      googleID: profile.id,
      name: profile.displayName,
      device: [],
      image: profile.photos[0].value,
      userSettings: {
        role: "N/A",
        status: "N/A"
      },
      age: 0,
      location: "N/A",
      oldData: []
    }

    // check to see if user exists
    try {
      let user = await User.findOne({ googleID: profile.id })

      if (user) {
        done(null, user)
      } else {
        // if not, create a new User and add it to the database
        user = await User.create(newUser)
        done(null, user)
      }
    } catch (err) {
      console.error(err)
    }
  }))

  // https://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}