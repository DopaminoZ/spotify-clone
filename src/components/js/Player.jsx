import styles from "../css/Player.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";
const Player = () => {
  return (
    <div><div className={styles.container}>
      <div className={styles.left}>
        <img src={cover} alt="Cover Photo" className={styles.coverphoto} />
        <div className={styles.names}>
          <p>Cure for me</p>
          <p>AURORA</p>
        </div>
        <button className={styles.addbtn}>
          <img src={add} alt="add to liked" className={styles.addbtnphoto} />
        </button>
      </div>
      <div className={styles.middle}>
        <div className={styles.controls}>
          <button className={styles.shuffle}><img src="" alt="" /></button>
          <button className={styles.prev}><img src="" alt="" /></button>
          <button className={styles.pause}><img src="" alt="" /></button>
          <button className={styles.next}><img src="" alt="" /></button>
          <button className={styles.repeat}><img src="" alt="" /></button>
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
      <div className={styles.right}></div>
    </div>
    </div>
  );
};

export default Player;
