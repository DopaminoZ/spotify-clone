import React, { useEffect, useState } from "react";
import styles from "../css/SignUp.module.css";
import logo from "../../assets/images/tarablogo.png";
import google from "../../assets/images/Google_Icons-09-512.png";
import fb from "../../assets/images/facebook.png";
import apple from "../../assets/images/applelogo.png";
import SignUpS1 from "./SignUpStep1.jsx";
import SignUpS2 from "./SignUpStep2.jsx";
import SignUpS3 from "./SignUpStep3.jsx";
import axios from "axios";
import { Link, Switch, Route, useHistory } from "react-router-dom";

function SignUp() {
  // useEffect = (() => {
  //   document.title = "Sign up - Spotify";
  // });
  const ex = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 15, height: 15, marginTop: 10 }}
      viewBox="0 0 512 512"
    >
      <path
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
        fill="#f3727f"
      />
    </svg>
  );
  const history = useHistory();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    dob: {
      day: "",
      month: "",
      year: "",
    },
    gender: "",
    newsletter: false,
    sharedata: false,
    country: "",
    coords: {
      lat: null,
      lon: null,
    },
  });

  const handleFormDataChange = (name, value) => {
    if (name === "day" || name === "month" || name === "year") {
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
  const [emailError, setEmailError] = useState("");
  const checkEmailValid = async () => {
    if (formData.email && emailRegex.test(formData.email)) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/express/check-email",
          { email: formData.email }
        );
        setEmailError(""); // Clear error if email is valid
        setEmailValid(true);
      } catch (error) {
        if (error.response && error.response.status === 400) {
          setEmailError(
            "An account registered with this email already exists."
          );
          setEmailValid(false);
        }
      }
    } else {
      setEmailError(
        "This email is invalid. Make sure it’s written like example@email.com"
      );
      setEmailValid(false);
    }
  };

  useEffect(() => {
    checkEmailValid();
    console.log(isEmailValid);
    if (navigator.geolocation && formData.country == "") {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          //console.log("Updated coords")
          setFormData((prevData) => ({
            ...prevData,
            coords: { lat: latitude, lon: longitude },
          }));
          getCountryFromCoords(latitude, longitude);
        },
        (error) => {
          //console.error('Geolocation error: ', error);
        }
      );
    } else {
      //console.log('Geolocation is not supported by this browser.');
    }
  }, [handleFormDataChange]);

  const goNext = () => {
    if (isEmailValid && formData.email) {
      history.push("/signup/step=1");
    }
  };

  const getCountryFromCoords = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f1705501ccb87744f4b9b5cce2367596`
      );
      const country = response.data.sys.country;
      setFormData((prevData) => ({
        ...prevData,
        country: country,
      }));
    } catch (error) {
      console.error("Error fetching location data: ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      new Date(`${formData.dob.year}-${formData.dob.month}-${formData.dob.day}`)
    );
    try {
      const response = await axios.post(
        "http://localhost:4000/api/express/signup",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          dob: new Date(
            `${formData.dob.year}-${formData.dob.month}-${formData.dob.day}`
          ),
          gender: formData.gender,
          newsletter: formData.newsletter,
          sharedata: formData.sharedata,
          country: formData.country,
          coords: formData.coords,
        }
      );

      console.log("Signup success:", response.data);
      history.push("/login"); // Redirect to login page on successful signup
    } catch (error) {
      // Check if error.response is defined before accessing error.response.data
      if (error.response) {
        console.error("Error during signup:", error.response.data);
        alert("Signup failed. Please try again.");
      } else {
        // Handle cases where error.response is undefined (network issues, etc.)
        console.error("Error during signup:", error.message);
        alert(
          "Network error or server is unreachable. Please try again later."
        );
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route exact path="/signup/step=1">
            <SignUpS1
              formData={formData}
              onFormDataChange={handleFormDataChange}
              history={history}
            />
          </Route>
          <Route exact path="/signup/step=2">
            <SignUpS2
              formData={formData}
              onFormDataChange={handleFormDataChange}
              history={history}
            />
          </Route>
          <Route exact path="/signup/step=3">
            <SignUpS3
              formData={formData}
              onFormDataChange={handleFormDataChange}
              handleSubmit={handleSubmit}
              history={history}
            />
          </Route>
          <Route path="/signup">
            <div id={styles.container}>
              <div className={styles.headersignuplogo}>
                <img src={logo} className={styles.signuplogo} />
              </div>
              <div>
                <h1 id={styles.signuptitle}>
                  Sign up to <br />
                  start listening
                </h1>
              </div>
              <div id={styles.emailcontainer}>
                <label id={styles.email}>Email address</label>
                <input
                  type="text"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    handleFormDataChange("email", e.target.value)
                  }
                ></input>
                {emailError && (
                  <div
                    style={{
                      fontSize: 14,
                      textAlign: "left",
                      alignSelf: "flex-start",
                      paddingTop: 0,
                      paddingBottom: 0,
                      color: "#f3727f",
                    }}
                  >
                    {ex} {emailError}
                  </div>
                )}
                <label>
                  <a href="" id={styles.use}>
                    Use phone number instead.
                  </a>
                </label>
              </div>
              <div className={styles.buttons}>
                <div className={styles.socials}>
                  <button type="button" onClick={goNext} id={styles.next}>
                    Next
                  </button>
                </div>

                <div className={styles.dividercontainer}>
                  <div className={styles.line}></div>
                  <div className={styles.text}>or</div>
                  <div className={styles.line}></div>
                </div>
                <div className={styles.socialbuttons}>
                  <div className={styles.socials}>
                    <button className={styles.loginbuttons} id={styles.b33}>
                      {" "}
                      <img src={google} /> Sign up with Google
                    </button>
                  </div>
                  <div className={styles.socials}>
                    <button className={styles.loginbuttons} id={styles.b11}>
                      <img src={fb} />
                      Sign up with Facebook
                    </button>
                  </div>
                  <div className={styles.socials}>
                    <button className={styles.loginbuttons} id={styles.b22}>
                      <img src={apple} />
                      Sign up with Apple
                    </button>
                  </div>
                </div>
                <div className={styles.enddivider}></div>
                <label id={styles.already}>
                  Already have an account?{" "}
                  <Link to="/login">
                    {" "}
                    <a id={styles.here}>Log in here</a>
                  </Link>
                  .
                </label>
                <label id={styles.disclaimer}>
                  This site is a clone and isn't meant to break any kind of
                  copyright or laws.
                  <br />
                  But only to showcase a project.
                </label>
              </div>
            </div>
          </Route>
        </Switch>
      </form>
    </div>
  );
}

export default SignUp;
