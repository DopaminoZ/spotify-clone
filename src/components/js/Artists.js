import React from 'react'
import styles from "../css/Artists.module.css"
import yeat from '../../assets/images/yeat.jpg'

function Artists() {
  return (
    <div id={styles.container} className={styles.art}>
            <div className={styles.profile}>
                <img src={yeat} className={styles.image}></img>
                <h1 className={styles.name}>Yeat</h1>
            </div>
            <div id={styles.songlist}>

            </div>
    </div>
  )
}

export default Artists
