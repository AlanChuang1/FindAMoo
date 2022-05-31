const serverless = require('serverless-http'); 
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 

const cors = require('cors');    
const corsOpts = {
    origin: '*',
    credentials: false,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));
require('dotenv').config();

const usersRouter = require('./routes/users.routes.js'); 
const cowsRouter = require('./routes/cows.routes.js'); 
const locationsRouter = require('./routes/locations.routes.js'); 

//routes
app.use('/users', usersRouter)
app.use('/cows', cowsRouter)
app.use('/locations', locationsRouter)

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

module.exports.server = serverless(app); 