import passportGoogle from 'passport-google-oauth20';
const GoogleStrategy = passportGoogle.Strategy;
import User from './models/users.model.js';
import axios from "axios";

const port = 5000

export default function (passport){
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
    async (accessToken, refreshToken, profile, done) =>{
        //console.log(profile);
        const newUser = {
            name: profile.displayName,
            email: profile._json.email,
            collectedIDs: "",
            favoriteID: "",
            huntStreak: ""
        }
        try{
            //console.log("running" + profile._json.email);
            let user = await User.findOne({ email: profile._json.email});
            
            // console.log(`*******App listening at http://localhost:${port}`)
            // axios.get("/get_user/:6219894693bcacd74d426992")
            //     .then(function (response) {
            //         let stringified = JSON.stringify(response.data);
            //         let parsed = JSON.parse(stringified);
            //         console.log(response.data);
            //     })  
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            //console.log(newUser);
            if(user) {
                done(null, user); // check if exist
            }else{
                await axios.post("/users/add_user/" + {newUser})
                done(null, user)
            }
        } catch (err) {
            console.log(err);
        }
    }));
    
    passport.serializeUser((user, done) =>{
        done(null, user.id)
    });
    passport.deserializeUser((id, done) =>{
        User.findById(id, (err, user) => done(err, user))
    });
}
