import express from 'express';
import Cow from '../models/cows.model.js'; 

const router = express.Router();

function getDetailsFromRequest(req) {

    const S3link = req.body.S3link;
    const layersID = req.body.layersID;
    const location = req.body.location;
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

// POST request (create)
router.route('/add_cow').post((req, res) => { 
    const S3link = req.body.S3link;
    const layersID = req.body.layersID;
    const location = req.body.location;
    const collectedDate = req.body.collectedDate;
    const name = req.body.name;

    const newCow = new Cow({
        S3link,
        layersID,
        location,
        collectedDate,
        name
    });

    newCow.save()
        .then(() => res.json(newCow))
        .catch(err => res.status(400).json('Error: ' + err));
    return req, res;

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