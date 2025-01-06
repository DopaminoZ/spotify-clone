const express = require("express");
const bcrypt = require("bcryptjs"); // Import bcrypt
const router = express.Router();
const axios = require("axios");
const Song = require("../models/song.js");
const Account = require("../models/account.js");
const cookiemonster = require("cookie-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");
let cachedAccessToken = null;
let tokenExpiryTime = null;
// Get all ninjas (example route)
router.get("/ninjas", function (req, res, next) {
  res.send({ type: "GET" });
});

// Create a new song
router.post("/ninjas", function (req, res, next) {
  Song.create(req.body)
    .then(function (song) {
      res.send(song);
    })
    .catch(next); // Handle errors by passing to next
});

// Update a song
router.put("/ninjas/:id", function (req, res, next) {
  Song.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Song.findOne({ _id: req.params.id }).then(function (song) {
        res.send(song);
      });
    })
    .catch(next);
});

// Delete a song
router.delete("/ninjas/:id", function (req, res, next) {
  Song.findByIdAndDelete({ _id: req.params.id })
    .then(function (song) {
      res.send(song);
    })
    .catch(next);
});
router.post("/express/check-email", async (req, res) => {
  const { email } = req.body;

  try {
    // Search for email in the database
    const existingUser = await Account.findOne({ email });

    if (existingUser) {
      // If email exists, return a response indicating it's taken
      return res.status(400).json({ error: "Email is already registered" });
    }

    // If email is not found, return success
    return res.status(200).json({ message: "Email is available" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
// POST route for user signup
router.post("/express/signup", async function (req, res, next) {
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
router.post("/express/check-password", async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await Account.findOne({ email }).select("+password");
    const passMatch = await bcrypt.compare(password, user.password);
    if (passMatch) {
      res.cookie("userEmail", email, { httpOnly: true, secure: false });
      res.status(200).json({ message: "Successfully logged in" });
    } else {
      res.status(401).json({ error: "Incorrect password" });
    }
  } catch (error) {
    next(error);
  }
});

router.get("/spotify/browse-categories", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/browse/categories?offset=0&limit=50&locale=en",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/categories", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  let categoryID = req.body.catID;
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/playlist/:playlistID", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const playlistID = req.params.playlistID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/albums/:albumID", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const albumID = req.params.albumID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${albumID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/public_playlists", async (req, res) => {
  try {
    const accessToken = await getAccessToken();

    // Search for public playlists (e.g., by a keyword like "workout")
    const searchQuery = "public"; // Replace with your desired search term
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: searchQuery,
        type: "playlist",
        limit: 17, // Number of playlists to retrieve
      },
    });

    // Return the public playlists
    res.json(response.data.playlists.items);
  } catch (error) {
    console.error("Error fetching public playlists:", error);
    res.status(500).send("Failed to fetch public playlists");
  }
});

router.get("/search", async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(
      `https://api.deezer.com/search?q=${query}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Deezer:", error);
    res.status(500).send("Error fetching songs.");
  }
});
router.get("/spotify/artist/:artistID", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const artistID = req.params.artistID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/artist/:artistID/top", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const artistID = req.params.artistID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/artist/:artistID/related-artists", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const artistID = req.params.artistID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/related-artists`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
router.get("/spotify/artist/:artistID/albums", async (req, res) => {
  const accessToken = cachedAccessToken; // Pass the access token from the client
  const artistID = req.params.artistID; // Get the playlist ID from the URL parameter
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/albums`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Spotify API Error:", errorText);
      return res.status(500).send("Failed to fetch data from Spotify.");
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error("Error fetching Spotify data:", error);
    res.status(500).send("Failed to fetch data from Spotify.");
  }
});
async function getAccessToken() {
  if (cachedAccessToken && tokenExpiryTime > Date.now()) {
    return cachedAccessToken;
  }

  const clientId = "fd064ea82b074a8393511294642b3de6"; // Replace with your client ID
  const clientSecret = "3c78ec2ac8e742358e550079c471332c"; // Replace with your client secret
  const tokenUrl = "https://accounts.spotify.com/api/token";

  const authHeader =
    "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    cachedAccessToken = data.access_token;
    tokenExpiryTime = Date.now() + data.expires_in * 1000; // Convert to milliseconds
    return cachedAccessToken;
  } catch (error) {
    console.error("Error requesting new access token:", error);
    throw error;
  }
}
// Fetch a new token immediately when the server starts
getAccessToken();

// Schedule token refresh every hour (3600 seconds)
setInterval(getAccessToken, 3600 * 1000);

// Endpoint to fetch the token
router.get("/token", async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch access token" });
  }
});
router.get("/search-spotify", async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required." });
  }

  // Replace with your Spotify API token

  try {
    const accessToken = await getAccessToken();
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: "track,artist,album,playlist", // Search for tracks, artists, albums, and playlists
        limit: 10, // Limit the number of results
      },
    });

    // Log the full Spotify API response for debugging
    console.log("Spotify API Response:", response.data);

    // Extract and format the results
    const results = [];

    // Add tracks
    if (response.data.tracks?.items) {
      response.data.tracks.items.forEach((item) => {
        if (item && item.id) {
          results.push({
            id: item.id,
            name: item.name,
            type: "track",
            artist: item.artists?.map((artist) => artist.name).join(", "),
            album: item.album?.name,
            link: item.external_urls?.spotify,
            preview: item.preview_url,
            cover: item.album?.images?.[0]?.url, // Use the first image in the album's images array
          });
        }
      });
    }

    // Add artists
    if (response.data.artists?.items) {
      response.data.artists.items.forEach((item) => {
        if (item && item.id) {
          results.push({
            id: item.id,
            name: item.name,
            type: "artist",
            link: item.external_urls?.spotify,
            cover: item.images?.[0]?.url, // Use the first image in the artist's images array
          });
        }
      });
    }

    // Add albums
    if (response.data.albums?.items) {
      response.data.albums.items.forEach((item) => {
        if (item && item.id) {
          results.push({
            id: item.id,
            name: item.name,
            type: "album",
            artist: item.artists?.map((artist) => artist.name).join(", "),
            link: item.external_urls?.spotify,
            cover: item.images?.[0]?.url, // Use the first image in the album's images array
          });
        }
      });
    }

    // Add playlists
    if (response.data.playlists?.items) {
      response.data.playlists.items.forEach((item) => {
        if (item && item.id) {
          results.push({
            id: item.id,
            name: item.name,
            type: "playlist",
            link: item.external_urls?.spotify,
            cover: item.images?.[0]?.url, // Use the first image in the playlist's images array
          });
        }
      });
    }

    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data from Spotify:",
      error.response?.data || error.message
    );
    res.status(500).json({
      error: "Error fetching search results.",
      details: error.response?.data || error.message,
    });
  }
});
router.get("/search-spotify-song", async (req, res) => {
  const query = req.query.q; // Get the search query from the request

  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required." });
  }

  try {
    // Step 1: Get the Spotify API access token
    const accessToken = await getAccessToken();

    // Step 2: Search for tracks using the Spotify API
    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query, // The search query (e.g., song name)
        type: "track", // Search for tracks
        limit: 1, // Limit the number of results
      },
    });

    // Step 3: Extract relevant track information
    const tracks = response.data.tracks.items;

    if (tracks.length === 0) {
      return res.status(404).json({ message: "No tracks found." });
    }

    const track = tracks[0]; // Get the first track from the results

    const trackInfo = {
      id: track.id, // Spotify track ID
      name: track.name, // Track name
      artists: track.artists.map((artist) => artist.name), // List of artist names
      album: track.album.name, // Album name
      duration_ms: track.duration_ms, // Track duration in milliseconds
      preview_url: track.preview_url, // URL for a 30-second preview of the track
      external_urls: track.external_urls.spotify, // URL to the track on Spotify
      images: track.album.images, // Album artwork images
    };

    // Step 4: Return the track information
    res.status(200).json(trackInfo);
  } catch (error) {
    console.error("Error searching Spotify:", error);
    res.status(500).json({ error: "Failed to search Spotify." });
  }
});
const Gemini_key = "AIzaSyDmDc4bprhF6IXWZZHG59V4w87V6iS8NJo";
const genAI = new GoogleGenerativeAI(Gemini_key);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

router.post("/recommend-songs", async (req, res) => {
  const { userIds } = req.body;

  try {
    // Fetch account data for the provided user IDs
    const accounts = await Account.find({ _id: { $in: userIds } });

    // Construct prompt for Gemini
    let prompt =
      "Act as a carpool AI song chooser. Here’s the data for the carpool group:\n";
    accounts.forEach((account, index) => {
      prompt += `- User ${index + 1}: Likes ${account.preferredGenres.join(", ")}, follows ${account.followedArtists.join(", ")}, has a playlist with ${account.playlists[0]?.songs.join(", ") || "no songs"}.\n`;
    });
    prompt += "Suggest a song or playlist that everyone might enjoy.";

    // Call Gemini API
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const recommendations = response.text();

    // Send the recommendations back to the client
    res.json({ recommendations });
  } catch (error) {
    console.error("Error generating recommendations:", error);
    res.status(500).json({ error: "Failed to generate recommendations" });
  }
});

// Read likedSongs by email
router.get("/liked-songs/:email", async (req, res) => {
  try {
    const { email } = req.params;

    // Find the user by email
    const user = await Account.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has a playlists array
    if (!user.playlists || !Array.isArray(user.playlists)) {
      return res.status(200).json({
        likedSongsPlaylist: {
          spotifyId: "liked-songs-playlist",
          songs: [],
          message: "No playlists found for this user.",
        },
      });
    }

    // Find the "Liked Songs" playlist
    const likedSongsPlaylist = user.playlists.find(
      (playlist) => playlist.spotifyId === "liked-songs-playlist"
    );

    // If the "Liked Songs" playlist doesn't exist, return a default structure
    if (!likedSongsPlaylist) {
      return res.status(200).json({
        likedSongsPlaylist: {
          spotifyId: "liked-songs-playlist",
          songs: [],
          message: "Liked Songs playlist not found.",
        },
      });
    }

    // Return the "Liked Songs" playlist
    res.status(200).json({ likedSongsPlaylist });
  } catch (error) {
    console.error("Error fetching liked songs:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/liked-songs/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { spotifyId, title, artist, duration, imageUrl } = req.body;

    // Find the account by email
    const account = await Account.findOne({ email });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Find or create the "Liked Songs" playlist
    let likedSongsPlaylist = account.playlists.find(
      (playlist) => playlist.spotifyId === "liked-songs-playlist"
    );

    if (!likedSongsPlaylist) {
      // Create the "Liked Songs" playlist if it doesn't exist
      likedSongsPlaylist = {
        spotifyId: "liked-songs-playlist", // Unique ID for the liked songs playlist
        songs: [],
        imageUrl: "https://example.com/liked-songs-image.jpg", // Default image for liked songs
      };
      account.playlists.push(likedSongsPlaylist);
    }

    // Check if the song is already in the "Liked Songs" playlist
    const isSongLiked = likedSongsPlaylist.songs.some(
      (song) => song.spotifyId === spotifyId
    );

    if (isSongLiked) {
      // Remove the song from the "Liked Songs" playlist
      likedSongsPlaylist.songs = likedSongsPlaylist.songs.filter(
        (song) => song.spotifyId !== spotifyId
      );
    } else {
      // Add the song to the "Liked Songs" playlist
      likedSongsPlaylist.songs.push({
        spotifyId,
        title,
        artist,
        duration,
        imageUrl,
      });
    }

    // Save the updated account
    await account.save();

    res
      .status(200)
      .json({ message: "Liked songs updated", likedSongs: likedSongsPlaylist });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.put("/album/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { spotifyId, title, imageUrl } = req.body;

    // Find the account by email
    const account = await Account.findOne({ email });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Check if the album is already in the "albums" array
    const isAlbumFollowed = account.albums.some(
      (album) => album.spotifyId === spotifyId
    );

    if (isAlbumFollowed) {
      // Remove the album from the "albums" array
      account.albums = account.albums.filter(
        (album) => album.spotifyId !== spotifyId
      );
    } else {
      // Add the album to the "albums" array
      account.albums.push({
        spotifyId,
        title,
        imageUrl,
      });
    }

    // Save the updated account
    await account.save();

    res.status(200).json({
      message: "Albums updated",
      albums: account.albums,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.put("/playlist/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { spotifyId, title, imageUrl } = req.body;

    // Validate required fields
    if (!spotifyId || !title || !imageUrl) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Find the account by email
    const account = await Account.findOne({ email });

    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }

    // Check if the playlist is already in the "playlists" array
    const isPlaylistFollowed = account.playlists.some(
      (playlist) => playlist.spotifyId === spotifyId
    );

    if (isPlaylistFollowed) {
      // Remove the playlist from the "playlists" array
      account.playlists = account.playlists.filter(
        (playlist) => playlist.spotifyId !== spotifyId
      );
    } else {
      // Add the playlist to the "playlists" array
      account.playlists.push({
        spotifyId,
        title,
        imageUrl,
      });
    }

    // Save the updated account
    await account.save();

    res.status(200).json({
      message: "Playlists updated",
      playlists: account.playlists,
    });
  } catch (error) {
    console.error("Error updating playlists:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});
module.exports = router;
