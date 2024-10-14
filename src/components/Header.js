import React from 'react'
import './Header.css'
import logo from '../images/spotify-white-icon.png';
function Header() {
  return (
    <div className="header-logo">
        <img src={logo} className="logo"/>
    </div>
  )
}

export default Header