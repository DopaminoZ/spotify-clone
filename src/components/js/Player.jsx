import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/lana.jpeg";
import play from "../../assets/images/play.png";
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
import axios from "axios";

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
  const [durationend, setDurationend] = useState(180); //3mins
  const [searchTerm, setSearchTerm] = useState("");

  const [isPlaying, setIsPlaying] = useState(false); // Playback state
  const [lyricsstate, setlyricsstate] = useState(true);
  const audioRef = useRef(null); // Reference to the audio element

  const parseTime = (x) => {
    const minutes = Math.floor(x / 60);
    const seconds = x % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  // Toggle lyrics state
  const handleLyrics = () => {
    setlyricsstate(!lyricsstate);
  };

  // Play or Pause the current song
  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Handle song selection
  const handleSongSelect = (song) => {
    setCurrentSong(song);
    setIsPlaying(false); // Reset play state
    if (audioRef.current) {
      audioRef.current.load(); // Reload the audio element
    }
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

  useEffect(() => {
    searchSong();
  }, [searchTerm]);

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
          <button className={styles.addbtn}>
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
              <img src={play} alt="Play" className={styles.playbutton} />
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
              aria-label="Volume Control"
              className={styles.volume}
              step="1"
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
        />
      )}
    </div>
  );
};

export default Player;
