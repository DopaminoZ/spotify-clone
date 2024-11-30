import React from "react";
import styles from "../css/Header_HomePage.module.css";
import logo from "../../assets/images/spotify-white-icon.png";
import home from "../../assets/images/building.png";
import homeactive from "../../assets/images/home-active.png";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download-circular-button.png";
import browse from "../../assets/images/browse-unactive.png";
import browseactive from "../../assets/images/browse-active.png";
import {Link,Route, Switch} from 'react-router-dom'

function Header_HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
        <div className={styles.logodiv}><img src={logo} alt="spotify logo" className={styles.spotifylogo} /></div>
        </Link>
        <div className={styles.headersearch}>
          
              <Switch>
                <Route exact path="/">
                  <button className={styles.homebtn}>
                  <div>
                        <img src={homeactive} className={styles.homeimg} />
                  </div>
                </button>
                </Route>
                <Route path="/">
                <Link to="/">
                <button className={styles.homebtn}>
                  <div>
                <img src={home} className={styles.homeimg} />
                  </div>
                </button>     
                </Link>
                </Route>
                </Switch>
          <div className={styles.searchbar}>
            <div className={styles.searchminusbrowse}><img src={search} className={styles.searchicon} />
            <input
              type="text"
              placeholder="What do you want to play?"
              className={styles.search}
            />
            </div>
            <div className={styles.divider}>
            <Switch>
                <Route path="/browse">
                  <img src={browseactive} className={styles.browseicon} />
                </Route>
                <Route path="/">
                <Link to="/browse">
                  <img src={browse} className={styles.browseicon} />
                </Link>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* El kalam da s7 bs hn5ly el default en el user guest mesh logged in */}
        <div className={styles.explorediv} id={styles.usermode}>
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
        <div className={styles.explorediv} id={styles.guestmode}>
          <Link to="/signup">
          <button className={styles.signup}>Sign up</button>
          </Link>
          <Link to="/login">
          <button className={styles.login}>Log in</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header_HomePage;
