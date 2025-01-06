import { React, useState, useEffect } from "react";
import styles from "../css/Header_HomePage.module.css";
import logo from "../../assets/images/spotify-white-icon.png";
import home from "../../assets/images/building.png";
import homeactive from "../../assets/images/home-active.png";
import search from "../../assets/images/search.png";
import download from "../../assets/images/download-circular-button.png";
import browse from "../../assets/images/browse-unactive.png";
import browseactive from "../../assets/images/browse-active.png";
import { Link, Route, Switch } from "react-router-dom";
import SearchResults from "./SearchResults";
import useFetch from "./useFetch";

function Header_HomePage({
  query,
  setQuery,
  searchSong,
  setSongs,
  setCurrentSong,
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentSignedInUser, setcurrentSignedInUser] = useState(
    sessionStorage.getItem("userEmail")
  );
  const [searchQuery, setsearchQuery] = useState("");
  const signout = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path
        style={{ fill: "white" }}
        d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
      />
    </svg>
  );
  const handleBlur = () => {
    setTimeout(() => {
      setIsSearchFocused(false);
    }, 200);
  };
  useEffect(() => {}, [searchQuery]);
  const {
    error,
    data: searchresults,
    isPending,
  } = useFetch(`http://localhost:4000/api/search-spotify?q=${searchQuery}`);
  return (
    <div className={styles.container}>
      <div
        className={`${styles.searchresults} ${isSearchFocused ? styles.active : ""}`}
      >
        {searchresults &&
          searchresults.map((result, index) => (
            <SearchResults
              key={index}
              result={result}
              query={query}
              setQuery={setQuery}
              searchSong={searchSong}
              setSongs={setSongs}
              setCurrentSong={setCurrentSong}
            />
          ))}
      </div>
      <div className={styles.header}>
        <Link to="/">
          <div className={styles.logodiv}>
            <img src={logo} alt="spotify logo" className={styles.spotifylogo} />
          </div>
        </Link>
        <div className={styles.headersearch}>
          <Switch>
            <Route exact path="/">
              <button className={styles.homebtn}>
                <div>
                  <img src={homeactive} className={styles.homeimg} />
                </div>
              </button>
            </Route>
            <Route path="/">
              <Link to="/">
                <button className={styles.homebtn}>
                  <div>
                    <img src={home} className={styles.homeimg} />
                  </div>
                </button>
              </Link>
            </Route>
          </Switch>
          <div className={styles.searchbar}>
            <div className={styles.searchminusbrowse}>
              <img
                src={search}
                className={styles.searchicon}
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the event from propagating
                  searchSong();
                }}
              />
              <input
                type="text"
                placeholder="What do you want to play?"
                className={styles.search}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={handleBlur}
                onChange={(e) => {
                  setsearchQuery(e.target.value);
                }}
              />
            </div>
            <div className={styles.divider}>
              <Switch>
                <Route path="/browse">
                  <img src={browseactive} className={styles.browseicon} />
                </Route>
                <Route path="/">
                  <Link to="/browse">
                    <img src={browse} className={styles.browseicon} />
                  </Link>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        {/* El kalam da s7 bs hn5ly el default en el user guest mesh logged in */}
        {currentSignedInUser != undefined && (
          <div className={styles.explorediv} id={styles.usermode}>
            <button className={styles.explore}>Explore Premuim</button>
            <button className={styles.install}>
              <img src={download} className={styles.downloadicon} /> Install App
            </button>
            <div
              className={styles.notifications}
              onClick={(e) => {
                setcurrentSignedInUser(undefined);
                sessionStorage.clear();
              }}
            >
              {signout}
            </div>
            <button className={styles.homebtn}>
              <div>
                <img src={home} className={styles.homeimg} />
              </div>
            </button>
          </div>
        )}
        {currentSignedInUser == undefined && (
          <div className={styles.explorediv} id={styles.guestmode}>
            <Link to="/signup">
              <button className={styles.signup}>Sign up</button>
            </Link>
            <Link to="/login">
              <button className={styles.login}>Log in</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header_HomePage;
