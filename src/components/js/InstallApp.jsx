import React from 'react'
import styles from '../css/InstallApp.module.css'
import containerstyle from "../css/BrowseComponent.module.css"
import laptop from "../../assets/images/installapplaptop.png"
import FooterContent from './FooterContent'
function InstallApp( {widthz} ) {
  return (
    <div id={containerstyle.container} className={styles.container} style={{width: widthz}}>
        <div className={styles.main} style={{marginLeft: widthz == '53.2vw' ? 170 : 377}}>
            <img src={laptop}/>
            <pre>
            Seamlessly listen to music you <br/>
            love. Download the Spotify <br/>
            app for your computer.
            </pre>
            <button id={styles.download}>Get our free app</button>
        </div>
        <FooterContent wid={widthz}/>
    </div>
  )
}

export default InstallApp