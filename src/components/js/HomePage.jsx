import React, { useEffect } from "react";
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
  const [firstDivSize, setFirstDivSize] = useState(75.5); // Controls the size of the first div
  const [showSecondDiv, setShowSecondDiv] = useState(false); // Controls whether the second div is shown

  const handleResizeAndShow = () => {
    // Resize the first div and show the second div
    if (firstDivSize == 75.5){
      setFirstDivSize(53.2);
      setShowSecondDiv(true);
    }
    else{
    setFirstDivSize(75.5);
    setShowSecondDiv(false);
    }
  };
  useEffect(() => {
    console.log(firstDivSize);
    console.log(showSecondDiv);
  },[firstDivSize,showSecondDiv]); 


  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav />
        <Switch>
          <div classname={styles.mainpage}>
          <Route path="/browse">
            <BrowseComponent />
          </Route>
          <Route path="/">
            <MainpageComponent widthz={`${firstDivSize}vw`}/>
          </Route>
          </div>
        </Switch>
        {showSecondDiv && <Lyrics />}
      </div>

      <div id={styles.footer}>
      <button onClick={handleResizeAndShow}>show</button>
        <Player />
        
      </div>
    </div>
  );
}

export default HomePage;
