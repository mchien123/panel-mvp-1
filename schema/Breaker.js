const mongoose = require("mongoose")

const reqStr = {
  type: String,
  required: true
}  

// Breakers
const breakerSchema = new mongoose.Schema({
  type: reqStr,
  groups: [String]
})

module.exports = mongoose.model("Breaker", breakerSchema);
