import React from 'react';
import Navbar from './Navbar';
import "./Company-c-p.css";
import cloudicon from "./Picture/icons/icons8-cloud-download-64.png";
import team from "./Picture/icons/icons8-team-50.png";
import headphones from "./Picture/icons/icons8-headphones-64.png";
import shield from "./Picture/icons/icons8-shield-50.png";
import MapComponent from './Map';
import Footer from './footer';

export default function CompanyCollaborationpage() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
      <div className="c-heading-cont">
        <h2>Are you looking for hands on candidate for your company?</h2>
        <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure,practical skills,
           <br /> 
          and networking opportunities, paving the way for their success in the tech industry.</p>

          <div className="reason-cont">
            <div className="reasons">
              <img src={cloudicon} alt="Cloud icon" />
              <h2>7K+</h2>
              <h5 style={{textAlign:"center"}}>Internships Provided</h5>
            </div>
            <div className="reasons">
              <img src={headphones} alt="Cloud icon" />
              <h2>19</h2>
              <h5 style={{textAlign:"center"}}>Courses On Lms</h5>
            </div>
            <div className="reasons">
              <img src={team} alt="Cloud icon" />
              <h2>15K+</h2>
              <h5 style={{textAlign:"center"}}>Linkedin Family</h5>
            </div>
            <div className="reasons">
              <img src={shield} alt="Cloud icon" />
              <h2>15</h2>
              <h5 style={{textAlign:"center"}}>Companies Onboard</h5>
            </div>
          </div>
      </div>
      <div className="map-cont">
        <MapComponent/>
      </div>
      <div class="card">
  <span class="title">
  Project in mind? Let’s Talk 🚀</span>
  <form class="form">
    <div class="group">
    <input placeholder="" type="text" required=""/>
    <label for="name">Name</label>
    </div>
<div class="group">
    <input placeholder="" type="email" id="email" name="email" required=""/>
    <label for="email">Email</label>
    </div>
<div class="group">
    <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
    <label for="comment">Message</label>
</div>
    <button type="submit">Submit</button>
    <p style={{fontSize:"12px" ,letterSpacing:"0.5"}}>After your message submission, Our team will respond 1-2 Business days</p>
  </form>
</div>
<footer>
        <Footer/>
      </footer>
    </>
  )
}
