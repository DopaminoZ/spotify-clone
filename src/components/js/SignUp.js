import React, { useEffect, useState } from 'react'
import styles from '../css/SignUp.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import google from '../../assets/images/Google_Icons-09-512.png'
import fb from'../../assets/images/facebook.png'
import apple from '../../assets/images/applelogo.png'
import SignUpS1 from "./SignUpStep1.jsx";
import SignUpS2 from "./SignUpStep2.jsx";
import SignUpS3 from "./SignUpStep3.jsx";
import {Link, Switch, Route, useHistory} from 'react-router-dom'

function SignUp() {
  // useEffect = (() => {
  //   document.title = "Sign up - Spotify";
  // });
  const history = useHistory();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    dob: {
      day: '',
      month: '',
      year: ''
    },
    gender: '',
    terms: false,
    sharedata: false
  });

  const handleFormDataChange = (name, value) => {
    if (name === 'day' || name === 'month' || name === 'year') {
      setFormData({
        ...formData,
        dob: {
          ...formData.dob,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    console.log(formData);
  };
  const [isEmailValid, setEmailValid] = useState(false);
  const checkEmailValid = () => {
     setEmailValid (emailRegex.test(formData.email));
  };
  useEffect(() => {
    checkEmailValid()
    console.log(isEmailValid)
  },[handleFormDataChange]);
  const goNext = () => {
      if(isEmailValid && formData.email){
        history.push('/signup/step=1');
      }
  };
  return (
      <div>
        <form>
        <Switch>
          <Route exact path="/signup/step=1">
            <SignUpS1 formData={formData} onFormDataChange={handleFormDataChange} history={history}/>
          </Route>
          <Route exact path="/signup/step=2">
            <SignUpS2 formData={formData} onFormDataChange={handleFormDataChange} history={history}/>
          </Route>
          <Route exact path="/signup/step=3">
            <SignUpS3 formData={formData} onFormDataChange={handleFormDataChange} history={history}/>
          </Route>
          <Route path="/signup">
        <div id={styles.container}>
        <div className={styles.headersignuplogo}>
        <img src={logo} className={styles.signuplogo}/>
        </div>
        <div><h1 id={styles.signuptitle}>Sign up to <br/>
            start listening</h1></div>
        <div id={styles.emailcontainer}><label id={styles.email}>Email address</label>
        <input type="text" placeholder="name@domain.com" value={formData.email}
                  onChange={(e) => handleFormDataChange('email', e.target.value)} ></input>
        { !isEmailValid && formData.email && <p style={{fontSize:14, textAlign:'left',alignSelf: 'flex-start', paddingTop:0, paddingBottom: 0, color: "#f3727f"}} >This email is invalid. Make sure it’s written like example@email.com</p> }
        <label><a href="" id={styles.use}>Use phone number instead.</a></label></div>
        <div className ={styles.buttons}>

        <div className={styles.socials}><button type="button" onClick={goNext} id={styles.next}>Next</button></div> 

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
        </Route>
        </Switch>
        </form>
      </div>
  )
}

export default SignUp