import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.png";
import nextsong from "../../assets/images/next_song.png";
import prevsong from "../../assets/images/prev_song.png";
import shuffle from "../../assets/images/shuffle.png";
import repeat from "../../assets/images/repeat.png";
import nowplaying from "../../assets/images/nowplaying.png";
import mic from "../../assets/images/mic.png";
import queue from "../../assets/images/queue.png";
import device from "../../assets/images/device.png";
import volume from "../../assets/images/volume-high.png";
import miniplayer from "../../assets/images/miniplayer.png";
import fullscreen from "../../assets/images/expand.png";

const Player = ({
  query,
  searchSong,
  songs,
  currentSong,
  setCurrentSong,
  setSongs,
  Showdiv,
}) => {
  const [durationstart, setDurationstart] = useState(0);
  const [durationend, setDurationend] = useState(180); // 3 minutes
  const [isPlaying, setIsPlaying] = useState(false); // Playback state
  const [lyricsstate, setlyricsstate] = useState(true);
  const [volumeLevel, setVolumeLevel] = useState(10); // Volume state (0-100), initialized to 10
  const audioRef = useRef(null); // Reference to the audio element

  // Parse time to MM:SS format
  const parseTime = (x) => {
    const minutes = Math.floor(x / 60);
    const seconds = Math.floor(x % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Toggle lyrics state
  const handleLyrics = () => {
    setlyricsstate(!lyricsstate);
  };
  const addToLibrary = async () => {
    const songName = currentSong.title; // Get the song name from the current song
    try {
      // Fetch song metadata from the /search-spotify endpoint
      const response = await fetch(
        `http://localhost:4000/api/search-spotify-song?q=${encodeURIComponent(songName)}`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch song metadata: ${response.statusText}`
        );
      }

      const songMetadata = await response.json(); // Parse the JSON response
      console.log("Song Metadata:", songMetadata); // Log the metadata for debugging

      return songMetadata; // Return the song metadata
    } catch (error) {
      console.error("Error fetching song metadata:", error);
      throw error; // Re-throw the error for handling in the calling function
    }
  };
  const saveToDatabase = async () => {
    try {
      // Step 1: Fetch the song metadata
      const songData = await addToLibrary();

      // Extract the required fields for songSchema
      const song = {
        spotifyId: songData.id, // Assuming songData.id is the Spotify ID
        title: songData.name, // Assuming songData.title is the song title
        artist: songData.artists[0], // Assuming songData.artist is the artist name
        duration: songData.duration_ms, // Assuming songData.duration is the song duration in milliseconds
        imageUrl: songData.images[0].url, // Assuming songData.imageUrl is the URL of the song's image
      };

      // Step 2: Get the user's email (replace with your logic to get the email)
      const userEmail = sessionStorage.getItem("userEmail"); // Example: Get email from session storage

      if (!userEmail) {
        throw new Error("User email not found.");
      }

      // Step 3: Call the /liked-songs/:email endpoint to save the song
      const response = await fetch(
        `http://localhost:4000/api/liked-songs/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(song), // Send the song data in the request body
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to save song: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Song saved to database:", result);

      return result;
    } catch (error) {
      console.error("Error saving song to database:", error);
      throw error;
    }
  };
  // Play or Pause the current song
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Handle playback position change
  const handleSeek = (e) => {
    const time = Number(e.target.value);
    setDurationstart(time);
    if (audioRef.current) audioRef.current.currentTime = time;
  };

  // Update duration when the song is loaded
  const onAudioLoadedMetadata = () => {
    if (audioRef.current) {
      setDurationend(audioRef.current.duration);
    }
  };

  // Update current time while playing
  const onTimeUpdate = () => {
    if (audioRef.current) {
      setDurationstart(audioRef.current.currentTime);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const volumeValue = Number(e.target.value);
    setVolumeLevel(volumeValue); // Update volume state
    if (audioRef.current) {
      audioRef.current.volume = volumeValue / 100; // Set audio volume (0-1)
    }
  };

  // Set initial volume when the audio element is ready
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volumeLevel / 100; // Set initial volume to 10%
    }
  }, [audioRef.current]); // Run when audioRef.current changes

  // Reset audio when currentSong changes
  useEffect(() => {
    console.log(currentSong + "fsagasgasg");
    if (audioRef.current && currentSong?.preview) {
      console.log("Loading new song:", currentSong.title);
      audioRef.current.pause();
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    } else {
      console.log("No valid song to load.");
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = ""; // Clear the audio source
      }
    }
  }, [currentSong]);

  return (
    <div>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <img
            src={currentSong?.album?.cover || "default_cover.png"}
            alt="Cover"
            className={styles.coverphoto}
          />
          <div className={styles.names}>
            <p id={styles.trackname}>{currentSong?.title || "Select a song"}</p>
            <p className={styles.artistname}>
              {currentSong?.artist?.name || "Unknown Artist"}
            </p>
          </div>

          <button className={styles.addbtn} onClick={saveToDatabase}>
            <img src={add} alt="Add to liked" className={styles.addbtnphoto} />
          </button>
        </div>

        {/* Middle Section */}
        <div className={styles.middle}>
          <div className={styles.controls}>
            <button className={styles.shufflebtn}>
              <img src={shuffle} alt="Shuffle" className={styles.shuffleimg} />
            </button>
            <button className={styles.prev}>
              <img src={prevsong} alt="Previous" className={styles.previmg} />
            </button>
            <button className={styles.pause} onClick={handlePlayPause}>
              <img
                src={isPlaying ? pause : play} // Toggle between play and pause images
                alt={isPlaying ? "Pause" : "Play"}
                className={styles.playbutton}
              />
            </button>
            <button className={styles.next}>
              <img src={nextsong} alt="Next" className={styles.nextimg} />
            </button>
            <button className={styles.repeat}>
              <img src={repeat} alt="Repeat" className={styles.repeatimg} />
            </button>
          </div>
          <div className={styles.playbackbar}>
            <span className={styles.currenttime}>
              {parseTime(durationstart)}
            </span>
            <input
              type="range"
              min="0"
              max={durationend}
              value={durationstart}
              step="1"
              aria-label="Playback Progress"
              className={styles.progbar}
              onChange={handleSeek}
            />
            <span className={styles.totaltime}>{parseTime(durationend)}</span>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <button className={styles.nowplaying} onClick={Showdiv}>
            <img
              src={nowplaying}
              alt="Now Playing"
              className={styles.nowplayingimg}
            />
          </button>
          <Link to={lyricsstate ? "/lyrics" : "/"}>
            <button className={styles.lyrics} onClick={handleLyrics}>
              <img src={mic} alt="Lyrics" className={styles.micimg} />
            </button>
          </Link>
          <button className={styles.queue}>
            <img src={queue} alt="Queue" className={styles.queueimg} />
          </button>
          <button className={styles.connect}>
            <img src={device} alt="Connect" className={styles.deviceimg} />
          </button>
          <div>
            <button className={styles.mute}>
              <img src={volume} alt="Volume" className={styles.volumeimg} />
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volumeLevel} // Bind to volume state
              aria-label="Volume Control"
              className={styles.volume}
              step="1"
              onChange={handleVolumeChange} // Handle volume change
            />
          </div>
          <button className={styles.miniplayer}>
            <img
              src={miniplayer}
              alt="Mini Player"
              className={styles.miniplayerimg}
            />
          </button>
          <button className={styles.fullscreen}>
            <img
              src={fullscreen}
              alt="Full Screen"
              className={styles.fullscreenimg}
            />
          </button>
        </div>
      </div>

      {/* Audio Playback */}
      {currentSong?.preview && (
        <audio
          ref={audioRef}
          src={currentSong.preview}
          onLoadedMetadata={onAudioLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          onEnded={() => setIsPlaying(false)} // Stop playback when the song ends
        />
      )}
    </div>
  );
};

export default Player;
