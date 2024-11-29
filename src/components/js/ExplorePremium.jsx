import FooterContent from "./FooterContent";
import styles from "../css/ExplorePremium.module.css";
import check from "../../assets/images/checkdone.svg";
const Premuim = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstdiv}>
        <div className={styles.firsttext}>
          <p className={styles.firstsentence}>
            EGP 0.00 for 3 months of Premium
          </p>
          <p className={styles.secondsentence}>
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </p>
        </div>
        <div className={styles.firstdivbtns}>
          <button className={styles.getpremuimbtn}>Get Started</button>
          <button className={styles.plansbtn}>View all plans</button>
        </div>
        <p className={styles.termsapply}>Terms apply</p>
      </div>
      <div className={styles.seconddiv}>
        <p className={styles.firstsentence}>
          Affordable plans for any situation
        </p>
        <p className={styles.secondsentence}>
          Choose a premium plan and listen to ad-free music without limits on
          your phone, speaker, and other devices.Pay in various ways.Cancel
          anytime.
        </p>
        <div className={styles.paymentmethods}>
          <button className={styles.paymentmethodbtn}>
            <img src="" alt="" />
          </button>
          <button className={styles.paymentmethodbtn}>
            <img src="" alt="" />
          </button>
          <button className={styles.paymentmethodbtn}>
            <img src="" alt="" />
          </button>
          <button className={styles.paymentmethodbtn}>
            <img src="" alt="" />
          </button>
        </div>
      </div>
      <p className={styles.morepay}>+2 more</p>
      <div className={styles.includecontainer}>
        <p className={styles.allstatment}>All Premium plans include</p>
        <div className={styles.checkscontainer}>
          <div className={styles.checks}>
            <img src={check} alt="" className={styles.checkicon} />
            <img src={check} alt="" className={styles.checkicon} />
            <img src={check} alt="" className={styles.checkicon} />
            <img src={check} alt="" className={styles.checkicon} />
            <img src={check} alt="" className={styles.checkicon} />
            <img src={check} alt="" className={styles.checkicon} />
          </div>
          <div className={styles.checkstxt}>
            <p>Ad-free music listening</p>
            <p>Download to listen offline</p>
            <p>Play songs in any order</p>
            <p>High audio quality</p>
            <p>Listen with friends in real time</p>
            <p>Organize listening queue</p>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <FooterContent />
      </div>
    </div>
  );
};

export default Premuim;
