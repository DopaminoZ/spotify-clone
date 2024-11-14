import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";
const Player = () => {
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
            <span className={styles.currenttime}>00:00</span>
            <input
              type="range"
              min="0"
              max="100"
              aria-label="range"
              className={styles.progbar}
              step="1"
            />
            <span className={styles.totaltime}>3:33</span>
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
