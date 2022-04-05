require('express');
require('mongoose'); 
require('dotenv'); 
require('./routes/users.route.js');
require('body-parser'); 

const app = express();
const port = 5000;

dotenv.config(); //loads variables from env
app.use(bodyParser.json());
app.use('/users', usersRouter);


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