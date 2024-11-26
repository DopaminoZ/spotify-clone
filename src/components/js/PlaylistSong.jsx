import React from 'react'
import styles from '../css/PlaylistSong.module.css'
import hanz from '../../assets/images/elbasha.png'
function PlaylistSong() {
  return (
    <div id={styles.container}>
        <p id={styles.hash}>1</p>
        <svg id={styles.play} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
        <div id={styles.titlepack}>
        <img src={hanz}/>
        <div id={styles.data}>
        <p id={styles.title} className={styles.hover}>Requiem II. Dies irae</p>
        <p id={styles.artist} className={styles.hover}>Erik Satie</p>
        </div>
        </div>
        <p id={styles.album} className={styles.hover}>VERDI REQUIEM</p>
        <p id={styles.date}>4 days ago</p>
        <div id={styles.durationdiv}>
          <div id={styles.addbutton}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#b3b3b3" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></div>
          <p id={styles.duration}>2:24</p>
          <svg id={styles.more} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#9a9996" d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"/></svg>
        </div>
    </div>
  )
}

export default PlaylistSong