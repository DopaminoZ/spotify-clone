import React from 'react'
import styles from "../css/profile.module.css"
import badge from "../../assets/images/badge.webp"
import play from "../../assets/images/play.png"
import dots from "../../assets/images/dots.webp"
import Card from "./ArtistCard";
import Card2 from "./Scard";
import Circlecard from "./CircleCard"
import photo from "../../assets/images/channels4_profile.jpg"
import muhab from"../../assets/images/me.jpeg"




function Profile( {widthz}) {
  return (
    <div id={styles.container} className={styles.art} style={{width: widthz}}>
            <div className={styles.profile}>


                <div className={styles.verify}>
                <img id={styles.pp} src={muhab}></img>
                
                <h3 className={styles.vtext}>Profile</h3>
                <h1 className={styles.name}>Abdelmoneim Amr</h1>
                </div>    

                

                <h1 className={styles.monthly}>10 public lists • 10 followers • 209 following</h1>


            </div>
            <div id={styles.container2}>

              <div className={styles.buttons}>
                 
                  <button className={styles.follow}>Follow</button>
                  <button className={styles.dotbtn}> <img class ={styles.dot}src={dots}></img></button>
                  <h1 className={styles.popular}>Popular</h1>

              </div> 

              
              <h1 className={styles.popular}>Top Artists This Month</h1>
                <div className={styles.artistlist}>
                <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>
               <Circlecard/>

                </div>
              
              
              <h2 className={styles.see}>See more</h2>
              
              <h2 className={styles.disco}>Top Tracks</h2>
          

              <div className={styles.epcards}>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            
              </div>
             
                

             
                
                
              </div>
            

           

         

            </div>
           
    
  )
}




export default Profile
