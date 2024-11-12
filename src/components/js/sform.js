import React from 'react';
import styles from '../css/sform.module.css';
import google from '../../assets/images/Google_Icons-09-512.png';
import fb from '../../assets/images/facebook.png';
import apple from '../../assets/images/applelogo.png';
import { Link } from 'react-router-dom';

function Sform() {
  return (
    <div id={styles.container2}>
      <div className={styles.buttons}>
        <div className={styles.socials}>
          <button id={styles.b1}>
            <img src={fb} alt="Facebook" /> Continue with Facebook
          </button>
        </div>
        <div className={styles.socials}>
          <button id={styles.b2}>
            <img src={apple} alt="Apple" /> Continue with Apple
          </button>
        </div>
        <div className={styles.socials}>
          <button id={styles.b3}>
            <img src={google} alt="Google" /> Continue with Google
          </button>
        </div>

        <div className={styles.dividercontainer}>
          <div className={styles.line}></div>
          <div className={styles.text}>OR</div>
          <div className={styles.line}></div>
        </div>
        <div className={styles.acc}>
          <div className={styles.boxes}>
            <h1 id={styles.email}>Email address or username</h1>
            <input type="text" placeholder="Email address or username" id={styles.inputbox1} />
            <h1 id={styles.pass}>Password</h1>
            <input type="password" placeholder="Password" id={styles.inputbox} />
          </div>
          <div>
          <a href='' id={styles.forg}>Forget your password?</a>
          <button id={styles.logi}>LOG IN</button>
          <div className={styles.rem}>
            <input type="checkbox" id={styles.myCheckbox} name="myCheckbox" />
            <div id={styles.agree}>Remember me</div>
          </div>
          <div id={styles.line2}></div>
          <h1 id={styles.don}>Don't have an account?</h1>
        </div>
        </div>
        <Link to="/signup">
          <button id={styles.signup2}>Sign up for Spotify</button>
        </Link>
      </div>
    </div>
  );
}

export default Sform;
