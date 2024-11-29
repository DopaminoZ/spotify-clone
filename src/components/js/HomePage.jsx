import React, { useEffect } from "react";
import styles from "../css/HomePage.module.css";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import InstallApp from "./InstallApp";
import Playlist from "./Playlist";
import Artists from "./Artists";
import Nowplaying from "./NowPlaying";
import Player from "./Player";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [firstDivSize, setFirstDivSize] = useState(75.5);
  const [showSecondDiv, setShowSecondDiv] = useState(false);

  const handleResizeAndShow = () => {
    if (firstDivSize == 75.5) {
      setFirstDivSize(53.2);
      setShowSecondDiv(true);
    } else {
      setFirstDivSize(75.5);
      setShowSecondDiv(false);
    }
  };
  useEffect(() => {
    console.log(firstDivSize);
    console.log(showSecondDiv);
  }, [firstDivSize, showSecondDiv]);

  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav />
        <div classname={styles.mainpage}>
          <Switch>
            <Route path="/browse">
              <BrowseComponent />
            </Route>
            <Route path="/download">
              <InstallApp />
            </Route>
            <Route path="/artist">
              <Artists />
            </Route>
            <Route path="/playlist">
              <Playlist widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/">
              <MainpageComponent widthz={`${firstDivSize}vw`} />
            </Route>
          </Switch>
        </div>
        {showSecondDiv && <Nowplaying Showdiv={handleResizeAndShow} />}
      </div>

      <div id={styles.footer}>
        <Player
          var1={firstDivSize}
          vars={showSecondDiv}
          Showdiv={handleResizeAndShow}
        />
      </div>
    </div>
  );
}

export default HomePage;
