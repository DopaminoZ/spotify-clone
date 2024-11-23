import React from "react";
import styles from "../css/LeftSideNav.module.css";
import add from "../../assets/images/add.png";
import next from "../../assets/images/next.png";
import searchb from "../../assets/images/search.png";
import library from "../../assets/images/library.png";
import cover from "../../assets/images/Aurora.png";
function LeftSideNav() {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.toplinediv}>
          <button className={styles.librarybutton}>
            <img
              src={library}
              alt="library icon"
              className={styles.libraryimage}
            />
            Your Library
          </button>
          <div className={styles.plusnextbtns}>
            <button className={styles.add}>
              <img src={add} alt="" className={styles.icon} />
            </button>
            <button className={styles.next}>
              <img src={next} alt="" className={styles.icon} />
            </button>
          </div>
        </div>
      </header>
      <div className={styles.btns2ndrow}>
        <button className={styles.playlistsbtn}>Playlists</button>
        <button className={styles.playlistsbtn}>Artists</button>
      </div>
      <div className={styles.search}>
        <button className={styles.searchbtn}>
          <img src={searchb} alt="" className={styles.icon} />
        </button>
        <button className={styles.recentsbtn}>
          Recents
          <img src={next} alt="" className={styles.icon} />
        </button>
      </div>
      <div className={styles.playlists}>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
        <div className={styles.listcomponent}>
          <img src={cover} alt="" className={styles.coverphoto} />
          <div className={styles.listcomponenttext}>
            <h3>Z3ln</h3>
            <p>playlist . Attia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideNav;
