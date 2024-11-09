import React, {useState, useEffect} from 'react'
import styles from "../css/MainpageComponent.module.css"
import containerstyle from "../css/BrowseComponent.module.css"
import MainpageCard from "./MainpageCard.js"
import ListComponent from './ListComponent.js'
import useFetch from './useFetch.js'
function MainpageComponent() {

  const { error, data:lists,isPending } = useFetch("http://localhost:8000/list");

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
          {error && <div style={{color: "red",fontSize:30,marginTop:50}}>{error}</div>}
          {isPending && <div><p style={{color: "white",fontSize:50}}> Loading...</p></div> }
          {lists && lists.map((list) => (
            <ListComponent key={list.id} list={list}/>
          ))};
        </div>
    </div>
  )
}

export default MainpageComponent