import React from 'react'
import styles from "../css/Playlist.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import hanz from "../../assets/images/elbasha.png"
import playbutton from "../../assets/images/play.png"
import add from "../../assets/images/add.png"
import addactive from "../../assets/images/add-active.png"
import clock from "../../assets/images/clock.png"
import PlaylistSong from './PlaylistSong'
import FooterContent from './FooterContent'
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
          <div id={styles.midcontain}>
          <button id={styles.playbutton} className ={styles.reactbutton}><img src={playbutton}/></button>
          <div id={styles.addbutton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#b3b3b3" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></div>
          </div>
          <svg id={styles.more} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id={styles.morecolor} fill="#9a9996" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
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
        <div id={styles.backgroundco}>
        <FooterContent/>
        </div>
    </div>
  )
}

export default Playlist