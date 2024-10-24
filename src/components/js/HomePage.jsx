import React from "react";
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import styles from "../css/HomePage.module.css";
function HomePage() {
  return (
    <div id={styles.mainpage}>
      <Header_HomePage />
      <div id={styles.midsection}>
      <LeftSideNav /><BrowseComponent/>
      </div>
    </div>
  );
}

export default HomePage;
