import React from 'react'
import styles from "../css/ListCard.module.css"
import play from "../../assets/images/play.png"
function ListCard({album}) {
  return (
    <div id={styles.container}>
        <img id={styles.image} src={album.image}></img>
        <p id={styles.description}>{album.title} - {album.artist}</p>
        <button id={styles.playbutton}><img src={play} /></button>
    </div>
  )
}
 
export default ListCard