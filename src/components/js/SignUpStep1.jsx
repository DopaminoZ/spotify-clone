import React, { useEffect, useState } from 'react'
import styles from '../css/SignUpStep1.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import {ReactComponent as Eyeclosed} from '../../assets/images/eyeclosed.svg'
import {ReactComponent as Eyeopen} from '../../assets/images/eyeopen.svg'
import {Link} from 'react-router-dom'

function SignUp2() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };
  return (
    <div className={styles.container}>
        <div className={styles.headersignuplogo}>
        <img src={logo} className={styles.signuplogo}/>
        </div>
        <div className={styles.progresscontainer}>
        <div className={styles.progressbar}>
        <div className={styles.progressfill}></div>
        </div>
        </div>
        <div id={styles.topcont}>
            <div style={{cursor: "pointer"}}>
             <svg id={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#b3b3b3" /></svg>
             </div>
            <div id={styles.innertop} >
                <p>Step 1 of 3</p>
                <p style={{color: "white"}}>Create a password</p>
            </div>
        </div>
        <div id={styles.inputdiv}>
            <label>Password</label>
            <div id={styles.passbox}>
            <input  type={isPasswordVisible ? "text" : "password"} ></input>
              <div onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Eyeopen id={styles.eyevisible}/> : <Eyeclosed id={styles.eyedisable} />}
              </div>
            </div>
        </div>
        <div id={styles.requirements}>
          <p id={styles.req}>Your password must contain atleast</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" fill="#b3b3b3"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;1 letter</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" fill="#b3b3b3"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;1 number or special character (example: # ? ! &)</p>
          <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" fill="#b3b3b3"/></svg>&nbsp;&nbsp;&nbsp;&nbsp;10 characters</p>
        </div>
        <div className={styles.socials}><button id={styles.next}>Next</button></div> 
        <label id={styles.disclaimer}>This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
    </div>
  )
}
export default SignUp2