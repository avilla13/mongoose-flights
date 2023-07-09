const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations (add destination for that flight)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;
