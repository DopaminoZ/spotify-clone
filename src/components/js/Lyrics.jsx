import styles from "../css/Lyrics.module.css";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";

const Lyrics = () => {
  // first p is playlist name if the song is from playlist if its from search it becomes song name
  // copy song link button only appears when the mouse is inside the lyrics component
  return (
    <div className={styles.container}>
      <div className={styles.firstline}>
        <p>Cure for me</p>
        <button>
          <img src="" alt="Close button" />
        </button>
        <button>
          <img src="" alt="Details" />
        </button>
      </div>
      <img src={cover} alt="Cover Photo" />
      <div>
        <div>
          <p>Cure for me</p>
          <p>Aurora</p>
        </div>
        <button>
          <img src={add} alt="Copy song link" />
        </button>
        <button>
          <img src={add} alt="Add to liked songs" />
        </button>
      </div>
      <div>
        <div>
          <p>About the artist</p>
          <img src="" alt="" />
          <div>
            <div>
              <p>Aurora</p>
              <p>8,000,000,000 monthly listeners</p>
              <p>.</p>
            </div>
            <button>Follow</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p>Credits</p>
          <button>Show All</button>
        </div>
        <div>
          <div className={styles.credits}>
            <p>Aurora</p>
            <p>Main Artitst, Composer</p>
          </div>
          <button>Follow</button>
        </div>
        <div>
          <p>Magnus Skylstad</p>
          <p>Composer, Producer</p>
        </div>
      </div>
      <div className={styles.ontour}>
        <div>
          <p>On tour</p>
          <button>Show All</button>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Sao Paulo</p>
            <p>Aurora</p>
            <p>Sat 7:00 PM Place</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <p>Sao Paulo</p>
            <p>Aurora</p>
            <p>Sat 7:00 PM Place</p>
          </div>
        </div>
      </div>
      <div className={styles.upnext}>
        <div>
          <p>Next in queue</p>
          <button>Open queue</button>
        </div>
        <div>
          <img src={dover} alt="" />
          <div>
            <p>Kill Bill</p>
            <p>SZA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
