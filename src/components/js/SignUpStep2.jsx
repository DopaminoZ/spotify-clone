import React, { useEffect, useState } from 'react'
import styles from '../css/SignUpStep2.module.css'
import logo from '../../assets/images/spotify-white-icon.png'
import {Link} from 'react-router-dom'

function SignUp2( { formData, onFormDataChange, history } ) {
  const goNext = () => {
    if(formData.name && formData.dob.year && formData.dob.month && formData.dob.day && formData.gender && isValidDay(formData.dob.day, formData.dob.month) && isValidGender(formData.gender)){
      history.push('/signup/step=3');
    }
  };
  function isValidDay(day, month, year = new Date().getFullYear()) {
    // Months are 1-indexed (1 = January, 12 = December)
    const daysInMonth = [
      31, // January
      28, // February (default)
      31, // March
      30, // April
      31, // May
      30, // June
      31, // July
      31, // August
      30, // September
      31, // October
      30, // November
      31, // December
    ];
    // Adjust for leap year in February
    if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
      daysInMonth[1] = 29; // February has 29 days in a leap year
    }
    // Check if month is valid (1-12) and day is within the range for the given month
    return month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1];
  }
  function isValidGender(x){
    return (x === 'Man' || x === 'Woman')
  }

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
              <Link to="/signup/step=1">
             <svg id={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" fill="#b3b3b3" /></svg>
             </Link>
             </div>
            <div id={styles.innertop} >
                <p>Step 2 of 3</p>
                <p style={{color: "white"}}>Tell us about yourself</p>
            </div>
        </div>
        <div id={styles.inputdiv}>
            <label>Name</label>
            <p style={{margin:0, alignSelf:"flex-start", color: "#b3b3b3", fontSize: 14, paddingTop: 5, paddingBottom: 5}}>This name will appear on your profile</p>
            <div id={styles.passbox}>
            <input type="text" value={formData.name}
        onChange={(e) => onFormDataChange('name', e.target.value)}></input>
            </div>
        </div>
        <div id={styles.datediv}>
            <label>Date of birth</label>
            <p style={{margin:0, alignSelf:"flex-start", color: "#b3b3b3", fontSize: 14, paddingTop: 5, paddingBottom: 10}}>Why do we need your date of birth? Learn more.</p>
            <div id={styles.datebox}>
            <input id={styles.dd} placeholder='dd' type="number" value={formData.dob.day}
        onChange={(e) => onFormDataChange('day', e.target.value)} ></input> 
            <select placeholder='mm' id={styles.mm} value={formData.dob.month}
        onChange={(e) => onFormDataChange('month', e.target.value)}>
              <option selected hidden >Month</option>
              <option value='1'>January</option>
              <option value='2'>Feburary</option>
              <option value='3'>March</option>
              <option value='4'>April</option>
              <option value='5'>May</option>
              <option value='6'>June</option>
              <option value='7'>July</option>
              <option value='8'>August</option>
              <option value='9'>September</option>
              <option value='10'>October</option>
              <option value='11'>November</option>
              <option value='12'>December</option>
            </select> 
            <input id={styles.yyyy} placeholder='yyyy' type="number" value={formData.dob.year}
        onChange={(e) => onFormDataChange('year', e.target.value)}  ></input>
            </div>
            {!isValidDay(formData.dob.day, formData.dob.month) && <div style={{alignSelf: 'flex-start', paddingTop:20, color: "#f3727f"}}>Invalid day/month</div>}
        </div>
        <div id={styles.genderdiv} >
            <label>Gender</label>
            <p id={styles.genderpara} >We use your gender to help personalise our
             content recommendations and ads for you.</p>
             <div id={styles.genderrb}>
             <input required type="radio" name="gender" checked={ formData.gender === "Man" } value="Man"
              onChange={(e) => onFormDataChange('gender', e.target.value)}/>
             <label>
             Man
            </label>
            <input required type="radio" name="gender" value="Woman" checked={ formData.gender === "Woman" }
              onChange={(e) => onFormDataChange('gender', e.target.value)}/> 
            <label>
             Woman
            </label> 
            </div>
        </div>
        <div className={styles.socials}><button type="button" id={styles.next} onClick={goNext}>Next</button></div> 
        <label id={styles.disclaimer}>This site is a clone and isn't meant to break any kind of copyright or laws.<br/>But only to showcase a project.</label>
    </div>
  )
}
export default SignUp2