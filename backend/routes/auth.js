import express from 'express'
import passport from 'passport'
const router = express.Router()



router.get('/auth/google',
  passport.authenticate('google', { scope:
      [ 'email', 'profile' ] }
));
router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      // successRedirect: "/auth/success",
      failureRedirect: "failureURL",
    }),
    function (req, res, next) {
      console.log("second redirect", req.user);
      res.redirect("http:localhost:19006/");
    }
);


export default router