import React, { useState, useEffect } from "react";
import styles from "../css/MainpageCard.module.css";
import testimg from "../../assets/images/likedsongs.png";
function MainpageCard({ card, width }) {
  const [currentWidth, setCurrentWidth] = useState(350);
  const [currentHeight, setCurrentHeight] = useState(65);
  const [currentimgWidth, setCurrentimgWidth] = useState(65);
  const checkimgWidth = () => {
    if (width == "53.2vw") {
      setCurrentimgWidth(44);
    } else {
      setCurrentimgWidth(65);
    }
  };
  const checkWidth = () => {
    if (width == "53.2vw") {
      setCurrentWidth(244);
    } else {
      setCurrentWidth(350);
    }
  };
  const checkHeight = () => {
    if (width == "53.2vw") {
      setCurrentHeight(49);
    } else {
      setCurrentHeight(65);
    }
  };
  useEffect(() => {
    checkWidth();
    checkHeight();
    checkimgWidth();
    console.log(width);
  }, [width]);
  return (
    <div
      id={styles.container}
      style={{ width: `${currentWidth}px`, height: `${currentHeight}px` }}
    >
      <img
        id={styles.image}
        style={{ width: `${currentimgWidth}px` }}
        src={card.imageUrl}
      ></img>
      <div id={styles.titlediv}>
        <h1 id={styles.title}>{card.title}</h1>
      </div>
    </div>
  );
}

export default MainpageCard;
