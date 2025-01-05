import React from "react";
import styles from "../css/SongCard.module.css";
import photo from "../../assets/images/channels4_profile.jpg";
import play from "../../assets/images/play.png";

const SongCard = ({ album, index }) => {
  let songName = album?.name ? album?.name : "placeholder";
  let songImage = album?.images[0]?.url ? album?.images[0].url : photo;
  return (
    <div className={styles.container}>
      <img id={styles.songimage} src={songImage}></img>
      <h1 className={styles.songname}>{songName}</h1>
      <h1 className={styles.songdetail}></h1>
      <button id={styles.playbutton}>
        <img src={play} />
      </button>
    </div>
  );
};

export default SongCard;
