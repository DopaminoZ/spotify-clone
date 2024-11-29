import React from 'react'
import styles from '../css/SongCard.module.css'
import photo from "../../assets/images/channels4_profile.jpg"
import play from '../../assets/images/play.png'

const SongCard = () => {
  return (
    <div className={styles.container}>


    <img id={styles.songimage} src={photo}></img>
    <h1 className={styles.songname}>Yazmelyy</h1>
    <h1 className={styles.songdetail}>2023•Song</h1>
    <button id={styles.playbutton}><img src={play} /></button>
      
    </div>
  )
}

export default SongCard
