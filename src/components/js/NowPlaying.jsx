import styles from "../css/NowPlaying.module.css";
import dots from "../../assets/images/dots.webp";
import add from "../../assets/images/add.png";
import cover from "../../assets/images/Aurora.png";
import close from "../../assets/images/close.png";
import cover2 from "../../assets/images/lana.jpeg";
import about from "../../assets/images/lana2.jpeg";
import Song from "./UpnextSong";

const Lyrics = () => {
  // first p is playlist name if the song is from playlist if its from search it becomes song name
  // copy song link button only appears when the mouse is inside the lyrics component
  return (
    <div className={styles.container}>
      <div className={styles.firstline}>
        <p>Ultraviolence</p>
        <div className={styles.controlbtns}>
          <button className={styles.dotsbtn}>
            <img src={dots} alt="Close button" className={styles.dotsicon} />
          </button>
          <button className={styles.closebtn}>
            <img src={close} alt="Details" className={styles.closeicon} />
          </button>
        </div>
      </div>
      <div className={styles.smallercontainer}>
        <img src={cover2} alt="Cover Photo" className={styles.coverpic} />
        <div className={styles.covertxtbtns}>
          <div className={styles.names}>
            <p className={styles.songname}>Ultraviolence</p>
            <p className={styles.artistname}>Lana Del Rey</p>
          </div>
          <div className={styles.likebtns}>
            <button className={styles.copybtn}>
              <img src={add} alt="Copy song link" className={styles.copyimg} />
            </button>
            <button className={styles.addtolikedbtn}>
              <img src={add} alt="Add to liked songs" />
            </button>
          </div>
        </div>
        <div>
          <div className={styles.about}>
            <p className={styles.abouttxt}>About the artist</p>
            <img src={about} alt="" className={styles.aboutimg} />
            <div className={styles.aboutbot}>
              <div>
                <p className={styles.aboutartistname}>Lana Del Rey</p>
                <p>8,000,000,000 monthly listeners</p>
                <p>.</p>
              </div>
              <button>Follow</button>
            </div>
          </div>
        </div>
        <div className={styles.credits}>
          <div className={styles.creditscontrol}>
            <p className={styles.creditstitle}>Credits</p>
            <p className={styles.showallbtn}>Show all</p>
          </div>
          <div className={styles.firstcredit}>
            <div className={styles.creditscomponent}>
              <p>Lana Del Rey</p>
              <p>Main Artitst,Composer</p>
            </div>
            <button>Follow</button>
          </div>
          <div className={styles.creditscomponent}>
            <p>Daniel Heath</p>
            <p>Composer</p>
          </div>
          <div className={styles.creditscomponent}>
            <p>Dan Auerbach</p>
            <p>Producer</p>
          </div>
        </div>
        <div className={styles.ontour}>
          <div className={styles.ontourtitle}>
            <p className={styles.ontourtitletxt}>On tour</p>
            <p className={styles.showallbtn}>Show all</p>
          </div>
          <div className={styles.ontourcomponentdiv}>
            <div className={styles.dateicon}>
              <p className={styles.month}>Dec</p>
              <p className={styles.day}>6</p>
            </div>
            <div className={styles.ontourcomponent}>
              <p>Sao Paulo</p>
              <p>Aurora</p>
              <p>Sat 7:00 PM • Place</p>
            </div>
          </div>
        </div>
        <div className={styles.upnext}>
          <div className={styles.upnextfirst}>
            <p>Next in queue</p>
            <p className={styles.showallbtn}>Open queue</p>
          </div>
          <div>
            <Song />
            <Song />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
