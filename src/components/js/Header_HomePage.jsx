import React from "react";
import styles from "../css/Header_HomePage.module.css";
import logo from "../../assets/images/spotify-white-icon.png";
import home from "../../assets/images/building.png";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download-circular-button.png";

function Header_HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logodiv}><img src={logo} alt="spotify logo" className={styles.spotifylogo} /></div>
        <div className={styles.headersearch}>
          <button className={styles.homebtn}>
            <div>
              <img src={home} className={styles.homeimg} />
            </div>
          </button>
          <div className={styles.searchbar}>
            <div className={styles.searchminusbrowse}><img src={search} className={styles.searchicon} />
            <input
              type="text"
              placeholder="What do you want to play?"
              className={styles.search}
            />
            </div>
            <div className={styles.divider}>
            <img src={search} className={styles.browseicon} />
            </div>
          </div>
        </div>
        <div className={styles.explorediv}>
          <button className={styles.explore}>Explore Premuim</button>
          <button className={styles.install}>
            <img src={download} className={styles.downloadicon} /> Install App
          </button>
          <button className={styles.homebtn}>
            <div>
              <img src={home} className={styles.homeimg} />
            </div>
          </button>
          <button className={styles.homebtn}>
            <div>
              <img src={home} className={styles.homeimg} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header_HomePage;
