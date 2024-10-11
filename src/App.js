import './App.css';
import Header from './components/Header'
import Sform from'./components/sform'
import Headersignup from './components/Headersignup.js';
import Signin from './components/Signin.js';
function App() {
  return (
    <div className="App">
      <Headersignup/> 
      <Signin/>
    </div>
  );
}

export default App;
