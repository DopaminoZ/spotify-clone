import React from 'react'
import styles from "../css/MainpageComponent.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import MainpageCard from "./MainpageCard.js"
import ListComponent from './ListComponent.js'
function MainpageComponent() {
  return (
    <div id={containerstyle.container} className={styles.gradient}>
        <div id={styles.buttonscontainer}>
            <button className={styles.buttonshead}>All</button>
            <button className={styles.buttonshead}>Music</button>
            <button className={styles.buttonshead}>Podcasts</button>
        </div>
        <div id={styles.playlists}>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
            <MainpageCard/>
        </div>
        <div id={styles.listsdiv}>
            <ListComponent/>
            <ListComponent/>
            <ListComponent/>
            <ListComponent/>
            <ListComponent/>
        </div>
    </div>
  )
}

export default MainpageComponent