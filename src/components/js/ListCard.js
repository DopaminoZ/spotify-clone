import React from 'react'
import styles from "../css/ListCard.module.css"
import image from "../../assets/images/elbasha.png"
function ListCard({album}) {
  return (
    <div id={styles.container}>
        <img id={styles.image} src={album.image}></img>
        <p id={styles.description}>{album.title} - {album.artist}</p>
    </div>
  )
}

export default ListCard