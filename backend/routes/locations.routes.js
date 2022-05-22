const router = require('express').Router();
let Location = require('../models/cows.model');

function getDetailsFromRequest(req) {
    const location = req.body.location;
    const longitude = req.body.longitude;
    const latitude = req.body.latitude;

    return {location, longitude, latitude};
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// GET request for random location
router.route('/get_random/:id').get((req, res) => {
    let random = req.params.id;
    Location.findOne().skip(random)
     .then(member => res.status(200).json(member))
     .catch(err => res.status(400).json("Error: "+ err))
  })

module.exports = router; 