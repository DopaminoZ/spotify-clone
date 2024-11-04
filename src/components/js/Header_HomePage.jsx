import React from "react";
import styles from "../css/Header_HomePage.module.css";
import logo from "../../assets/images/spotify-white-icon.png";
import home from "../../assets/images/building.png";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download-circular-button.png";
import {Link} from 'react-router-dom'

function Header_HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logodiv}><a href="_self"><img src={logo} alt="spotify logo" className={styles.spotifylogo} /></a></div>
        <div className={styles.headersearch}>
          <button className={styles.homebtn}>
            <div>
            <Link to="/ ">
              <img src={home} className={styles.homeimg} />
              </Link>
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
            <Link to="/browse">
            <img src={search} className={styles.browseicon} />
            </Link>
            </div>
          </div>
        </div>
        <div className={styles.explorediv}>
          <button className={styles.explore}>Explore Premuim</button>
          <button className={styles.install}>
            <img src={download} className={styles.downloadicon} /> Install App
          </button>
          <div className={styles.notifications}>
          <img src={home} className={styles.notificationsimg} />
          </div>
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
