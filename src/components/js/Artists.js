import React from 'react'
import Header from "./Header_HomePage"
import styles from "../css/Artists.module.css"
import LeftSideNav from './LeftSideNav'
import yeat from '../../assets/images/yeat.jpg'

function Artists() {
  return (
    <div id={styles.body}>
      
  <div className={styles.head}><Header/></div>
      


      <div className={styles.nav}><LeftSideNav/></div>
          <div className={styles.art}>
            <div className={styles.profile}><img src={yeat} className={styles.image}></img></div>
            <h1 className={styles.name}>Yeat</h1>

          </div>

    </div>
  )
}

export default Artists
