import React from "react";
import styles from "../css/HomePage.module.css";
import logo from "../../assets/images/spotify-white-icon.png";
import home from "../../assets/images/building.png";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download-circular-button.png";

function HomePage() {
  return (
    <div className="container">
      <div className={styles.header}>
        <img src={logo} alt="spotify logo" className={styles.spotifylogo} />
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
        <button>Explore Premuim</button>
        <button>
          <img src={download} className={styles.downloadicon}/> Install App
        </button>
        <button className={styles.homebtn}>
          <div>
            <img src={home} className={styles.homeimg} />
          </div>
        </button><button className={styles.homebtn}>
          <div>
            <img src={home} className={styles.homeimg} />
          </div>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
