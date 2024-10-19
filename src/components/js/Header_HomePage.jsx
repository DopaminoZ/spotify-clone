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
        <img src={logo} alt="spotify logo" className={styles.spotifylogo} />
        <div className={styles.headersearch}>
          <button className={styles.homebtn}>
            <div>
              <img src={home} className={styles.homeimg} />
            </div>
          </button>
          <div className={styles.searchbar}>
            <img src={search} className={styles.searchicon} />
            <input
              type="text"
              placeholder="What do you want to play?"
              className={styles.search}
            />
            <img src={search} className={styles.browseicon} />
          </div>
        </div>
        <div className={styles.explore}>
          <button>Explore Premuim</button>
          <button>
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