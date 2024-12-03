import FooterContent from "./FooterContent";
import styles from "../css/ExplorePremium.module.css";
import check from "../../assets/images/check.png";
import logo from "../../assets/images/spotify-white-icon.png";
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
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.topdiv}>
            <div className={styles.cardhead}>
              <img src={logo} alt="" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
            <p className={styles.plannamemini}>Mini</p>
            <p>EGP 15 for 1 week</p>
          </div>
          <hr />
          <div className={styles.cardlist}>
            <ul>
              <li>1 mobile-only Premium account</li>
              <li>Offline listening of up to 30 songs on 1 device </li>
              <li>One-time payment</li>
              <li>Basic audio quality </li>
            </ul>
            <button className={styles.cardbtn1}>Get Premium Mini</button>
            <p className={styles.terms}>
              <span>Terms apply</span>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topdiv}>
            <div className={styles.cardhead}>
              <img src={logo} alt="" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
            <p className={styles.plannameindividual}>Individual</p>
            <div>
              <p>Free for 3 months</p>
              <p>EGP 69.99 / month after</p>
            </div>
          </div>
          <hr />
          <div className={styles.cardlist}>
            <ul>
              <li>1 Premium account</li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <button className={styles.cardbtn2}>Try free for 3 months</button>
            <p className={styles.terms}>
              Free for 3 months, then EGP 69.99 per month after. Offer only
              available if you haven't tried Premium before.
              <span>Terms apply.</span> Offer ends December 31, 2024.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topdiv}>
            <div className={styles.cardhead}>
              <img src={logo} alt="" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
            <p className={styles.plannamestudent}>Student</p>
            <p>Free for 1 month</p>
            <p>EGP 34.99 / month after </p>
          </div>
          <hr />
          <div className={styles.cardlist}>
            <ul>
              <li>1 verified Premium account</li>
              <li>Discount for eligible students</li>
              <li>Cancel anytime</li>
            </ul>
            <button className={styles.cardbtn3}>Try free for 1 month</button>
            <p className={styles.terms}>
              Free for 1 month, then EGP 34.99 per month after. Offer available
              only to students at an accredited higher education institution and
              if you haven't tried Premium before.<span> Terms apply.</span>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topdiv}>
            <div className={styles.cardhead}>
              <img src={logo} alt="" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
            <p className={styles.plannameduo}>Duo</p>
            <p>EGP 89.99 / month</p>
          </div>
          <hr />
          <div className={styles.cardlist}>
            <ul>
              <li>2 Premium accounts</li>
              <li>Cancel anytime </li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <button className={styles.cardbtn4}>Get Premium Duo</button>
            <p className={styles.terms}>
              For couples who reside at the same address.
              <span>Terms apply.</span>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.topdiv}>
            <div className={styles.cardhead}>
              <img src={logo} alt="Spotify Logo" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
            <p className={styles.plannamefamily}>Family</p>
            <p>EGP 109.99 / month</p>
          </div>
          <hr />
          <div className={styles.cardlist}>
            <ul>
              <li>Up to 6 Premium accounts </li>
              <li>Control content marked as explicit </li>
              <li>Cancel anytime</li>
              <li>Subscribe or one-time payment</li>
            </ul>
            <button className={styles.cardbtn5}>Get Premium Family</button>
            <p className={styles.terms}>
              For up to 6 family members residing at the same address.
              <span>Terms apply.</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.benefits}>
          <p>What you'll get</p>
          <div className={styles.benefitstop}>
            <p className={styles.midtitle}>Spotify's Free plan</p>
            <div className={styles.cardhead}>
              <img src={logo} alt="Spotify Logo" className={styles.cardlogo} />
              <p className={styles.title}>Premium</p>
            </div>
          </div>
        </div>
        <div className={styles.benefits}>
          <p>Ad-free music listening</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
        <div className={styles.benefits}>
          <p>Download songs</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
        <div className={styles.benefits}>
          <p>Play songs in any order</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
        <div className={styles.benefits}>
          <p>High quality audio</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
        <div className={styles.benefits}>
          <p>Listen with friends in real time</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
        <div className={styles.benefits}>
          <p>Organize listening queue</p>
          <p>---</p>
          <img src={check} alt="" className={styles.benefitsicon} />
        </div>
      </div>
      <div className={styles.footer}>
        <FooterContent />
      </div>
    </div>
  );
};

export default Premuim;
