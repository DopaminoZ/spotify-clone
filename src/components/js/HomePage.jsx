import React, { useEffect } from "react";
import styles from "../css/HomePage.module.css";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import InstallApp from "./InstallApp";
import Playlist from "./Playlist";
import Artists from "./Artists";
import Premium from "./ExplorePremium";
import Nowplaying from "./NowPlaying";
import Lyrics from "./Lyrics";
import Player from "./Player";
import Profile from './profile';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { useState } from "react";
let lyrics = new Array(
  "All the lights in Miami begin to gleam",
  "Ruby,blue, and green, neon too",
  "Everything looks better from above ,my king"
);
const currentSignedInUser = sessionStorage.getItem('userEmail');

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
    console.log(currentSignedInUser)
  }, [firstDivSize, showSecondDiv]);

  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav />
        <div classname={styles.mainpage}>
          <Switch>
            <Route path="/browse">
              <BrowseComponent widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/download">
              <InstallApp widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/artist">
              <Artists widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/playlist">
              <Playlist widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/explorepremium">
              <Premium widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/profile">
              <Profile widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/lyrics">
              <Lyrics widthz={`${firstDivSize}vw`} lyricss={lyrics} />
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
