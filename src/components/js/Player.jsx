import {useState} from "react"
import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";
const Player = () => {
  const [durationstart,setDurationstart] = useState(0)
  const [durationend,setDurationend] = useState(180) //3mins
  function parseTime(x){
    let minutes = Math.floor(x / 60);
    let seconds = x - minutes * 60;
    if(minutes < 10 && seconds < 10){
      return `0${minutes}:0${seconds}`
    }
    else if (minutes < 10){
      return `0${minutes}:${seconds}`
    }
    else if (seconds < 10){
      return `${minutes}:0${seconds}`
    }
    else{
      return `${minutes}:${seconds}`
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
            <button className={styles.shuffle}>
              <img src="" alt="" />
            </button>
            <button className={styles.prev}>
              <img src="" alt="" />
            </button>
            <button className={styles.pause}>
              <img src="" alt="" />
            </button>
            <button className={styles.next}>
              <img src="" alt="" />
            </button>
            <button className={styles.repeat}>
              <img src="" alt="" />
            </button>
          </div>
          <div className={styles.playbackbar}>
            <span className={styles.currenttime}>{parseTime(durationstart)}</span>
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
          <button className={styles.nowplaying}></button>
          <button className={styles.lyrics}></button>
          <button className={styles.queue}></button>
          <button className={styles.connect}></button>
          <div>
            <button className={styles.mute}></button>
            <input
              type="range"
              min="0"
              max="100"
              aria-label="range"
              className={styles.volume}
              step="1"
            />
          </div>
          <button className={styles.miniplayer}></button>
          <button className={styles.fullscreen}></button>
        </div>
      </div>
    </div>
  );
};

export default Player;
