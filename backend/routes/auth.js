import express from 'express'
import passport from 'passport'

const router = express.Router()

router.get('/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));

router.get(
    "/google/callback",
    passport.authenticate("google", {
      	// successRedirect: "/auth/success",
      	failureRedirect: "failureURL",
    }),
    function (req, res, next) {
        res.redirect("http://localhost:19006/" + req.user.email + req.user.name);
    }
);



export default router