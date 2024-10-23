import React from 'react'
import '../css/Header.css'
import logo from '../../assets/images/Spotify-White-Dark-Background-Logo.png';
function Header() {
  return (
    <div className="header-logo">
        <img src={logo} className="logo"/>
    </div>
  )
}

export default Header