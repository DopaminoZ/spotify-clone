import React from 'react'
import styles from "../css/Playlist.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import hanz from "../../assets/images/elbasha.png"
function Playlist() {
  return (
    <div id={containerstyle.container} className={styles.gradient}>
        <div id={styles.uppercontainer}>
        <img id={styles.playlistimg} src={hanz}></img>
        <div id={styles.playlistdetails}>
            <p id={styles.playlisttype}></p>
            <h1 id={styles.albumtitle}></h1>
            <div id={styles.artistdiv}>
            <img id={styles.artistimage}></img> <p id={styles.artistname}></p> <p>•</p> <p id={styles.year}>year</p> <p>•</p> <p id={styles.details}>details</p>
            </div>
        </div>
        </div>
        <div id={styles.midcontainer}>
        </div>
        <div id={styles.playlistdiv}>
        </div>
    </div>
  )
}

export default Playlist