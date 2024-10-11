import React from 'react'
import './Header.css'
import logo from '../images/spotify-logo.png';
function Header() {
  return (
    <div class="header-logo">
        <img src={logo} class="logo"/>
    </div>
  )
}

export default Header