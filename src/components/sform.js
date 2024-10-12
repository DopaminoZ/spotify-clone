import React from 'react';
import './sform.css';
import google from '../images/google.png';
import fb from '../images/fb.png';
import apple from '../images/apple.png';

function Sform() {
  return (
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

      {/* Divider with "GO" text */}
      <div className="divider-container">
        <div className="line"></div>
        <div className="text">OR</div>
        <div className="line"></div>
      </div>
      <div className="acc">
         <h1>Email address or username</h1>
         <input type="text" placeholder="Email address or username" className="input-box" />
         
         <h1 id="pass">Password</h1>
         <input type="password" placeholder="Password" className="input-box" />
         <a href='' id="forg">Forget your password?</a>
         <button id="logi" >LOG IN</button>
         <label>
      <input type="checkbox" id="myCheckbox" name="myCheckbox" />
      <div id="agree">Remember me</div>
      </label>

      </div>
    </div>
  );
}

export default Sform;
