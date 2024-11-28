import "./App.css";
import LogInPage from "./components/js/LogInPage.js";
import SignUpPage from "./components/js/SignUp.js";
import HomePage from "./components/js/HomePage.jsx";
import SignUpS1 from "./components/js/SignUpStep1.jsx";
import SignUpS2 from "./components/js/SignUpStep2.jsx";
import SignUpS3 from "./components/js/SignUpStep3.jsx";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/signup/step=1">
            <SignUpS1/>
          </Route>
          <Route exact path="/signup/step=2">
            <SignUpS2/>
          </Route>
          <Route exact path="/signup/step=3">
            <SignUpS3/>
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LogInPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
