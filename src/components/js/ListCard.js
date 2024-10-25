import React from 'react'
import styles from "../css/ListCard.module.css"
import image from "../../assets/images/elbasha.png"
function ListCard() {
  return (
    <div id={styles.container}>
        <img id={styles.image} src={image}></img>
        <p id={styles.description}>lorem ipsum</p>
    </div>
  )
}

export default ListCard