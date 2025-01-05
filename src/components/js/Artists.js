import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "../css/Artists.module.css";
import badge from "../../assets/images/badge.webp";
import play from "../../assets/images/play.png";
import dots from "../../assets/images/dots.webp";
import Card from "./ArtistCard";
import Card2 from "./Scard";
import Circlecard from "./CircleCard";
import photo from "../../assets/images/channels4_profile.jpg";
import useFetch from "./useFetch";

function Artists({
  widthz,
  searchSong,
  setCurrentSong,
  setSongs,
  query,
  setQuery,
}) {
  const { artistID } = useParams(); // Extract the playlist ID from the URL
  const { error, data, isPending } = useFetch(
    `http://localhost:4000/api/spotify/artist/${artistID}`
  );
  const {
    errorsongs,
    data: songs,
    isPendingsongs,
  } = useFetch(`http://localhost:4000/api/spotify/artist/${artistID}/top`);
  const {
    erroralb,
    data: albums,
    isPendingalb,
  } = useFetch(`http://localhost:4000/api/spotify/artist/${artistID}/albums`);
  const {
    errorrel,
    data: rel,
    isPendingrel,
  } = useFetch(
    `http://localhost:4000/api/spotify/artist/${artistID}/related-artists`
  );
  useEffect(() => {
    console.log(songs);
  }, [data, songs, albums, rel]);

  const image = data?.images[0].url;
  return (
    <div id={styles.container} className={styles.art} style={{ width: widthz }}>
      <div
        className={styles.profile}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.verify}>
          <img id={styles.icon} src={badge}></img>
          <h3 className={styles.vtext}>Verified Artist</h3>
        </div>

        <h1 className={styles.name}>{data?.name}</h1>

        <h1 className={styles.monthly}>
          {data?.followers.total} monthly listeners
        </h1>
      </div>
      <div id={styles.container2}>
        <div className={styles.buttons}>
          <button class={styles.btn1}>
            <img id={styles.btn} src={play}></img>
          </button>
          <button className={styles.follow}>Follow</button>
          <button className={styles.dotbtn}>
            {" "}
            <img class={styles.dot} src={dots}></img>
          </button>
          <h1 className={styles.popular}>Popular</h1>
        </div>

        <h1 className={styles.popular}>Popular</h1>

        {songs &&
          songs.tracks.map((song, index) => {
            return (
              <Card
                key={index}
                song={song}
                index={index}
                searchSong={searchSong}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                query={query}
                setQuery={setQuery}
              />
            );
          })}
        <h2 className={styles.see}>See more</h2>

        <h2 className={styles.disco}>Discography</h2>
        <div className={styles.dcontainer}>
          <button className={styles.dbuttons} id={styles.popular}>
            Popular releases
          </button>
          <button className={styles.dbuttons} id={styles.albums}>
            Albums
          </button>
          <button className={styles.dbuttons} id={styles.singles}>
            Singles and Eps
          </button>
        </div>

        <div className={styles.epcards}>
          {albums &&
            albums.items.map((album, index) => {
              return (
                <Link key={index} to={`/album/${album.id}`}>
                  {console.log(album)}
                  <Card2 album={album} index={index} />
                </Link>
              );
            })}
        </div>

        <h2 className={styles.head}>Featuring {data?.name}</h2>
        <div className={styles.epcards}>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
        <h2 id={styles.fans} className={styles.head}>
          Fans also like
        </h2>
        <div className={styles.epcards}>
          <Circlecard />
          <Circlecard />
          <Circlecard />
          <Circlecard />
          <Circlecard />
          <Circlecard />
          <Circlecard />
          <Circlecard />
        </div>

        <h2 className={styles.head} id={styles.appear}>
          Appears on
        </h2>
        <div className={styles.epcards}>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>

        <h2 className={styles.head} id={styles.appear}>
          Artist Playlist
        </h2>
        <div className={styles.epcards}>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>

        <h2 className={styles.head} id={styles.appear}>
          Discoverd On
        </h2>
        <div className={styles.epcards}>
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
        <h1 className={styles.about}>About</h1>

        <div className={styles.aboutbox}>
          <img id={styles.imagebox} src={photo}></img>
          <h1 className={styles.monthlylisten}>500,467 monthly listeners</h1>
          <h1 className={styles.par}>
            A rapper and a songwriter born and raised in Cairo, Egypt. Muhab
            Ahmed Elsadat is an Egyptian artist who represents Egypt and
            specifically Cairo, and is well known for his ability to create
            diverse types of music, unique catchy flows and emotionally moving
            lyrics that the youth can relate to.Apr
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Artists;
