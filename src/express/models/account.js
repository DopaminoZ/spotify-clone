const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { v4: uuidv4 } = require("uuid");

const songSchema = new mongoose.Schema({
  spotifyId: String,
  title: String,
  artist: String,
  duration: Number,
  imageUrl: String,
});

const playlistSchema = new mongoose.Schema({
  spotifyId: String,
  songs: [songSchema],
  imageUrl: String,
});

const albumSchema = new mongoose.Schema({
  spotifyId: String,
  imageUrl: String,
});

const AccountSchema = new Schema({
  spotifyId: { type: String, unique: true, default: uuidv4 },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  newsletter: { type: Boolean, default: false },
  sharedata: { type: Boolean, default: false },
  country: { type: String },
  coordinates: {
    lat: { type: Number },
    lon: { type: Number },
  },
  profilePicture: { type: String },
  playlists: [playlistSchema],
  albums: [albumSchema],
  recentlyPlayed: [songSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Account = mongoose.model("spotifyAccountData", AccountSchema);

module.exports = Account;
