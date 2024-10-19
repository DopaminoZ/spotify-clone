import React from 'react'
import logo from '../../assets/images/spotify-white-icon.png'
import styles from '../css/Headersignup.module.css'
function Headersignup() {
  return (
    <div className={styles.headersignuplogo}>
    <img src={logo} className={styles.signuplogo}/>
    </div>
  )
}

export default Headersignup