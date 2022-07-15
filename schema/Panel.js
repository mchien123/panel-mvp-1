const mongoose = require("mongoose")

const reqInt = {
  type: Number,
  required: true
}
  
const reqStr = {
  type: String,
  required: true
}  

// Panels
const panelSchema = new mongoose.Schema({
  breakers: [mongoose.SchemaTypes.ObjectId],
  user: mongoose.SchemaTypes.ObjectId,
  configurations: {
    config1: String,
    config2: String,
  },
  type: reqStr,
  // is there a way to default this to 0 when you first add? Also, do 
  // we want it to automatically update? I assume so.
  ageMonths: reqInt, 
  
  location: reqStr,
  firmwareVersion: reqStr,
  hardwareVersion: reqStr,
  pastOwners: [Number],
  activeSessions: [Number], 
  state: reqStr, // hasOwner, ownerLess. Maybe we just 0 1 it
  groups: [ {
    group: reqStr,
    permissions: [ { 
      user: mongoose.SchemaTypes.ObjectId,
      role: reqStr // flipper, viewer, algo control
    } ]
  } ]
})

module.exports = mongoose.model("Panel", panelSchema);
