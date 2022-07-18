module.exports = {
  
  // makes sure the user is actually allowed to get to this page
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureGuest: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard')
    } else {
      return next()
    }
  }
}