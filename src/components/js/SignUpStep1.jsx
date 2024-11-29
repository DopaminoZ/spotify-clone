import React, { useEffect, useState } from 'react'
import styles from '../css/SignUpStep1.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import {ReactComponent as Eyeclosed} from '../../assets/images/eyeclosed.svg'
import {ReactComponent as Eyeopen} from '../../assets/images/eyeopen.svg'
import {ReactComponent as CheckDone} from '../../assets/images/checkdone.svg'
import {ReactComponent as CheckUndone} from '../../assets/images/checkundone.svg'
import {Link} from 'react-router-dom'

function SignUp2( { formData, onFormDataChange, history } ) {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isPasswordValid1, setIsPasswordValid1] = useState(false);
    const [isPasswordValid2, setIsPasswordValid2] = useState(false);
    const [isPasswordValid3, setIsPasswordValid3] = useState(false);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*[\d\W]).{10,}$/;
    const passwordRegex2 = /^(?=.*[\d\W]).*$/;;
    const passwordRegex3 = /^(?=.*[A-Za-z]).*$/;

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };
    const goNext = () => {
      if(isPasswordValid() && formData.password){
        history.push('/signup/step=2');
      }
    };
    const isPasswordValid = () => {
      return passwordRegex.test(formData.password) && formData.password;
    };
    const checkPasswordValid1 = () => {
      setIsPasswordValid1 (passwordRegex3.test(formData.password));
    }
    const checkPasswordValid2 = () => {
      setIsPasswordValid2 (passwordRegex2.test(formData.password));
    }
    const checkPasswordValid3 = () => {
      setIsPasswordValid3 (formData.password.length>=10);
    };
    useEffect(() => {
      checkPasswordValid1();
      checkPasswordValid2();
      checkPasswordValid3();
      console.log(isPasswordValid1, isPasswordValid2, isPasswordValid3)
    }, [formData.password]);
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
            <Link to="/signup">
             <svg id={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#b3b3b3" /></svg>
            </Link>
             </div>
            <div id={styles.innertop} >
                <p>Step 1 of 3</p>
                <p style={{color: "white"}}>Create a password</p>
            </div>
        </div>
        <div id={styles.inputdiv}>
            <label>Password</label>
            <div id={styles.passbox}>
            <input  type={isPasswordVisible ? "text" : "password"} value={formData.password}
        onChange={(e) => onFormDataChange('password', e.target.value)} ></input>
              <div onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Eyeopen id={styles.eyevisible}/> : <Eyeclosed id={styles.eyedisable} />}
              </div>
            </div>
        </div>
        <div id={styles.requirements}>
          <p id={styles.req}>Your password must contain atleast</p>
          <p>{isPasswordValid1 ? <CheckDone className={styles.checks}/> : <CheckUndone className={styles.checks}/> }&nbsp;&nbsp;&nbsp;&nbsp;1 letter</p>
          <p>{isPasswordValid2 ? <CheckDone className={styles.checks}/> : <CheckUndone className={styles.checks}/> }&nbsp;&nbsp;&nbsp;&nbsp;1 number or special character (example: # ? ! &)</p>
          <p>{isPasswordValid3 ? <CheckDone className={styles.checks}/> : <CheckUndone className={styles.checks}/> }&nbsp;&nbsp;&nbsp;&nbsp;10 characters</p>
        </div>
        <div className={styles.socials}><button onClick={goNext} id={styles.next}>Next</button></div> 
        <label id={styles.disclaimer}>This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
    </div>
  )
}
export default SignUp2