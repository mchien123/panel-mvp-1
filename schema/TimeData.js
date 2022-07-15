const mongoose = require("mongoose")

const reqInt = {
  type: Number,
  required: true
}

// Time Data
const timeDataSchema = new mongoose.Schema({
  // this is sized based bucketing. Perhaps time based works better?
  day: Date, // this might not be needed
  breakerID: mongoose.SchemaTypes.ObjectId, // that means data is sent per breaker, not mix and matched. Double check
  first: Date,
  last: Date,
  nsamples: reqInt,
  samples: [ {
    voltage: reqInt,
    current: reqInt,
    timeStamp: reqInt
  } ]
})


module.exports = mongoose.model("TimeData", timeDataSchema);