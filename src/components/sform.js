import React from 'react'
import './sform.css'
import google from '../images/google.png'
import fb from'../images/fb.png'
import apple from '../images/apple.png'
function sform() {
  return (
    <div class ="buttons">
     <div class="socials"><button id='b1'><img src={fb}/>Continue with facebook</button></div> 
     <div class="socials"><button id='b2'><img src={apple}/>continue with apple</button></div>
     <div class="socials"><button id='b3'> <img src={google}/> Continue with Google</button></div>
    </div>
  )
}

export default sform
