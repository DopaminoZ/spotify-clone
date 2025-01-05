import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styles from "../css/ListCard.module.css"
import play from "../../assets/images/play.png"
function ListCard({playlist, wid}) {

  return (
    <Link to={`/playlist/${playlist.id}`}>
    <div id={styles.container} >
        <img id={styles.image} src={playlist.images[0].url} style={{width: wid == '53.2vw' ? '150px' : '215px',height: wid == '53.2vw' ? '150px' : '215px'}} ></img>
        <p id={styles.description}>{playlist.name} - {playlist.owner.display_name}</p>
        <button id={styles.playbutton} style={{width: wid == '53.2vw' ? '45px' : '55px',height: wid == '53.2vw' ? '45px' : '55px'
          ,marginTop: wid == '53.2vw' ? '100px' : '150px',
          marginLeft: wid == '53.2vw' ? '100px' : '150px'
        }}><img src={play} style= {{marginLeft: wid == '53.2vw' ? '2px' : '7px'}} /></button>
    </div>
    </Link>
  )
}
 
export default ListCard