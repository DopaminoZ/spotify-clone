import React from "react";
import styles from "../css/LeftSideNav.module.css";
import add from "../../assets/images/add.png";
import next from "../../assets/images/next.png";
import searchb from "../../assets/images/search.png";
import library from "../../assets/images/library.png";

import PlaylistComponent from "./PlaylistNavComponent";
function LeftSideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.toplinediv}>
        <button className={styles.librarybutton}>
          <img
            src={library}
            alt="library icon"
            className={styles.libraryimage}
          />
          Your Library
        </button>
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
        <button className={styles.playlistsbtn}>Playlists</button>
        <button className={styles.playlistsbtn}>Artists</button>
      </div>
      <div className={styles.search}>
        <button className={styles.searchbtn}>
          <img src={searchb} alt="" className={styles.icon} />
        </button>
        <button className={styles.recentsbtn}>
          Recents
          <img src={next} alt="" className={styles.icon} />
        </button>
      </div>
      <div className={styles.playlists}>
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
        <PlaylistComponent />
      </div>
    </div>
  );
}

export default LeftSideNav;
