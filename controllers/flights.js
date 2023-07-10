//controllers/flights.js

const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newFlight,
    create,
    index,
    show
};

async function show(req, res) {
    try {
    const flight = await Flight.findById(req.params.id);
    const ticket = await Ticket.find({flight: flight._id});
    res.render('flights/show', {title: 'Flight Info', flight, ticket});
    } 
    catch(err) {
        console.log(err)
    }
}

async function index(req, res) {
    const allFlights = await Flight.find({});
    res.render('flights/index', {flights: allFlights});
}
async function create(req, res) {
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (err) {
        console.log(err);
        res.render('flights/new', { errorMsg: err.message});
    }
}

function newFlight(req, res) {
    const flight= new Flight(); // create a new Flight object
    res.render('flights/new', {title: 'Add Flight', errorMsg: '', flight});
}