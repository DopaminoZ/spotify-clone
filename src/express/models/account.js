const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({

    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: {type:Date, required:true},
    gender: {type: String, required:true},
    newsletter: {type:Boolean, default: false},
    sharedata: {type:Boolean, default: false},
    country: { type: String }, 
    coordinates: {
      lat: { type: Number },
      lon: { type: Number }
    }
})
const Account = mongoose.model('spotifyAccountData', AccountSchema);

module.exports = Account;