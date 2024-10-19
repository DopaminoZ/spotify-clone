import React from "react";
import styles from "../css/LeftSideNav.module.css";
import add from "../../assets/images/add.png";
import next from "../../assets/images/next.png";
import searchb from "../../assets/images/search.png";
function LeftSideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.toplinediv}>
        <button>Your Library</button>
        <div className={styles.plusnextbtns}>
          <button className={styles.add}>
            <img src={add} alt="" className={styles.icon} />
          </button>
          <button className={styles.next}>
            <img src={next} alt="" className={styles.icon} />
          </button>
        </div>
      </div>
      <div className={styles.btns2ndrow}>
        <button>Playlists</button>
        <button>Artists</button>
      </div>
      <div className={styles.search}>
        <button className={styles}>
          <img src={searchb} alt="" className={styles.icon} />
        </button>
        <button className={styles.recentsbtn}>
          Recents
          <img src={next} alt="" className={styles.icon} />
        </button>
        <div></div>
      </div>
    </div>
  );
}

export default LeftSideNav;
