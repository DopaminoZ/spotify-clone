import React, { useEffect } from 'react'
import styles from '../css/SignUp.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import google from '../../assets/images/Google_Icons-09-512.png'
import fb from'../../assets/images/facebook.png'
import apple from '../../assets/images/applelogo.png'
import {Link} from 'react-router-dom'
function SignUp() {
  // useEffect = (() => {
  //   document.title = "Sign up - Spotify";
  // });

  return (
    <div id={styles.container}>
        <div className={styles.headersignuplogo}>
        <img src={logo} className={styles.signuplogo}/>
        </div>
        <div><h1 id={styles.signuptitle}>Sign up to <br/>
            start listening</h1></div>
        <div id={styles.emailcontainer}><label id={styles.email}>Email address</label>
        <input type="text" placeholder="name@domain.com"></input>
        <label><a href="" id={styles.use}>Use phone number instead.</a></label></div>
        <div className ={styles.buttons}>
        <div className={styles.socials}><button id={styles.next}>Next</button></div> 
        <div className={styles.dividercontainer}>
        <div className={styles.line}></div>
        <div className={styles.text}>or</div>
        <div className={styles.line}></div>
      </div>
        <div className={styles.socialbuttons}>
        <div className={styles.socials}><button className={styles.loginbuttons} id={styles.b33}> <img src={google}/> Sign up with Google</button></div>
        <div className={styles.socials}><button className={styles.loginbuttons} id={styles.b11}><img src={fb}/>Sign up with Facebook</button></div> 
        <div className={styles.socials}><button className={styles.loginbuttons} id={styles.b22}><img src={apple}/>Sign up with Apple</button></div>
        </div>
        <div className={styles.enddivider}></div>
        <label id={styles.already}>Already have an account? <Link to="/login"> <a id={styles.here}>Log in here</a></Link>.</label>
        <label id={styles.disclaimer}>This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
        </div>

    </div>
  )
}

export default SignUp