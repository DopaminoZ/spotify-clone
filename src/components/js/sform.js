import React from 'react';
import '../css/sform.css';
import styles from "../css/sformbackground.module.css";
import google from '../../assets/images/Google_Icons-09-512.png';
import fb from '../../assets/images/facebook.png';
import apple from '../../assets/images/applelogo.png';
import {Link} from 'react-router-dom'

function Sform() {
  return (
    <div id="container2">
      <div className="buttons">
      <div className="socials">
        <button id="b1">
          <img src={fb} alt="Facebook" /> Continue with Facebook
        </button>
      </div> 
      <div className="socials">
        <button id="b2">
          <img src={apple} alt="Apple" /> Continue with Apple
        </button>
      </div>
      <div className="socials">
        <button id="b3">
          <img src={google} alt="Google" /> Continue with Google
        </button>
      </div>

     
      <div className="divider-container">
        <div className="line"></div>
        <div className="text">OR</div>
        <div className="line"></div>
      </div>
      <div className="acc">
          <div className="boxes"> <h1 id="email">Email address or username</h1>
          <input type="text" placeholder="Email address or username" id="input-box1" />
          <h1 id="pass">Password</h1>
          <input type="password" placeholder="Password" id="input-box" />
          </div>
        
       
         
         <a href='' id="forg">Forget your password?</a>
         <button id="logi" >LOG IN</button>
         <div className="rem">
         <input type="checkbox" id="myCheckbox" name="myCheckbox" />
         <div id="agree">Remember me</div>
      </div>
      <div id="line2"></div>
      <h1 id="don">Don't have an account?</h1>
      </div>
      <Link to="/signup">
      <button id="signup2" >Sign up for spotify</button>
      </Link>
      </div>
    </div>
    
  );
}

export default Sform;
