var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /flights
router.get('/', flightsCtrl.index);

//GET /flights/new
router.get('/new', flightsCtrl.new);

//POST /flights
router.post('/', flightsCtrl.create);

module.exports = router;
