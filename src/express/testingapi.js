const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://alibagoury:alielbagoury@socialmedia.rhtgxdv.mongodb.net/?retryWrites=true&w=majority&appName=Socialmedia')
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use('/api',routes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, function() {
    console.log(`Now listening for requests on port ${PORT}!`);
});
