const { timedataService } = require('../services/timedata-service')

const postTimedata = async (req, res, next) => {
  try {  
    await timedataService(req.body)
    res.sendStatus(201)
    next() 
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

module.exports = {
  postTimedata
}