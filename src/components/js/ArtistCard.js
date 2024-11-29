import React from 'react'
import styles from "../css/ArtistCard.module.css"
import photo from "../../assets/images/channels4_profile.jpg"



const ArtistCard = () => {
  return (
    <div className={styles.container}>
      
        
        

    <h1 className={styles.num}>1</h1>
    <img src={photo} id={styles.pic}></img>
    <h1 className={styles.name}>Yazmelyy</h1>
    <h1 className={styles.lnum}>1,356,779</h1>
    <h1 className={styles.time}>3:56</h1>





    </div>
  )
}

export default ArtistCard
