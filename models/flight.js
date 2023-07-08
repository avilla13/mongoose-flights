// models/flight.js
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United','Spirit'],
        required: true
    },
    airport: {
        type: String,
        enum: ['ORD', 'DFW', 'LAX', 'SAN'],
        default: 'ORD',
        required: true
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: function (){
         const oneYearFromCreated = new Date();
         oneYearFromCreated.setFullYear(oneYearFromCreated.getFullYear() + 1);
         return oneYearFromCreated;
        }
            
    }
}, {
    timestamps: true
});

// Compile schema into a model to export it
module.exports = mongoose.model('Flight', flightSchema);
