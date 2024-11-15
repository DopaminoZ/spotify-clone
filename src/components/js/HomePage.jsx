import React from "react";
import styles from "../css/HomePage.module.css";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import Playlist from "./Playlist";
import Artists from "./Artists";
import Lyrics from "./Lyrics";
import Player from "./Player";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [firstDivSize, setFirstDivSize] = useState({ width: 200 }); // Controls the size of the first div
  const [showSecondDiv, setShowSecondDiv] = useState(false); // Controls whether the second div is shown

  const handleResizeAndShow = () => {
    // Resize the first div and show the second div
    setFirstDivSize({ width: 800 });
    setShowSecondDiv(true);
  };

  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav />
        <Switch>
          <Route path="/browse">
            <BrowseComponent />
          </Route>
          <Route path="/">
            <div classname={styles.mainpage}>
              <MainpageComponent />
            </div>
          </Route>
        </Switch>
        {showSecondDiv && <Lyrics />}
      </div>

      <div id={styles.footer}>
        <Player />
        <button onClick={handleResizeAndShow}>show</button>
      </div>
    </div>
  );
}

export default HomePage;
