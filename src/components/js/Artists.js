import React from 'react'
import styles from "../css/Artists.module.css"
import badge from "../../assets/images/badge.webp"
import play from "../../assets/images/play.png"
import dots from "../../assets/images/dots.webp"
import Card from "./ArtistCard"


function Artists() {
  return (
    <div id={styles.container} className={styles.art}>
            <div className={styles.profile}>


                <div className={styles.verify}>
                <img id={styles.icon} src={badge}></img>
                <h3 className={styles.vtext}>Verified Artist</h3>
                </div>    

                <h1 className={styles.name}>Muhab</h1>

                <h1 className={styles.monthly}>500,467 monthly listeners</h1>


            </div>
            <div id={styles.container2}>

              <div className={styles.buttons}>
                 <button class={styles.btn1} >
                     <img id ={styles.btn}src={play}></img>
                  </button>
                  <button className={styles.follow}>Follow</button>
                  <button className={styles.dotbtn}> <img class ={styles.dot}src={dots}></img></button>
                  <h1 className={styles.popular}>Popular</h1>

              </div> 

              
              <h1 className={styles.popular}>Popular</h1>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              
              
              

          

            </div>
           
    </div>
  )
}

export default Artists
