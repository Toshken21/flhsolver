const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());
require("dotenv").config({path: "./config.env"});
const mongoose = require('mongoose');

//URI key
const mongoURI = process.env.ATLAS_URI;
console.log(mongoURI);

// Connect to the database
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
    .then(console.log("Connected to MongoDb"))
    .catch(err => console.log(err));




// Define a schema for the data in the "accounts" collection
const accountSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true,
    unique: true,
    min: 2,
    max: 24,

},
  email: {
    type: String,
    required: true,
    unique: true,
    max: 200,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 30,}
});

//we're going to validate the json



// Define a model for the "accounts" collection using the schema
const Account = mongoose.model('Account', accountSchema);

// Example route that finds all accounts in the collection and sends them as JSON


// Start the server


const server = app.listen(4000, () => {
    console.log('Server started on port 4000');
  });

server.on("listening", () => {
    console.log("Server is listening");
});

server.on("error", () => {
    console.error("Error starting server", error.message);
});
module.exports = Account;

