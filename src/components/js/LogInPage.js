import React from 'react';
import styles from '../css/LogInPage.module.css';
import google from '../../assets/images/Google_Icons-09-512.png';
import fb from '../../assets/images/facebook.png';
import apple from '../../assets/images/applelogo.png';
import logo from '../../assets/images/spotify-white-icon.png'
import { Link } from 'react-router-dom';

function LogInPage() {
  return (
    <div id={styles.background}>
    <div id={styles.container}>
        <img src={logo} className={styles.logo}></img>  
        <h1 className={styles.logintext}>Log in to Spotify</h1>
        <div className={styles.buttonscontainer}>
        <button className={styles.buttons} ><img className ={styles.img1} id={styles.google} src={google}/>Continue with Google</button>
        <button className={styles.buttons}><img className ={styles.img1} id={styles.facebook}src={fb}/>Continue with Facebook</button>
        <button className={styles.buttons}><img className ={styles.img1}id={styles.apple}src={apple}/>Continue with Apple</button>
        <button className={styles.buttons}><div className={styles.spacing}/>Continue with phone number</button>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.inputs}>

          <h2 className={styles.text} id={styles.email}>Email or username</h2>  
          <input type="text" placeholder="Email or username" className={styles.box}></input>

          <h2 className={styles.text}id={styles.password}>Password</h2>
          <input type="text"  placeholder="Password"className={styles.box} id={styles.passbox}></input>
        
        </div>
          <buttons className={styles.login}>Log In</buttons>

          <a href="/"className={styles.forget}>Forgot your password?</a>
        <div className={styles.signup}>
          <h1 id={styles.dont}>Don't have an account?</h1>
          <Link to="/signup">
          <h1 className={styles.sign}>Sign up for Spotify</h1>
          </Link>
        </div>
      </div>
      </div>
  );
}

export default LogInPage;
