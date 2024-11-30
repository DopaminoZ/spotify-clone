import React, {useState,useEffect} from 'react'
import styles from "../css/ListCard.module.css"
import play from "../../assets/images/play.png"
function ListCard({album, wid}) {

  return (
    <div id={styles.container} >
        <img id={styles.image} src={album.image} style={{width: wid == '53.2vw' ? '150px' : '215px',height: wid == '53.2vw' ? '150px' : '215px'}} ></img>
        <p id={styles.description}>{album.title} - {album.artist}</p>
        <button id={styles.playbutton} style={{width: wid == '53.2vw' ? '45px' : '55px',height: wid == '53.2vw' ? '45px' : '55px'
          ,marginTop: wid == '53.2vw' ? '100px' : '150px',
          marginLeft: wid == '53.2vw' ? '100px' : '150px'
        }}><img src={play} style= {{marginLeft: wid == '53.2vw' ? '2px' : '7px'}} /></button>
    </div>
  )
}
 
export default ListCard