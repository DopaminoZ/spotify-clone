import React from 'react'
import styles from '../css/Header.module.css'
import logo from '../../assets/images/Spotify-White-Dark-Background-Logo.png';
function Header() {
  return (
    <div className={styles.headerlogo}>
        <img src={logo} className={styles.logo}/>
    </div>
  )
}

export default Header