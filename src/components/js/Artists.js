import React from 'react'
import Header from "./Header_HomePage"
import styles from "../css/Artists.module.css"
import LeftSideNav from './LeftSideNav'
import yeat from '../../assets/images/yeat.jpg'
import containerstyle from '../css/BrowseComponent.module.css'

function Artists() {
  return (
    <div className={containerstyle.container}>
      
  
      


  
          <div className={styles.art}>
            <div className={styles.profile}>
                <img src={yeat} className={styles.image}></img></div>
                <h1 className={styles.name}>Yeat</h1>

          </div>

    </div>
  )
}

export default Artists
