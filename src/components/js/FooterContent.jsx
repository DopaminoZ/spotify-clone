import React from 'react'
import styles from '../css/FooterContent.module.css'
import twitter from '../../assets/images/twitter.png'
import fb from '../../assets/images/facebookfooter.png'
import insta from '../../assets/images/instagram.png'
function FooterContent() {
  return (
    <div className={styles.container}>
        <div id={styles.upper}>
            <div id={styles.lists}>
            <div className={styles.list}>
                <p className={styles.title}>Company</p>
                <p className={styles.content}>About</p>
                <p className={styles.content}>Jobs</p>
                <p className={styles.content}>For the Record</p>
            </div>
            <div className={styles.list}>
                <p className={styles.title}>Communities</p>
                <p className={styles.content}>For Artists</p>
                <p className={styles.content}>Developers</p>
                <p className={styles.content}>Advertising</p>
                <p className={styles.content}>Investors</p>
                <p className={styles.content}>Vendors</p>
            </div>
            <div className={styles.list}>
                <p className={styles.title}>Useful links</p>
                <p className={styles.content}>Support</p>
                <p className={styles.content}>Free Mobile App</p>
            </div>
            <div className={styles.list}>
                <p className={styles.title}>Voldemort Plans</p>
                <p className={styles.content}>Premium Individual</p>
                <p className={styles.content}>Premium Duo</p>
                <p className={styles.content}>Premium Family</p>
                <p className={styles.content}>Premium Student</p>
                <p className={styles.content}>Voldemort Free</p>
            </div>
            </div>
        <div id={styles.social}>
        <button className={styles.homebtn}>
        <img src={insta} className={styles.homeimg} />
        </button>
        <button className={styles.homebtn}>
        <img src={twitter} className={styles.homeimg} />
        </button>
        <button className={styles.homebtn}>
        <img src={fb} className={styles.homeimg} />
        </button>
        </div>
        </div>
        <div class={styles.divider}></div>
        <div id={styles.lower}>
            <div id={styles.links}>
            <p className={styles.lowercontent} >Legal</p>
            <p className={styles.lowercontent} >Safety & Privacy Center</p>
            <p className={styles.lowercontent} >Privacy Policy</p>
            <p className={styles.lowercontent} >Cookies</p>
            <p className={styles.lowercontent} >About Ads</p>
            <p className={styles.lowercontent} >Accessibility</p>
            </div>
            <div id={styles.copyright}>
                © 2024 Voldemort AB
            </div>
        </div>
    </div>
  )
}

export default FooterContent