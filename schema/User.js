const mongoose = require("mongoose")

const reqInt = {
  type: Number,
  required: true
}
  
const reqStr = {
  type: String,
  required: true
}  

const userSettings = new mongoose.Schema({
  role: reqStr,
  status: reqStr
})

// User
const userSchema = new mongoose.Schema({
  // https://mongoosejs.com/docs/schematypes.html
  device: [mongoose.SchemaTypes.ObjectId],
  userSettings: userSettings,
  name: reqStr,
  age: reqInt,
  location: reqStr,
  oldData: [mongoose.SchemaTypes.ObjectId]
})

module.exports = mongoose.model("User", userSchema);
