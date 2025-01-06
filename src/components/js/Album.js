import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Album.module.css";
import containerstyle from "../css/BrowseComponent.module.css";
import hanz from "../../assets/images/elbasha.png";
import playbutton from "../../assets/images/play.png";
import clock from "../../assets/images/clock.png";
import AlbumSong from "./AlbumSong.jsx";
import FooterContent from "./FooterContent.jsx";
import useFetch from "./useFetch.js";
function Album({
  widthz,
  searchSong,
  setCurrentSong,
  setSongs,
  query,
  setQuery,
}) {
  const { albumID } = useParams(); // Extract the playlist ID from the URL
  const { error, data, isPending } = useFetch(
    `http://localhost:4000/api/spotify/albums/${albumID}`
  );
  const saveToDatabase = async () => {
    try {
      // Prepare the song data
      const songz = {
        spotifyId: data.id,
        title: data.name,
        imageUrl: data.images[0].url || "default_image_url",
      };

      console.log("Saving song data:", songz);

      // Get the user's email from session storage
      const userEmail = sessionStorage.getItem("userEmail");
      if (!userEmail) {
        throw new Error("User email not found.");
      }

      // Send the request to the server
      const response = await fetch(
        `http://localhost:4000/api/album/${userEmail}`,
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

  useEffect(() => {}, [data]);
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
              <p id={styles.playlisttype}>Album</p>
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
              ></p>
              <div id={styles.ownerdiv}>
                <img id={styles.ownerimage} src={data.images[0].url}></img>{" "}
                <p id={styles.ownerdetails} className={styles.ownerlink}></p>
                <p id={styles.ownerdetails}></p>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
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
                ></p>
                <p
                  id={styles.date}
                  style={{ marginLeft: widthz == "53.2vw" ? 210 : 344 }}
                ></p>
                <img
                  style={{ marginLeft: widthz == "53.2vw" ? 190 : 280 }}
                  src={clock}
                />
              </div>
              <div id={styles.divider}></div>
              {data && (
                <div id={styles.songsList}>
                  {data.tracks.items.map((song, index) => {
                    console.log(song); // Logging outside the JSX
                    return (
                      <AlbumSong
                        key={index}
                        song={song}
                        image={data.images[0].url}
                        wid={widthz}
                        index={index}
                        searchSong={searchSong}
                        setCurrentSong={setCurrentSong}
                        setSongs={setSongs}
                        query={query}
                        setQuery={setQuery}
                      />
                    );
                  })}
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

export default Album;
