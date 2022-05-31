const router = require('express').Router();
let Users = require('../models/cows.model');

function getDetailsFromRequest(req) {
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const collectedIDs = req.body.collectedIDs;
    const favoriteID = req.body.favoriteID;
    const huntStreak = req.body.huntStreak;
    const level = req.body.level;

    return {id, name, email, collectedIDs, favoriteID, huntStreak};
}

// GET request
router.route("/get_user/:id").get((req, res) => {
    User.findOne({id : req.params['id']})
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err))
});

// GET request
router.route("/get_user_by_email/:email").get((req, res) => {
    User.findOne({ email: req.params['email'] })
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err))
});

// POST request (create)
router.route('/add_user').post((req, res) => { 
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const collectedIDs = req.body.collectedIDs;
    const favoriteID = req.body.favoriteID;
    const huntStreak = req.body.huntStreak;
    const level = req.body.level;

    const newUser = new User({
        id,
        name,
        email,
        collectedIDs,
        favoriteID,
        huntStreak,
        level
    });

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json('Error: ' + err));
    return req, res;
});

// PUT request (user data)
router.route("/put/:id").put((req, res) => {
    User.findById({id: req.params.id})
        .then(user => {
            const detailsObj = getDetailsFromRequest(req); 
            user.overwrite(detailsObj); 
            user.save()
            .then(() => res.json(user))
            .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
        return req, res; 
});

module.exports = router; 