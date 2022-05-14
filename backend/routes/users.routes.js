import express from 'express';
import User from '../models/users.model.js'; 

const router = express.Router();

function getDetailsFromRequest(req) {
    const name = req.body.name;
    const email = req.body.email;
    const collectedIDs = req.body.collectedIDs;
    const favoriteID = req.body.favoriteID;
    const huntStreak = req.body.huntStreak;
    const level = req.body.level;

    return {name, email, collectedIDs, favoriteID, huntStreak, level};
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
    const level = req.body.level;

    const newUser = new User({
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
    User.findById(req.params.id)
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

export default router;