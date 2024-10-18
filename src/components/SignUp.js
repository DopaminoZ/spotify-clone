import React, { useEffect } from 'react'
import './SignUp.css'
import google from '../images/Google_Icons-09-512.png'
import fb from'../images/facebook.png'
import apple from '../images/applelogo.png'
function Signin() {
  // useEffect = (() => {
  //   document.title = "Sign up - Spotify";
  // },[]);
  //Changing title
  return (
    <div id="container">
        <div><h1 id="signuptitle">Sign up to <br/>
            start listening</h1></div>
        <div id="email-container"><label id="email">Email address</label>
        <input type="text" placeholder="name@domain.com"></input>
        <label><a href="" id="use">Use phone number instead.</a></label></div>
        <div className ="buttons">
        <div className="socials"><button id='next'>Next</button></div> 
        <div className="or-divider">or</div>
        <div className="socialbuttons">
        <div className="socials"><button className="login-buttons" id='b33'> <img src={google}/> Sign up with Google</button></div>
        <div className="socials"><button className="login-buttons" id='b11'><img src={fb}/>Sign up with Facebook</button></div> 
        <div className="socials"><button className="login-buttons" id='b22'><img src={apple}/>Sign up with Apple</button></div>
        </div>
        <div className="end-divider"></div>
        <label id="already">Already have an account? <a href="" id="here">Log in here</a>.</label>
        <label id="disclaimer">This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
        </div>
        
    </div>
  )
}

export default Signin