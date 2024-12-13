import React, { useEffect, useState } from 'react';
import styles from '../css/LogInPage.module.css';
import google from '../../assets/images/Google_Icons-09-512.png';
import fb from '../../assets/images/facebook.png';
import apple from '../../assets/images/applelogo.png';
import logo from '../../assets/images/spotify-white-icon.png'
import { Link } from 'react-router-dom';
import {ReactComponent as Eyeclosed} from '../../assets/images/eyeclosed.svg'
import {ReactComponent as Eyeopen} from '../../assets/images/eyeopen.svg'
import axios from 'axios'


function LogInPage() {
  const ex = <svg xmlns="http://www.w3.org/2000/svg" style={{width:15, height:15, marginTop:10}} viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" fill= "#ffffff"/></svg>
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const [isEmailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState('');
  const checkEmailValid = async () => {
    if (formData.email && emailRegex.test(formData.email)) {
      try {
        const response = await axios.post('http://localhost:4000/api/express/check-email', { email: formData.email });
        setEmailValid(false)
        setEmailError('No account exists with this email...')
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setEmailError('Invalid password.');
          setEmailValid(true);
        }
      }
    } else {
      setEmailError('Incorrect email or password.');
      setEmailValid(false);
    }
  };

  const handleFormDataChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    console.log(formData);
  };
  useEffect(()=>{

checkEmailValid();
console.log(isEmailValid);

  },[formData])

  return (
    <div id={styles.background}>
    <div id={styles.container}>
        <img src={logo} className={styles.logo}></img>  
        <h1 className={styles.logintext}>Log in to Spotify</h1>
        {(!isEmailValid && formData.email || formData.password.length<10) &&  <div className={styles.notvalid} style={{backgroundColor:"#e9142a",textAlign:"left",width:650,marginBottom:20}}>
          
          <h1 style={{fontSize:14,marginLeft:60,fontWeight:100}}> {ex} {emailError}</h1>

        </div>


        }




        <div className={styles.buttonscontainer}>
        <button className={styles.buttons} ><img className ={styles.img1} id={styles.google} src={google}/>Continue with Google</button>
        <button className={styles.buttons}><img className ={styles.img1} id={styles.facebook}src={fb}/>Continue with Facebook</button>
        <button className={styles.buttons}><img className ={styles.img1}id={styles.apple}src={apple}/>Continue with Apple</button>
        <button className={styles.buttons}><div className={styles.spacing}/>Continue with phone number</button>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.inputs}>

          <h2 className={styles.text} id={styles.email}>Email or username</h2>  
          <input type="text"  onChange={(e)=>{handleFormDataChange('email',e.target.value)}} 
          placeholder="Email or username" className={styles.box}></input>
          
          <div id={styles.inputdiv}>
            <label>Password</label>
            <div id={styles.passbox}>
            <input placeholder="Password" type={isPasswordVisible ? "text" : "password"} value={formData.password}
        onChange={(e) => handleFormDataChange('password', e.target.value)} ></input>
              <div onClick={togglePasswordVisibility}>
              {isPasswordVisible ? <Eyeopen id={styles.eyevisible}/> : <Eyeclosed id={styles.eyedisable} />}
              </div>
            </div>
        </div>
        
        </div>
          <button className={styles.login}>Log In</button>

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
