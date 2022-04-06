import express from 'express';
import User from '../models/users.model.js'; 

const router = express.Router();

function getDetailsFromRequest(req) {
    const name = req.body.name;
    const email = req.body.email;
    const collectedIDs = req.body.collectedIDs;
    const favoriteID = req.body.favoriteID;
    const huntStreak = req.body.huntStreak;

    return {name, email, collectedIDs, favoriteID, huntStreak};
}

// GET request
router.route("/get_user/:id").get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json("Error: " + err))
});

// POST request (create)
router.route('/add_user').post((req, res) => { 
    const name = req.body.name;
    const email = req.body.email;
    const collectedIDs = req.body.collectedIDs;
    const favoriteID = req.body.favoriteID;
    const huntStreak = req.body.huntStreak;

    const newUser = new User({
        name,
        email,
        collectedIDs,
        favoriteID,
        huntStreak
    });

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(400).json('Error: ' + err));
    return req, res;
});

export default router;