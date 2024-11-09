import "./App.css";
import SignInPage from "./components/js/SignInPage.js";
import SignUpPage from "./components/js/SignUpPage.js";
import HomePage from "./components/js/HomePage.jsx";
import Artist from "./components/js/Artists.js"
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
    <Route path="/signup">
    <SignUpPage/>
    </Route>
    <Route path="/login">
    <SignInPage/>
    </Route>
    <Route path="/">
    <HomePage/>
    </Route>
    </Switch>
    </Router>
    </div>
  );
}
export default App;
