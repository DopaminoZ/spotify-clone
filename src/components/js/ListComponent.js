import React from 'react'
import styles from "../css/ListComponent.module.css"
import ListCard from "./ListCard"
function ListComponent() {
  return (
    <div id={styles.container}>
        <div id={styles.uppercontainer}>
        <h1 id={styles.madefor}>List Title</h1>
        <button id={styles.showall}>Show all</button>
        </div>
        <div id={styles.innercontainer}>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        </div>
    </div>
  )
}

export default ListComponent