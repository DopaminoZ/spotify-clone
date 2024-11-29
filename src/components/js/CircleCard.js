import React from 'react'
import styles from '../css/CircleCard.module.css'
import photo from '../../assets/images/lana.jpeg'
import play from '../../assets/images/play.png'

const CircleCard = () => {
  return (
    <div className={styles.container}>
         <img id={styles.artistimage} src={photo}></img>
         <h1 className={styles.artistname}>Lana</h1>
         <h1 className={styles.artist}>Artist</h1>
         <button id={styles.playbutton}><img src={play} /></button>
    </div>
  )
}

export default CircleCard
