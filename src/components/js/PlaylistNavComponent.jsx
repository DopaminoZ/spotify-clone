import styles from "../css/PlaylistNavComponent.module.css";
import cover from "../../assets/images/lana.jpeg";
const PlaylistComponent = () => {
  return (
    <div className={styles.listcomponent}>
      <img src={cover} alt="Cover Picture" className={styles.coverphoto} />
      <div className={styles.listcomponenttext}>
        <p className={styles.playlistname}>Z3ln</p>
        <p className={styles.playlistowner}>Playlist • Attia</p>
      </div>
    </div>
  );
};

export default PlaylistComponent;
