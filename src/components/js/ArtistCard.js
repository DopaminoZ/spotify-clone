import React from "react";
import styles from "../css/ArtistCard.module.css";
import photo from "../../assets/images/channels4_profile.jpg";
import play from "../../assets/images/play.png";
const ArtistCard = ({
  index,
  widthz,
  song,
  searchSong,
  setCurrentSong,
  setSongs,
  query,
  setQuery,
}) => {
  function msToTime(msString) {
    const ms = parseInt(msString, 10); // Parse the string into an integer

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    // Format minutes and seconds as two digits (e.g., 01, 09)
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    // Return h:m:s or m:s based on the duration
    if (hours > 0) {
      return `${hours}:${formattedMinutes}:${formattedSeconds}`;
    } else {
      return `${minutes}:${formattedSeconds}`;
    }
  }
  return (
    <div
      className={styles.container}
      onClick={(e) => {
        e.stopPropagation(); // Prevents the event from propagating
        setQuery(song.name + " " + song.artists[0].name);
        searchSong();
      }}
    >
      <img src={play} className={styles.play} />
      <h1 className={styles.num}>{index}</h1>
      <img src={song.album.images[0].url} id={styles.pic}></img>
      <h1 className={styles.name}>{song.name}</h1>
      <h1 className={styles.lnum}></h1>
      <h1
        className={styles.time}
        style={{
          marginLeft: widthz == "53.2vw" ? 900 : 1300,
        }}
      >
        {msToTime(song.duration_ms)}
      </h1>
    </div>
  );
};

export default ArtistCard;
