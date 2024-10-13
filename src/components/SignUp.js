import React from 'react'
import './SignUp.css'
import google from '../images/Google_Icons-09-512.png'
import fb from'../images/facebook.png'
import apple from '../images/apple.png'
function Signin() {
  return (
    <div id="container">
        <div><h1>Sign up to <br/>
            start listening</h1></div>
        <div><label id="email">Email address</label></div>
        <div><input type="text" placeholder="name@domain.com"></input></div>
        <label><a href="" id="use">Use phone number instead.</a></label>
        <div class ="buttons">
        <div class="socials"><button id='next'>Next</button></div> 
        <div class="or-divider">or</div>
        <div class="socialbuttons">
        <div class="socials"><button id='b33'> <img src={google}/> Sign up with Google</button></div>
        <div class="socials"><button id='b11'><img src={fb}/>Sign up with Facebook</button></div> 
        <div class="socials"><button id='b22'><img src={apple}/>Sign up with Apple</button></div>
        </div>
        <div class="end-divider"></div>
        <label id="already">Already have an account? <a href="" id="here">Log in here</a>.</label>
        
        </div>
        <label id="disclaimer">This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
    </div>
  )
}

export default Signin