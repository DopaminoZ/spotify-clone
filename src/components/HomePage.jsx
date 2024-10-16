import React from "react";
import styles from "./HomePage.module.css";
import logo from "../images/spotify-white-icon.png";
import home from "../images/building.png";
import search from "../images/search.png";
import download from "../images/download-circular-button.png";

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
