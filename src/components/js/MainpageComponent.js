import React, { useState, useEffect } from "react";
import styles from "../css/MainpageComponent.module.css";
import likedsongs from "../../assets/images/likedsongs.png";
import containerstyle from "../css/BrowseComponent.module.css";
import MainpageCard from "./MainpageCard.js";
import ListComponent from "./ListComponent.js";
import useFetch from "./useFetch.js";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function MainpageComponent({ widthz }) {
  const {
    error,
    data: lists,
    isPending,
  } = useFetch("http://localhost:4000/api/spotify/public_playlists");
  const {
    errormain,
    data: maincards,
    isPendingmain,
  } = useFetch(
    `http://localhost:4000/api/get-followed-artists/${sessionStorage.getItem("userEmail")}`
  );
  const [listsfiltered, setListFilt] = useState(lists);
  const likedsonga = {
    title: "Liked songs",
    type: "song",
    imageUrl:
      "data:image/jpeg;base64,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",
  };
  console.log(lists);

  useEffect(() => {}, [maincards]);

  useEffect(() => {
    if (lists) {
      setListFilt(lists.filter((item) => item !== null));
    }
  }, [lists]);

  return (
    <div
      id={containerstyle.container}
      className={styles.gradient}
      style={{ width: widthz }}
    >
      <div id={styles.buttonscontainer}>
        <button className={styles.buttonsheadselected}>All</button>

        <button className={styles.buttonshead}>Music</button>

        <button className={styles.buttonshead}>Podcasts</button>
      </div>
      <div id={styles.playlists}>
        {errormain && (
          <div style={{ color: "red", fontSize: 30, marginTop: 50 }}>
            {errormain}
          </div>
        )}
        {isPendingmain && (
          <div>
            <p style={{ color: "white", fontSize: 50 }}> Loading...</p>
          </div>
        )}
        <Link to="/playlist/likedsongs">
          <MainpageCard card={likedsonga} key={0} width={widthz} />
        </Link>
        {maincards?.followedartists?.slice(0, 7).map((card, index) => (
          <Link to={`/artist/${card.spotifyId}`}>
            <MainpageCard key={index} card={card} width={widthz} />
          </Link>
        ))}
      </div>
      <div id={styles.listsdiv}>
        {error && (
          <div style={{ color: "red", fontSize: 30, marginTop: 50 }}>
            {error}
          </div>
        )}
        {isPending && (
          <div>
            <p style={{ color: "white", fontSize: 50 }}> Loading...</p>
          </div>
        )}
        {listsfiltered && <ListComponent list={listsfiltered} widt={widthz} />}
      </div>
    </div>
  );
}

export default MainpageComponent;
