import React from 'react'
import styles from '../css/BrowseCard.module.css'
function BrowseCard() {
  return (
    <div id={styles.container} style={{backgroundColor: "red"}}>
        <h1 id={styles.cardTitle}>Testing</h1>
    </div>
  )
}

export default BrowseCard