import Navbar from './Components/Navbar'
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import  Login from './Components/Login';
import Signup from './Components/Signup';
import Alert from './Components/Alert';
import Logout from './Components/Logout';
import Footer from './Components/Footer';
import Resume from './Components/Resume';
function App() {

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const domain = "https://defiant-robe-tick.cyclic.app/"

  // const { pathname } = useLocation();

  return (
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert}/>} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/logout" element={<Logout showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
          <Route exact path="/resume" element={<Resume do={domain}/>} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
