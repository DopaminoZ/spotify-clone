import React from 'react'
import styles from "../css/MainpageCard.module.css"
import testimg from "../../assets/images/likedsongs.png"
function MainpageCard() {
  return (
    <div id={styles.container}>
        <img id={styles.image} src={testimg}></img><div id={styles.titlediv}><h1 id={styles.title}>Artist</h1></div>
    </div>
  )
}

export default MainpageCard