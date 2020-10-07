/**
 * Third Party Packages (npm)
 * @type {e | (() => Express)}
 */
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Personal Imports
const config = require('./helpers/config');


// Controller Imports Here


/**
 * MongoDb Connection Initialization Here
 */
mongoose.connect(config.MONGOOSE_URI, config.MONGOOSE_OPTIONS)
.then(()=> {
    console.log("Connection to MONGODB Successful");
})
.catch(error => {
    console.log("Connection to MONGODB Failed");
    console.log("===============================================")
    console.log(error)
    console.log("===============================================")
})

/**
 * Express App Instantiation
 */
app = express();

/**
 *  Standard Middleware Usage Here
 */
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Route for server frontend
app.get('/', (request, response)=> {
    response.send("Backend Code Working Well");
})
// Endpoint Route Middlewares


// Custom Middlewares (404, 500, etc)


module.exports = app