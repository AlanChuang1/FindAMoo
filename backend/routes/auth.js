import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'; 
import jwt from "jsonwebtoken";

const router = express.Router()

// Calls google auth api for logining into google account
router.get('/google',
    passport.authenticate('google', { scope:
        [ 'email', 'profile' ] }
    )
);

// Callback for google auth
router.get('/google/callback',
    passport.authenticate('google', {
      	// successRedirect: "/auth/success",
      	failureRedirect: "failureURL",
    }),
    function (req, res, next) {

        // TODO: can't figure out to to send info back to frontend
        // noticed people solved this by adding to redirect (link + req.user), but does not seem "safe"
        
        // // console.log(req.session);
        // localStorage.setItem("name", "Doe");
        console.log("Current session: ");
		console.log(req.session);
        
        res.redirect("http://localhost:19006/" + req.user);
		
    }
);

// Removes req.user and clears login session
router.get('/logout', (req, res) => {
    req.logout()
});

// Testing what is current session
router.get('/status', (req, res) => {
    console.log(req.session);
});

// 
router.get('/user', (req, res) => {
    res.json(req.user);
});

export default router


