const router = require('express').Router();
let Cow = require('../models/cows.model');

function getDetailsFromRequest(req) {

    const S3link = req.body.S3link;
    const layersID = req.body.layersID;
    const location = {
        lat: req.body.lat,
        lon: req.body.lon
    }
    const collectedDate = req.body.collectedDate;
    const name = req.body.name;

    return {S3link, layersID, location, collectedDate, name};
}

// GET request by ID
router.route("/get_cow/:id").get((req, res) => {
    Cow.findById(req.params.id)
        .then(cow => res.json(cow))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET today's cow
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
    // which cow
    function getRandomCow(level) {
        if (level == 1){
            var l0 = Math.floor(Math.random()*2+1)
            var l1 = Math.floor(Math.random()*3+1)
            var l2 = 0
            var l3 = 0
            var l4 = 0
            var layerID = "cow" + l0 + l1 + l2 + l3 + l4
        } else if (level == 2){
            var l0 = Math.floor(Math.random()*2+1)
            var l1 = 1
            var l2 = Math.floor(Math.random()*6+1)
            var l3 = 0
            var l4 = 0
            var layerID = "cow" + l0 + l1 + l2 + l3 + l4
        } else if (level == 3){
            var l0 = Math.floor(Math.random()*2+1)
            var l1 = 1
            var l2 = Math.floor(Math.random()*6+1)
            var l3 = Math.floor(Math.random()*5)
            var l4 = 0
            var layerID = "cow" + l0 + l1 + l2 + l3 + l4
        } else if (level == 4){
            var l0 = Math.floor(Math.random()*2+1)
            var l1 = 1
            var l2 = Math.floor(Math.random()*6+1)
            var l3 = Math.floor(Math.random()*5)
            var l4 = Math.floor(Math.random()*5)
            var layerID = "cow" + l0 + l1 + l2 + l3 + l4
        } else if (level == 5){
            var l0 = Math.floor(Math.random()*2+1)
            var l1 = 1
            var l2 = Math.floor(Math.random()*6+1)
            var l3 = Math.floor(Math.random()*5)
            var level4 = Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A');
            var l4 = level4[Math.floor(Math.random()*level4.length)];
            var layerID = "cow" + l0 + l1 + l2 + l3 + l4
        }

        return layerID;
    }

// POST request (create)
router.route('/add_cow').post((req, res) => { 
    const detailsObj = getDetailsFromRequest(req);
    const newCow = new Cow(detailsObj);

    newCow.save()
        .then(() => res.json(newCow))
        .catch(err => res.status(400).json('Error: ' + err));
    return req, res;

    const name = req.body.name;
    return {name};
}),

router.route("/put/:id").put((req, res) => {
    Cow.findById(req.params.id)
        .then(cow => {
            const detailsObj = getDetailsFromRequest(req); 
            cow.overwrite(detailsObj); 
            cow.save()
            .then(() => res.json(cow))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
        return req, res; 
});

// PUT request
router.route("/put/:id").put((req, res) => {
    Cow.findById(req.params.id)
        .then(cow => {
            const detailsObj = getDetailsFromRequest(req); 
            cow.overwrite(detailsObj); 
            cow.save()
            .then(() => res.json(cow))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
        return req, res; 
});

module.exports = router; 