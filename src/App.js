import "./App.css";
import LogInPage from "./components/js/LogInPage.js";
import SignUpPage from "./components/js/SignUp.js";
import HomePage from "./components/js/HomePage.jsx";
import "simplebar"; // Import the library
import "simplebar/dist/simplebar.css"; // Import the default CSS styles
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Chatbot from "./components/js/Chatbot.jsx";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
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
