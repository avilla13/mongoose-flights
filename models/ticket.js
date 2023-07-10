// models/ticket.js
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


const ticketSchema = new Schema({
    seat: {
        type: String,
        required: true
    },
    price: {
        type: String,
        enum: [0, 20, 40, 60, 80],
        default: 20,
        required: true,
        min: 0
    },
    flight: {
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true
});


// Compile schema into a model to export it
module.exports = mongoose.model('Ticket', ticketSchema);