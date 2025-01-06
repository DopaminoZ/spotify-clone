import React from "react";
import styles from "../css/SearchResults.module.css";
import { Link } from "react-router-dom";
import hanz from "../../assets/images/elbasha.png";
function SearchResults({
  result,
  query,
  setQuery,
  searchSong,
  setSongs,
  setCurrentSong,
}) {
  function capitalizeFirstLetter(string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }

  if (result.type == "track")
    return (
      <div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
          setQuery(result.name + " " + result.artist);
          searchSong();
        }}
      >
        <img className={styles.image} src={result.cover} />
        <div className={styles.details}>
          <p className={styles.title}>{result.name}</p>
          <p className={styles.type}>Song</p>
        </div>
      </div>
    );
  else
    return (
      <Link to={`/${result.type}/${result.id}`}>
        <div className={styles.container}>
          <img className={styles.image} src={result.cover} />
          <div className={styles.details}>
            <p className={styles.title}>{result.name}</p>
            <p className={styles.type}>{capitalizeFirstLetter(result.type)}</p>
          </div>
        </div>
      </Link>
    );
}

export default SearchResults;
