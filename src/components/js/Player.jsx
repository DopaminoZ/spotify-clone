import { useState } from "react";
import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";
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

const Player = ({ Showdiv }) => {
  const [durationstart, setDurationstart] = useState(0);
  const [durationend, setDurationend] = useState(180); //3mins
  function parseTime(x) {
    let minutes = Math.floor(x / 60);
    let seconds = x - minutes * 60;
    if (minutes < 10 && seconds < 10) {
      return `0${minutes}:0${seconds}`;
    } else if (minutes < 10) {
      return `0${minutes}:${seconds}`;
    } else if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    } else {
      return `${minutes}:${seconds}`;
    }
  }
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src={cover} alt="Cover Photo" className={styles.coverphoto} />
          <div className={styles.names}>
            <p id={styles.trackname}>Cure for me</p>
            <p>AURORA</p>
          </div>
          <button className={styles.addbtn}>
            <img src={add} alt="add to liked" className={styles.addbtnphoto} />
          </button>
        </div>
        <div className={styles.middle}>
          <div className={styles.controls}>
            <button className={styles.shufflebtn}>
              <img src={shuffle} alt="" className={styles.shuffleimg} />
            </button>
            <button className={styles.prev}>
              <img src={prevsong} alt="" className={styles.previmg} />
            </button>
            <button className={styles.pause}>
              <img src={play} alt="" className={styles.playbutton} />
            </button>
            <button className={styles.next}>
              <img src={nextsong} alt="" className={styles.nextimg} />
            </button>
            <button className={styles.repeat}>
              <img src={repeat} alt="" className={styles.repeatimg} />
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
              aria-label="range"
              className={styles.progbar}
              step="1"
              value={durationstart}
              onChange={(e) => setDurationstart(e.target.value)}
            />
            <span className={styles.totaltime}>{parseTime(durationend)}</span>
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.nowplaying} onClick={() => Showdiv()}>
            <img src={nowplaying} alt="" className={styles.nowplayingimg} />
          </button>
          <button className={styles.lyrics}>
            <img src={mic} alt="" className={styles.micimg} />
          </button>
          <button className={styles.queue}>
            <img src={queue} alt="" className={styles.queueimg} />
          </button>
          <button className={styles.connect}>
            <img src={device} alt="" className={styles.deviceimg} />
          </button>
          <div>
            <button className={styles.mute}>
              <img src={volume} alt="" className={styles.volumeimg} />
            </button>
            <input
              type="range"
              min="0"
              max="100"
              aria-label="range"
              className={styles.volume}
              step="1"
            />
          </div>
          <button className={styles.miniplayer}>
            <img src={miniplayer} alt="" className={styles.miniplayerimg} />
          </button>
          <button className={styles.fullscreen}>
            <img src={fullscreen} alt="" className={styles.fullscreenimg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
