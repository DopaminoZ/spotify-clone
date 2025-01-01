const express = require('express');
const bcrypt = require('bcryptjs');  // Import bcrypt
const router = express.Router();
const Song = require('../models/song.js');
const Account = require('../models/account.js');
const cookiemonster = require('cookie-parser')

// Get all ninjas (example route)
router.get('/ninjas', function(req, res, next) {
    res.send({type: 'GET'});
});

// Create a new song
router.post('/ninjas', function(req, res, next) {
    Song.create(req.body).then(function(song) {
        res.send(song);
    }).catch(next);  // Handle errors by passing to next
});

// Update a song
router.put('/ninjas/:id', function(req, res, next) {
    Song.findByIdAndUpdate({_id: req.params.id}, req.body).then(function() {
        Song.findOne({_id: req.params.id}).then(function(song) {
            res.send(song);
        });
    }).catch(next);
});

// Delete a song
router.delete('/ninjas/:id', function(req, res, next) {
    Song.findByIdAndDelete({_id: req.params.id}).then(function(song) {
        res.send(song);
    }).catch(next);
});
router.post('/express/check-email', async (req, res) => {
    const { email } = req.body;
    
    try {
      // Search for email in the database
      const existingUser = await Account.findOne({ email });
      
      if (existingUser) {
        // If email exists, return a response indicating it's taken
        return res.status(400).json({ error: 'Email is already registered' });
      }
      
      // If email is not found, return success
      return res.status(200).json({ message: 'Email is available' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
// POST route for user signup
router.post('/express/signup', async function (req, res, next) {
    try {
        // Hash the password asynchronously
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the salt rounds

        // Replace the plain password with the hashed one
        req.body.password = hashedPassword;

        // Create a new account in the database
        const account = await Account.create(req.body);

        // Send the account details in the response
        res.status(201).send(account);
    } catch (error) {
        // Pass the error to the next middleware (usually an error handler)
        next(error);
    }
});
router.post('/express/check-password', async function(req,res,next){
    try{
        const {email,password} = req.body
        const user = await Account.findOne({email}).select('+password')
        const passMatch = await bcrypt.compare(password, user.password)
        if(passMatch){
            res.cookie('userEmail', email, { httpOnly: true, secure: false })
            res.status(200).json({message: "Successfully logged in"})
        }
        else{
            res.status(401).json({error: "Incorrect password"})
        }
    }
    catch(error){
        next(error);
    }
})

module.exports = router;
