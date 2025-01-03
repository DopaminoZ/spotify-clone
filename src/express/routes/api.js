
const express = require('express');
const bcrypt = require('bcryptjs');  // Import bcrypt
const router = express.Router();
const Song = require('../models/song.js');
const Account = require('../models/account.js');
const cookiemonster = require('cookie-parser')
let cachedAccessToken = null;
let tokenExpiryTime = null;
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
  
  router.get('/spotify/browse-categories', async (req, res) => {
    const accessToken = cachedAccessToken; // Pass the access token from the client
  
    try {
      const response = await fetch('https://api.spotify.com/v1/browse/categories?offset=0&limit=50&locale=en', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Spotify API Error:', errorText);
        return res.status(500).send('Failed to fetch data from Spotify.');
      }
  
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      res.status(500).send('Failed to fetch data from Spotify.');
    }
  });
  router.post('/spotify/categories', async (req, res) => {
    const accessToken = cachedAccessToken; // Pass the access token from the client
    let categoryID = req.body.catID
    try {
      const response = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryID}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Spotify API Error:', errorText);
        return res.status(500).send('Failed to fetch data from Spotify.');
      }
  
      const data = await response.json();
      res.send(data);
    } catch (error) {
      console.error('Error fetching Spotify data:', error);
      res.status(500).send('Failed to fetch data from Spotify.');
    }
  });

async function getAccessToken() {
  if (cachedAccessToken && tokenExpiryTime > Date.now()) {
    return cachedAccessToken;
  }

  const clientId = 'fd064ea82b074a8393511294642b3de6'; // Replace with your client ID
  const clientSecret = '3c78ec2ac8e742358e550079c471332c'; // Replace with your client secret
  const tokenUrl = 'https://accounts.spotify.com/api/token';

  const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });

    const data = await response.json();
    cachedAccessToken = data.access_token;
    tokenExpiryTime = Date.now() + data.expires_in * 1000; // Convert to milliseconds
    return cachedAccessToken;
  } catch (error) {
    console.error('Error requesting new access token:', error);
    throw error;
  }
}
// Fetch a new token immediately when the server starts
getAccessToken();

// Schedule token refresh every hour (3600 seconds)
setInterval(getAccessToken, 3600 * 1000);

// Endpoint to fetch the token
router.get('/token', async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch access token' });
  }
});
module.exports = router;
