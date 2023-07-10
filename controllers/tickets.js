// controllers/tickets

const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function create(req, res) {
    const flightId = req.params.id;
    req.body.flight = flightId; // attach the body using the id
    try {
      const ticket = await Ticket.create(req.body);
    // Respond to the Request (redirect if data has been changed)
     res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.log(err);
    }
}

function newTicket(req, res) {
    // const ticket = new Ticket(); // create a new Ticket object
    const flightId = Flight.findById(req.params.id);

    res.render('tickets/new', {title: 'Add Ticket', errorMsg: '',  flightId: req.params.id});
}