import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import usersRouter from './routes/users.routes.js';
import authRouter from './routes/auth.js';
import bodyParser from 'body-parser'; 
import passport from 'passport';
import session from 'express-session';
import passportConfig from './passport.js';
import connectMongo from 'connect-mongo'; 

import { ensureAuth } from './middleware/auth.js';


const app = express();
const port = 5000;
const MongoStore = connectMongo(session);

dotenv.config(); //loads variables from env
app.use(cors()); //https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/

passportConfig(passport);

app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false, //dont create session until stored
        store: new MongoStore({
            mongooseConnection : mongoose.connection 
        })
    })
);

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json());

// app.use(cookiesSession ({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: ["keyboard cat"]
// }))

//routes
app.use('/users', ensureAuth, usersRouter)
app.use('/auth', authRouter)


// Setting up port and server 
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

const uri = process.env.ATLAS_URI; //load mongodb uri

//connect to mongodb
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully.");
});

export default port;