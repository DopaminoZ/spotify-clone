import React from 'react'
import styles from '../css/BrowseComponent.module.css'
import Card from './BrowseCard.js'
function BrowseComponent( {widthz}) {
  return (
    <div id={styles.container} style={{width: widthz}}>
        <h1 id={styles.browseTitle}>Browse all</h1>
        <div id={styles.cardsContainer}>
        {[...Array(30)].map((_, index) => (
          <Card key={index} width={widthz} />
        ))}
        </div>
    </div>
  )
}

export default BrowseComponent