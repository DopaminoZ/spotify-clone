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
  console.log(song);
  const saveToDatabase = async () => {
    try {
      // Prepare the song data
      const songz = {
        spotifyId: song.id,
        title: song.name,
        artist: song.artists[0]?.name || "Unknown Artist",
        duration: song.duration_ms,
        imageUrl: song.album.images[0]?.url || "default_image_url",
      };

      console.log("Saving song data:", songz);

      // Get the user's email from session storage
      const userEmail = sessionStorage.getItem("userEmail");
      if (!userEmail) {
        throw new Error("User email not found.");
      }

      // Send the request to the server
      const response = await fetch(
        `http://localhost:4000/api/liked-songs/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(songz),
        }
      );

      // Handle the response
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to save song: ${errorData.message || response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Song saved to database:", result);

      // Provide feedback to the user

      return result;
    } catch (error) {
      console.error("Error saving song to database:", error);
    }
  };
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
      <div
        className={styles.cont}
        style={{
          marginLeft: widthz == "53.2vw" ? 850 : 1250,
        }}
      >
        <div id={styles.addbutton} onClick={saveToDatabase}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#b3b3b3"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
        </div>
        <h1
          className={styles.time}
          style={{
            marginLeft: widthz == "53.2vw" ? 15 : 15,
          }}
        >
          {msToTime(song.duration_ms)}
        </h1>
      </div>
    </div>
  );
};

export default ArtistCard;
