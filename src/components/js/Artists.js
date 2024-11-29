import React from 'react'
import styles from "../css/Artists.module.css"
import badge from "../../assets/images/badge.webp"
import play from "../../assets/images/play.png"
import dots from "../../assets/images/dots.webp"
import Card from "./ArtistCard";
import Card2 from "./Scard";
import Circlecard from "./CircleCard"
import photo from "../../assets/images/channels4_profile.jpg"




function Artists( {widthz}) {
  return (
    <div id={styles.container} className={styles.art} style={{width: widthz}}>
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
              
              <h2 className={styles.see}>See more</h2>
              
              <h2 className={styles.disco}>Discography</h2>
              <div className={styles.dcontainer}>

                <button className={styles.dbuttons} id={styles.popular}>Popular releases</button>
                <button className={styles.dbuttons}id={styles.albums}>Albums</button>
                <button className={styles.dbuttons}id={styles.singles}>Singles and Eps</button>
              </div>

              <div className={styles.epcards}>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
                
               


              </div>

              <h2 className={styles.head}>Featuring Muhab</h2>
              <div className={styles.epcards}>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
                
              </div>
              <h2 id={styles.fans} className={styles.head}>Fans also like</h2>
              <div className={styles.epcards}>
                
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               
                
                </div>

                <h2 className={styles.head} id={styles.appear}>Appears on</h2>
              <div className={styles.epcards}>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
                
              </div>

              <h2 className={styles.head} id={styles.appear}>Artist Playlist</h2>
              <div className={styles.epcards}>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
                
              </div>

              <h2 className={styles.head} id={styles.appear}>Discoverd On</h2>
              <div className={styles.epcards}>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                <Card2/>
                
                
              </div>
              <h1 className={styles.about}>About</h1>

              <div className={styles.aboutbox}>
              <img id={styles.imagebox} src={photo}></img>
              <h1 className={styles.monthlylisten}>500,467 monthly listeners</h1>
              <h1 className={styles.par}>A rapper and a songwriter born and raised in Cairo, Egypt. Muhab Ahmed Elsadat is an Egyptian artist who represents Egypt and specifically Cairo, and is well known for his ability to create diverse types of music, unique catchy flows and emotionally moving lyrics that the youth can relate to.Apr</h1>


              </div>

            </div>
           
    </div>
  )
}

export default Artists
