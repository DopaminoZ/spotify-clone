import React, { useEffect, useState } from 'react'
import styles from '../css/SignUpStep3.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import {Link} from 'react-router-dom'

function SignUp2( { formData, onFormDataChange, history } ) {
  const navtoLogin = (e) => {
    e.preventDefault();
    window.alert('Account created! Log in now.');
    setTimeout(() => {
      history.push('/login');
    }, 500);
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
            <Link to="/signup/step=2">
             <svg id={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#b3b3b3" /></svg>
             </Link>
             </div>
            <div id={styles.innertop} >
                <p>Step 3 of 3</p>
                <p style={{color: "white"}}>Terms & Conditions</p>
            </div>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" className='chk' checked={ formData.terms === true }
              onChange={(e) => onFormDataChange('terms', e.target.checked)}/>
          <p>Please send me news and offers from Spotify</p>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" className='chk' checked={ formData.sharedata === true }
              onChange={(e) => onFormDataChange('sharedata', e.target.checked)}/>
          <p>Share my registration data with Spotify’s content providers for marketing purposes.</p>
        </div>
        <p className={styles.lasttexts}>By clicking on ‘Sign up’, you agree to Spotify’s <p className={styles.links}>Terms and Conditions of Use.</p></p>
        <p className={styles.lasttexts}>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <p className={styles.links}>Spotify’s Privacy Policy.</p></p>
        <div className={styles.socials}><button type="submit" onClick={navtoLogin} id={styles.next}>Sign Up</button></div> 
        <label id={styles.disclaimer}>This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
    </div>
  )
}
export default SignUp2