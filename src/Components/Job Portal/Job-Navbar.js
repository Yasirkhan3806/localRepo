import React, { useEffect, useState } from 'react';
import logo from './Job portal Picture/logo-removebg-preview.png';
import { Link } from 'react-router-dom';
import "./Job-Portal.css";
import PopupForm from './Popup-Form';

export default function JobNavbar() {
  const [navBg , setnavBg] = useState("transparent")
  useEffect(() => {
    
    const handleScroll = () => {
      const nav = document.querySelector('.job-navbar');
    const navLinks = document.querySelectorAll('.job-nav-link');
      if (window.scrollY > 500) {
        nav.style.position = 'fixed';
        nav.style.display = 'block';
        nav.style.top = '0';
        nav.style.margin= '0';
        nav.style.width = '100svw';
        nav.style.boxShadow = '8px -4px 5px 4px';
        navLinks.forEach(link => link.style.color = 'black');
        setnavBg("light");
      } else if (window.scrollY > 14) {
        nav.style.display = 'none';
      }
     else {
        nav.style.position = 'fixed';
        nav.style.display = 'block';
        setnavBg("transparent");
        navLinks.forEach(link => link.style.color = 'white');
        nav.style.margin= '28px';
        nav.style.width = '80svw';
        nav.style.boxShadow = '0px 0px 0px 0px';
      }
    };
  
    document.addEventListener('scroll', handleScroll);
  
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  
  };

  return (
    <div>
      <nav className={`navbar job-navbar navbar-expand-lg bg-${navBg}`} >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item job-nav-item ">
                <Link className="nav-link job-nav-link active" aria-current="page" to="/Job-Portal">Home</Link>
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link" to="/Job-Companies">Company</Link>
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link" to="/Hiring-Now">Hiring Now</Link>
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link" to="/About-Us">About Us</Link>
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link" to="/Contact-Us">Contact Us</Link>
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link nav-buttons nav-job-btn" aria-disabled="true" onClick={togglePopup}>Login</Link>
                {isPopupVisible && <PopupForm togglePopup={togglePopup}  />}
              </li>
              <li className="nav-item job-nav-item">
                <Link className="nav-link job-nav-link nav-buttons" aria-disabled="true" to={"/internee-login"}>Post Job</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
