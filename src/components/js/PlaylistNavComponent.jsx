import styles from "../css/PlaylistNavComponent.module.css";
import cover from "../../assets/images/lana.jpeg";
import { Link } from "react-router-dom";
const PlaylistComponent = ({ singledata }) => {
  if (singledata.type == "artist")
    return (
      <Link to={`/artist/${singledata.spotifyId}`}>
        <div className={styles.listcomponent}>
          <img
            src={singledata.imageUrl}
            alt="Cover Picture"
            className={styles.coverphoto}
          />
          <div className={styles.listcomponenttext}>
            <p className={styles.playlistname}>{singledata.title}</p>
            <p className={styles.playlistowner}>Artist</p>
          </div>
        </div>
      </Link>
    );
  else if (singledata.type == "album")
    return (
      <Link to={`/album/${singledata.spotifyId}`}>
        <div className={styles.listcomponent}>
          <img
            src={singledata.imageUrl}
            alt="Cover Picture"
            className={styles.coverphoto}
          />
          <div className={styles.listcomponenttext}>
            <p className={styles.playlistname}>{singledata.title}</p>
            <p className={styles.playlistowner}>Album</p>
          </div>
        </div>
      </Link>
    );
  else if (singledata.type == "playlist")
    return (
      <Link to={`/playlist/${singledata.spotifyId}`}>
        <div className={styles.listcomponent}>
          <img
            src={singledata.imageUrl}
            alt="Cover Picture"
            className={styles.coverphoto}
          />
          <div className={styles.listcomponenttext}>
            <p className={styles.playlistname}>{singledata.title}</p>
            <p className={styles.playlistowner}>Playlist</p>
          </div>
        </div>
      </Link>
    );
};

export default PlaylistComponent;
