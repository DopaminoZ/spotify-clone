
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
            if (!user.tokens.accessToken || !user.tokens.refreshToken) {
                return res.redirect('/api/auth/spotify');
            }
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

router.get('/auth/spotify', (req, res) => {
    const clientId = 'fd064ea82b074a8393511294642b3de6'
    const redirectUri = 'http://localhost:4000/api/callback'
    const scope = 'user-library-read playlist-read-private playlist-read-collaborative'; // Required permissions
    const responseType = 'code'; // We want the authorization code to exchange for tokens
    
    // Spotify authorization URL
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}`;
    
    res.redirect(authUrl);
  });
  
router.get('/callback', async (req, res) => {
    const { code } = req.query; // Get the authorization code from the query params
  
    // Spotify credentials and token URL
    const clientId = process.env.CLIENT_ID;
    const clientSecret = process.env.CLIENT_SECRET;
    const redirectUri = process.env.REDIRECT_URI;
    
    // Request to exchange the authorization code for access and refresh tokens
    const tokenUrl = 'https://accounts.spotify.com/api/token';
    const tokenData = new URLSearchParams();
    tokenData.append('grant_type', 'authorization_code');
    tokenData.append('code', code);
    tokenData.append('redirect_uri', redirectUri);
    
    // Basic auth header (Base64-encoded clientId:clientSecret)
    const authHeader = 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
    
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: tokenData,
      });
      
      const data = await response.json();
      const { access_token, refresh_token } = data;
  
      // Store the tokens in your database, associated with the logged-in user's email (from session)
      const userEmail = req.session.email;
      await Account.updateOne(
        { email: userEmail },
        { $set: { 'tokens.accessToken': access_token, 'tokens.refreshToken': refresh_token } }
      );
  
      res.send('Spotify authentication successful! You can now access Spotify data.');
    } catch (error) {
      console.error('Error during Spotify token exchange:', error);
      res.status(500).send('Spotify authentication failed.');
    }
  });
  
module.exports = router;
