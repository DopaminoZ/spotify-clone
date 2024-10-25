import React from "react";
import styles from "../css/HomePage.module.css";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import Playlist from "./Playlist";
import Artists from "./Artists";
function HomePage() {
  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
        <LeftSideNav /><Artists />
      </div>
    </div>
  );
}

export default HomePage;
