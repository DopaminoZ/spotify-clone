import "./App.css";
import SignInPage from "./components/js/SignInPage.js";
import SignUpPage from "./components/js/SignUpPage.js";
import HomePage from "./components/js/HomePage.jsx";
import Artist from "./components/js/Artists.js"
import {BrowseRouter as Router,Link,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <HomePage/>
    </div>
  );
}
export default App;
