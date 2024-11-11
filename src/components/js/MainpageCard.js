import React from 'react'
import styles from "../css/MainpageCard.module.css"
import testimg from "../../assets/images/likedsongs.png"
function MainpageCard({card}) {
  return (
    <div id={styles.container}>
        <img id={styles.image} src={card.image}></img><div id={styles.titlediv}><h1 id={styles.title}>{card.artist}</h1></div>
    </div>
  )
}

export default MainpageCard