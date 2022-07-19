const { loginService } = require('../services/login-service')

const postLogin = async (req, res, next) => {
  const {username, password} = req.body 
  try
  {
    loginService(username, password) 
    res.sendStatus(201)
    next() 
  }
  catch (e)
  {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  postLogin 
}