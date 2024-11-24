import React from 'react'
import styles from "../css/Playlist.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import hanz from "../../assets/images/elbasha.png"
import playbutton from "../../assets/images/play.png"
import add from "../../assets/images/add.png"
import addactive from "../../assets/images/add-active.png"
import clock from "../../assets/images/clock.png"
import PlaylistSong from './PlaylistSong'
function Playlist() {
  return (
    <div id={containerstyle.container} className={styles.gradient}>
        <div id={styles.uppercontainer}>
        <img id={styles.playlistimg} src={hanz}></img>
        <div id={styles.playlistdetails}>
            <p id={styles.playlisttype}>Playlist</p>
            <h1 id={styles.playlisttitle}>Classical Bangers</h1>
            <p id={styles.playlistdesc}>Best classical music to study, chill, and relax. From Mozart, Vivaldi, Beethoven, Chopin, Debussy, Satie, Tchaikovsky, to Christmas Classics. Peaceful piano to Orchestras from Baroque to...</p>
            <div id={styles.ownerdiv}>
            <img id={styles.ownerimage} src={hanz}></img> <p id={styles.ownerdetails} className={styles.ownerlink}>Classical Bangers</p><p id={styles.ownerdetails}> • 777,874 saves • 384 songs, about 21 hr</p>
            </div>
        </div>
        </div>
        <div id={styles.lowercontainer}>
        <div id={styles.midcontainer}>
          <button id={styles.playbutton} className ={styles.reactbutton}><img src={playbutton}/></button>
          <button id={styles.addtolibrary} className={styles.reactbutton}><img src={add} className={styles.base}/> <img src={addactive} className={styles.hover}/></button>
        </div>
        <div id={styles.playlistdiv}>
          <div id={styles.playlistdata}>
          <p id={styles.hash}>#</p><p id={styles.title}>Title</p><p id={styles.album}>Album</p><p id={styles.date}>Date added</p><img src={clock} />
          </div>
          <div id={styles.divider}></div>
          <div id={styles.songsList}>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
              <PlaylistSong/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Playlist