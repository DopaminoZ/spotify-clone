import React from 'react'
import styles from '../css/PlaylistSong.module.css'
import hanz from '../../assets/images/elbasha.png'
function PlaylistSong() {
  return (
    <div id={styles.container}>
        <p id={styles.hash}>1</p>
        <div id={styles.titlepack}>
        <img src={hanz}/>
        <div id={styles.data}>
        <p id={styles.title} className={styles.hover}>Requiem II. Dies irae</p>
        <p id={styles.artist} className={styles.hover}>Erik Satie</p>
        </div>
        </div>
        <p id={styles.album} className={styles.hover}>VERDI REQUIEM</p>
        <p id={styles.date}>4 days ago</p>
        <p id={styles.duration}>2:24</p>
    </div>
  )
}

export default PlaylistSong