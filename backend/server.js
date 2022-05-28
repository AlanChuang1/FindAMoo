import express from 'express';
import mongoose from 'mongoose'; 
import cors from 'cors';
import dotenv from 'dotenv'; 
import usersRouter from './routes/users.routes.js';
import cowsRouter from './routes/cows.routes.js';
// import authRouter from './routes/auth.js';
import bodyParser from 'body-parser'; 



const app = express();
const port = 5000;

dotenv.config(); //loads variables from env
app.use(cors()); //https://daveceddia.com/access-control-allow-origin-cors-errors-in-react-express/


app.use(bodyParser.json()); 

//routes
app.use('/users', usersRouter)
app.use('/cows', cowsRouter)
// app.use('/auth', authRouter)

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