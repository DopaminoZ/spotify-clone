import React from "react";
import styles from "../css/HomePage.module.css";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import Playlist from "./Playlist";
import Artists from "./Artists";
import Player from "./Player"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function HomePage() {
  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav />
        <Switch>
          <Route exact path="/">
            <MainpageComponent />
          </Route>
          <Route path="/browse">
            <BrowseComponent />
          </Route>
        </Switch>
        
      </div>
      <Player/>
    </div>
  );
}

export default HomePage;
