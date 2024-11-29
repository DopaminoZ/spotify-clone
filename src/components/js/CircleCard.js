import React from 'react'
import styles from '../css/CircleCard.module.css'
import photo from '../../assets/images/lana.jpeg'

const CircleCard = () => {
  return (
    <div className={styles.container}>
         <img id={styles.artistimage} src={photo}></img>
         <h1 className={styles.artistname}>Lana</h1>
         <h1 className={styles.artist}>Artist</h1>
    </div>
  )
}

export default CircleCard
