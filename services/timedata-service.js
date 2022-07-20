const mongoose = require('mongoose')
const { timeDataSchema } = require('../schema/TimeData')
const { connectDB } = require('../config/db')

const timedataService = async (body) => {
  try {
    // Connect to database
    connectDB() 

    // Create new doc using Schema
    let timeDataDoc = new timeDataSchema({
      breakerID: new mongoose.Types.ObjectId(),
      start_date: body.start_date,
      end_date: body.end_date,
      dataSet: body.dataSet,
      nsamples: body.nsamples,
      sum_voltage: body.sum_voltage,
      sum_current: body.sum_current
    })

    // Attempt to upload doc to DB
    timeDataDoc.save((err, doc) => {
      if (!err) {
        req.flash('success', 'Timedata added successfully!')
      } else {
        console.log('Error during insertion ' + err)
      }
    })
    // Create new timedata entry in database 
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  timedataService
}