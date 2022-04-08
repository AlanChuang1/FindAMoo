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
      	console.log("second redirect", req.user);
      	//res.redirect("http://localhost:19006/");
        res.redirect("http://localhost:19006/" + req.user);
    }
);



export default router