// create PUT user data

import express from 'express'
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