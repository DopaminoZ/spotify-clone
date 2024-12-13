const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors'); 
const app = express();

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specific methods
    credentials: true, // Allow cookies if needed
  }));
  
mongoose.connect('mongodb+srv://alibagoury:alielbagoury@socialmedia.rhtgxdv.mongodb.net/?retryWrites=true&w=majority&appName=Socialmedia')
mongoose.Promise = global.Promise;
  
app.use(bodyParser.json())
app.use('/api',routes)

app.use(function(err,req,res,next){
    res.status(422).send({"error": err.message})
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log(`Now listening for requests on port ${PORT}!`);
});
