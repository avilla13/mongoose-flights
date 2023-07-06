// models/flight.js
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    
})

// Compile schema into a model to export it
module.exports = mongoose.model('Flight', flightSchema);
