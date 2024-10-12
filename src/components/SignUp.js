import React from 'react'
import './SignUp.css'
import google from '../images/google.png'
import fb from'../images/fb.png'
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
        <div class="socials"><button id='b1'><img src={fb}/>Continue with facebook</button></div> 
        <div class="socials"><button id='b2'><img src={apple}/>continue with apple</button></div>
        <div class="socials"><button id='b3'> <img src={google}/> Continue with Google</button></div>
        </div>
    </div>
  )
}

export default Signin