import React, { useEffect, useState } from "react";
import styles from "../css/HomePage.module.css"; // Import the CSS module
import Header_HomePage from "./Header_HomePage";
import LeftSideNav from "./LeftSideNav";
import BrowseComponent from "./BrowseComponent";
import MainpageComponent from "./MainpageComponent";
import InstallApp from "./InstallApp";
import Playlist from "./Playlist";
import Album from "./Album";
import Artists from "./Artists";
import Premium from "./ExplorePremium";
import Nowplaying from "./NowPlaying";
import Lyrics from "./Lyrics";
import Player from "./Player";
import Profile from "./profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Chatbot from "./Chatbot";

let lyrics = new Array(
  "All the lights in Miami begin to gleam",
  "Ruby,blue, and green, neon too",
  "Everything looks better from above ,my king"
);
const currentSignedInUser = sessionStorage.getItem("userEmail");

function HomePage() {
  const [firstDivSize, setFirstDivSize] = useState(75.5);
  const [showSecondDiv, setShowSecondDiv] = useState(false);
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleResizeAndShow = () => {
    if (firstDivSize === 75.5) {
      setFirstDivSize(53.2);
      setShowSecondDiv(true);
    } else {
      setFirstDivSize(75.5);
      setShowSecondDiv(false);
    }
  };

  const searchSong = async () => {
    console.log("Searching for:", query);
    if (!query) return;
    try {
      const response = await axios.get(
        `http://localhost:4000/api/search?q=${query}`
      );
      console.log("API Response:", response.data);
      if (response.data.data.length > 0) {
        const newSongs = response.data.data;
        const newCurrentSong = newSongs[0];
        console.log("Setting New Current Song:", newCurrentSong);
        setSongs(newSongs);
        setCurrentSong(newCurrentSong);
      } else {
        console.warn("No songs found for the search term.");
      }
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
  };

  useEffect(() => {
    if (query) {
      searchSong();
    }
  }, [query]);

  useEffect(() => {
    console.log("Current Song Updated:", currentSong);
  }, [currentSong]);

  return (
    <div id={styles.mainpage}>
      <Header_HomePage
        query={query}
        setQuery={setQuery}
        searchSong={searchSong}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
      />
      <div id={styles.midsection}>
        <LeftSideNav />
        <div className={styles.mainpage}>
          <Switch>
            <Route path="/browse">
              <BrowseComponent widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/download">
              <InstallApp widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/artist/:artistID">
              <Artists
                widthz={`${firstDivSize}vw`}
                searchSong={searchSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                query={query}
                setQuery={setQuery}
              />
            </Route>
            <Route path="/playlist/:playlistID">
              <Playlist
                widthz={`${firstDivSize}vw`}
                searchSong={searchSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                query={query}
                setQuery={setQuery}
              />
            </Route>
            <Route path="/album/:albumID">
              <Album
                widthz={`${firstDivSize}vw`}
                searchSong={searchSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                query={query}
                setQuery={setQuery}
              />
            </Route>
            <Route path="/explorepremium">
              <Premium widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/profile">
              <Profile widthz={`${firstDivSize}vw`} />
            </Route>
            <Route path="/lyrics">
              <Lyrics widthz={`${firstDivSize}vw`} lyricss={lyrics} />
            </Route>
            <Route path="/">
              <MainpageComponent widthz={`${firstDivSize}vw`} />
            </Route>
          </Switch>
        </div>
        {showSecondDiv && <Nowplaying Showdiv={handleResizeAndShow} />}
      </div>

      <div id={styles.footer}>
        <Player
          query={query}
          searchSong={searchSong}
          songs={songs}
          currentSong={currentSong || {}}
          setCurrentSong={setCurrentSong}
          setSongs={setSongs}
          var1={firstDivSize}
          vars={showSecondDiv}
          Showdiv={handleResizeAndShow}
        />
      </div>

      {/* Chatbot Window */}
      {isChatbotOpen && (
        <div className={styles.chatbotWindow}>
          <Chatbot />
        </div>
      )}

      {/* Chatbot Toggle Button */}
      <button
        className={styles.chatbotbtn}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        {isChatbotOpen ? "✕" : "💬"}
      </button>
    </div>
  );
}

export default HomePage;