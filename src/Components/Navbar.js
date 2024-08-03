import React from 'react'
import logo from './Picture/logo.jpg';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      {/* <nav>
        <img src={logo} alt="Internee logo" />
   
     
      </nav> */}
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <div className='navbar-expander-cont'>
    <Link style = {{color:"black" }}className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link style = {{color:"black" }}className="nav-link active" aria-current="page" to="/internship-page"><b>Internship</b></Link>
        </li>
        <li className="nav-item">
          <Link style = {{color:"black" }}className="nav-link" to="/Company-Collaboration-page"><b>Company Collaborations</b></Link>
        </li>
        <li className="nav-item">
          <Link style = {{color:"black" }}className="nav-link" to="/Contact-us-page"><b>Contact us</b></Link>
        </li>
        <li className="nav-item">
          <Link style = {{color:"black" }}className="nav-link nav-buttons nav-job-btn" aria-disabled="true" to="/Job-Portal">Job Portal</Link>
        </li>
        <li className="nav-item">
          <Link style = {{color:"black" }}className="nav-link nav-buttons" aria-disabled="true" to={"/internee-login"}>Internee's Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
