import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';


const Navbar = () => {
  let history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("resume");
    history("/logout");
  }
  const location = useLocation()
  if(location.pathname!=="/login" && location.pathname!=="/signup"){
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <WorkIcon/>
    <Link className="navbar-brand" to="/"><b>Your_HR</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        {localStorage.getItem('token')?<Link className="nav-link active" aria-current="page" to="/">Home</Link>:null}
        </li>
        

        
        <li className="nav-item">
        {localStorage.getItem('token')?<Link className="nav-link" to="/resume">Your Resume</Link>:null}
        </li>
       

        </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link className="btn btn-primary mx-2" to={"/login"} role="button">Login</Link>
      <Link  className="btn btn-primary" to="/signup" role="button">Signup</Link>
      </form>:<button  className="btn btn-primary" onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )}
  else{
    return (
      <div></div>
    )
  }
}

export default Navbar
