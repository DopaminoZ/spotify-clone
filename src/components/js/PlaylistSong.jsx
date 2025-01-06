import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/PlaylistSong.module.css";

function PlaylistSong({
  song,
  wid,
  index,
  searchSong,
  setCurrentSong,
  setSongs,
  query,
  setQuery,
}) {
  console.log(song);

  // Helper function to calculate days ago
  function daysAgo(dateString) {
    if (!dateString) return "N/A"; // Handle missing date
    const givenDate = new Date(dateString);
    const currentDate = new Date();
    const differenceInMs = currentDate - givenDate;
    const differenceInDays = Math.floor(differenceInMs / (24 * 60 * 60 * 1000));
    return differenceInDays;
  }

  // Helper function to convert milliseconds to a readable time format
  function msToTime(msString) {
    const ms = parseInt(msString, 10) || 0; // Default to 0 if invalid
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");
    return hours > 0
      ? `${hours}:${formattedMinutes}:${formattedSeconds}`
      : `${minutes}:${formattedSeconds}`;
  }

  // Safely access song properties using optional chaining and ternary operators
  const songName = song?.track?.name || song?.title || "Unknown Track";
  const songArtists = Array.isArray(song?.track?.artists)
    ? song.track.artists
    : Array.isArray(song?.artist)
      ? song.artist
      : []; // Ensure songArtists is always an array
  const songAlbum = song?.track?.album || "";
  const songDuration = song?.track?.duration_ms || song?.duration || 0;
  const songImageUrl =
    song?.track?.album?.images?.[0]?.url ||
    song?.imageUrl ||
    "default_image_url";
  const addedAt = song?.added_at || "";
  const saveToDatabase = async () => {
    try {
      // Prepare the song data
      const songz = {
        spotifyId: song.track.id,
        title: song.track.name,
        artist: song.track.artists[0]?.name || "Unknown Artist",
        duration: song.track.duration_ms,
        imageUrl: song.track.album.images[0]?.url || "default_image_url",
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
  return (
    <div id={styles.container}>
      <p id={styles.hash}>{index}</p>
      <svg
        id={styles.play}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
        onClick={(e) => {
          e.stopPropagation();
          setQuery(`${songName} ${songArtists[0]?.name || ""}`);
          searchSong();
        }}
      >
        <path
          fill="#ffffff"
          d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
        />
      </svg>
      <div id={styles.titlepack}>
        <img
          src={songImageUrl}
          alt="Album Cover"
          onClick={(e) => {
            e.stopPropagation();
            setQuery(`${songName} ${songArtists[0]?.name || ""}`);
            searchSong();
          }}
        />
        <div id={styles.data}>
          <p
            id={styles.title}
            className={styles.hover}
            onClick={(e) => {
              e.stopPropagation();
              setQuery(`${songName} ${songArtists[0]?.name || ""}`);
              searchSong();
            }}
          >
            {songName}
          </p>
          <div id={styles.artist} className={styles.hover}>
            {songArtists
              .map((artist, index) => (
                <Link to={`/artist/${artist?.id || ""}`} key={index}>
                  {artist?.name || ""}
                </Link>
              ))
              .reduce(
                (prev, curr, index) => (
                  <React.Fragment key={index}>
                    {prev} &nbsp; {curr}
                  </React.Fragment>
                ),
                null
              )}{" "}
            {/* Use React.Fragment and &nbsp; for spacing */}
          </div>
        </div>
      </div>
      <p
        id={styles.album}
        style={{
          marginLeft: wid === "53.2vw" ? 170 : 366,
          maxWidth: wid == "53.2vw" ? 210 : 400,
        }}
        className={styles.hover}
      >
        <Link to={`/album/${songAlbum?.id || ""}`}>
          {songAlbum?.name || ""}
        </Link>
      </p>
      <p id={styles.date} style={{ marginLeft: wid === "53.2vw" ? -55 : 277 }}>
        {daysAgo(addedAt)} days ago
      </p>
      <div
        id={styles.durationdiv}
        style={{ marginLeft: wid === "53.2vw" ? -180 : 237 }}
      >
        <div id={styles.addbutton} onClick={saveToDatabase}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#b3b3b3"
              d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
            />
          </svg>
        </div>
        <p id={styles.duration}>{msToTime(songDuration)}</p>
        <svg
          id={styles.more}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#9a9996"
            d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
          />
        </svg>
      </div>
    </div>
  );
}

export default PlaylistSong;
