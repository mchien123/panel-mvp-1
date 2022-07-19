const mongoose = require("mongoose")

const reqInt = {
  type: Number,
  required: true
}

const data = {
  voltage: reqInt,
  current: reqInt,
}

// Time Data
const timeDataSchema = new mongoose.Schema({
  // this is sized based bucketing. Perhaps time based works better?
  breakerID: mongoose.SchemaTypes.ObjectId, // that means data is sent per breaker, not mix and matched. Double check
  start_date: Date,
  end_date: Date,
  dataSet: [ {
    "0": data,
    "5": data,
    "10": data,
    "15": data,
    "20": data,
    "25": data,
    "30": data,
    "35": data,
    "40": data,
    "45": data,
    "50": data,
    "55": data
  } ],
  nsamples: reqInt,
  sum_voltage: reqInt,
  sum_current: reqInt
})


module.exports = mongoose.model("TimeData", timeDataSchema);