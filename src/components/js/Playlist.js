import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Playlist.module.css";
import containerstyle from "../css/BrowseComponent.module.css";
import playbutton from "../../assets/images/play.png";
import clock from "../../assets/images/clock.png";
import PlaylistSong from "./PlaylistSong";
import FooterContent from "./FooterContent";
import useFetch from "./useFetch.js";
import likedsongsimg from "../../assets/images/likedsongs.png";

function Playlist({
  widthz,
  searchSong,
  setCurrentSong,
  setSongs,
  query,
  setQuery,
}) {
  const { playlistID } = useParams(); // Extract the playlist ID from the URL
  const { error, data, isPending } = useFetch(
    `http://localhost:4000/api/spotify/playlist/${playlistID}`
  );
  const [liked, setLiked] = useState(null); // State for liked songs
  const [duration, setDuration] = useState(0); // Initialize duration state
  const currenturl = window.location.href; // Get the current URL
  console.log(data);
  const fetchLikedSongs = async () => {
    try {
      // Step 1: Get the user's email from sessionStorage
      const userEmail = sessionStorage.getItem("userEmail");

      if (!userEmail) {
        throw new Error("User email not found in session storage.");
      }

      // Step 2: Call the /liked-songs/:email endpoint
      const response = await fetch(
        `http://localhost:4000/api/liked-songs/${userEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Step 3: Check if the request was successful
      if (!response.ok) {
        throw new Error(`Failed to fetch liked songs: ${response.statusText}`);
      }

      // Step 4: Parse the response JSON
      const data = await response.json();
      console.log("Liked songs fetched successfully:", data);

      // Step 5: Set the liked songs in state
      setLiked(data.likedSongsPlaylist);
    } catch (error) {
      console.error("Error fetching liked songs:", error);
    }
  };

  // Fetch liked songs only if the URL includes "/playlist/likedsongs"
  useEffect(() => {
    if (currenturl.includes("/playlist/likedsongs")) {
      fetchLikedSongs();
    }
  }, [currenturl]); // Add currenturl as a dependency

  // Calculate total duration of the playlist
  useEffect(() => {
    if (data) {
      const totalDuration = data.tracks.items.reduce(
        (acc, song) => acc + song.track.duration_ms,
        0
      );
      setDuration(totalDuration);
    }
  }, [data]);

  // Helper function to convert milliseconds to a readable format
  function msToReadable(ms) {
    if (ms >= 3600000) {
      const hours = Math.floor(ms / 3600000);
      return `${hours} hr${hours > 1 ? "s" : ""}`;
    } else if (ms >= 60000) {
      const minutes = Math.floor(ms / 60000);
      return `${minutes} min${minutes > 1 ? "s" : ""}`;
    } else if (ms >= 1000) {
      const seconds = Math.floor(ms / 1000);
      return `${seconds} sec${seconds > 1 ? "s" : ""}`;
    } else {
      return `${ms} ms`;
    }
  }
  const saveToDatabase = async () => {
    try {
      // Prepare the song data
      const songz = {
        spotifyId: data.id,
        title: data.name,
        imageUrl: data.images[0].url || "default_image_url",
        songs: [],
      };

      console.log("Saving song data:", songz);

      // Get the user's email from session storage
      const userEmail = sessionStorage.getItem("userEmail");
      if (!userEmail) {
        throw new Error("User email not found.");
      }

      // Send the request to the server
      const response = await fetch(
        `http://localhost:4000/api/playlist/${userEmail}`,
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

  // Render the liked songs playlist if the URL is /playlist/likedsongs
  if (currenturl.includes("/playlist/likedsongs")) {
    return (
      <div
        id={containerstyle.container}
        className={styles.gradient}
        style={{ width: widthz }}
      >
        {liked ? (
          <div>
            <div id={styles.uppercontainer}>
              <img
                id={styles.playlistimg}
                src={likedsongsimg}
                alt="Liked Songs"
              />
              <div id={styles.playlistdetails}>
                <p id={styles.playlisttype}>Playlist</p>
                <h1
                  id={styles.playlisttitle}
                  style={{
                    fontSize: widthz === "53.2vw" ? 48 : 96,
                    marginTop: widthz === "53.2vw" ? 10 : -14,
                  }}
                >
                  Liked Songs
                </h1>
                <p
                  id={styles.playlistdesc}
                  style={{ marginTop: widthz === "53.2vw" ? 0 : -69 }}
                >
                  Your liked songs
                </p>
                <div id={styles.ownerdiv}>
                  <p id={styles.ownerdetails}>{liked.songs.length} songs</p>
                </div>
              </div>
            </div>
            <div id={styles.lowercontainer}>
              <div id={styles.midcontainer}>
                <div id={styles.midcontain}>
                  <button id={styles.playbutton} className={styles.reactbutton}>
                    <img src={playbutton} alt="Play" />
                  </button>
                </div>
              </div>
              <div id={styles.playlistdiv}>
                <div id={styles.playlistdata}>
                  <p id={styles.hash}>#</p>
                  <p id={styles.title}>Title</p>
                  <p
                    id={styles.album}
                    style={{ marginLeft: widthz === "53.2vw" ? 345 : 540 }}
                  >
                    Album
                  </p>
                  <p
                    id={styles.date}
                    style={{ marginLeft: widthz === "53.2vw" ? 210 : 344 }}
                  >
                    Date added
                  </p>
                  <img
                    style={{ marginLeft: widthz === "53.2vw" ? 190 : 280 }}
                    src={clock}
                    alt="Duration"
                  />
                </div>
                <div id={styles.divider}></div>
                <div id={styles.songsList}>
                  {liked.songs.map((song, index) => (
                    <PlaylistSong
                      key={index}
                      song={song}
                      wid={widthz}
                      index={index}
                      searchSong={searchSong}
                      setCurrentSong={setCurrentSong}
                      setSongs={setSongs}
                      query={query}
                      setQuery={setQuery}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading liked songs...</p>
        )}
        <div id={styles.backgroundco}>
          <FooterContent wid={widthz} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        id={containerstyle.container}
        className={styles.gradient}
        style={{ width: widthz }}
      >
        {data && (
          <div>
            <div id={styles.uppercontainer}>
              <img id={styles.playlistimg} src={data.images[0].url}></img>
              <div id={styles.playlistdetails}>
                <p id={styles.playlisttype}>Playlist</p>
                <h1
                  id={styles.playlisttitle}
                  style={{
                    fontSize: widthz == "53.2vw" ? 48 : 96,
                    marginTop: widthz == "53.2vw" ? 10 : -14,
                  }}
                >
                  {data.name}
                </h1>
                <p
                  id={styles.playlistdesc}
                  style={{ marginTop: widthz == "53.2vw" ? 0 : -69 }}
                >
                  {data.description}
                </p>
                <div id={styles.ownerdiv}>
                  <img id={styles.ownerimage} src={data.images[0].url}></img>{" "}
                  <p id={styles.ownerdetails} className={styles.ownerlink}>
                    {data.owner.display_name}
                  </p>
                  <p id={styles.ownerdetails}>
                    {" "}
                    • {data.followers.total} saves • {data.tracks.total} songs,
                    about {msToReadable(duration)}
                  </p>
                </div>
              </div>
            </div>
            <div id={styles.lowercontainer}>
              <div id={styles.midcontainer}>
                <div id={styles.midcontain}>
                  <button id={styles.playbutton} className={styles.reactbutton}>
                    <img src={playbutton} />
                  </button>
                  <div id={styles.addbutton} onClick={saveToDatabase}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#b3b3b3"
                        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"
                      />
                    </svg>
                  </div>
                </div>
                <svg
                  id={styles.more}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    id={styles.morecolor}
                    fill="#9a9996"
                    d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
                  />
                </svg>
              </div>
              <div id={styles.playlistdiv}>
                <div id={styles.playlistdata}>
                  <p id={styles.hash}>#</p>
                  <p id={styles.title}>Title</p>
                  <p
                    id={styles.album}
                    style={{ marginLeft: widthz == "53.2vw" ? 345 : 540 }}
                  >
                    Album
                  </p>
                  <p
                    id={styles.date}
                    style={{ marginLeft: widthz == "53.2vw" ? 210 : 344 }}
                  >
                    Date added
                  </p>
                  <img
                    style={{ marginLeft: widthz == "53.2vw" ? 190 : 280 }}
                    src={clock}
                  />
                </div>
                <div id={styles.divider}></div>
                {data && (
                  <div id={styles.songsList}>
                    {data.tracks.items.map((song, index) => (
                      <PlaylistSong
                        key={index}
                        song={song}
                        wid={widthz}
                        index={index}
                        searchSong={searchSong}
                        setCurrentSong={setCurrentSong}
                        setSongs={setSongs}
                        query={query}
                        setQuery={setQuery}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div id={styles.backgroundco}>
              <FooterContent wid={widthz} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Playlist;
