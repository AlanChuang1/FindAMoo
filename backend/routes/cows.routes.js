// PUT cow data

import express from 'express'
import Cow from '../models/cows.model.js'; 

const router = express.Router();

function getDetailsFromRequest(req) {
    const name = req.body.name;
    return {name};
}

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

export default router;