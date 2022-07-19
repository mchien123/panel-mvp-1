const { connectDB } = require('../config/db')

const loginService = async (username, password) => {
  try {
    // Connect to Mongo first
    await connectDB() 
    

  }
  catch (e) 
  {
    throw new Error(e.message)
  }
}

module.exports = {
  loginService
}