import React from 'react';
import facebook from './Job portal Picture/icons8-facebook-f.svg';
import Linkedin from './Job portal Picture/icons8-linkedin-2.svg';
import instagram from './Job portal Picture/icons8-instagram.svg';
import whatsapp from './Job portal Picture/icons8-whatsapp.svg';
import location from './Job portal Picture/icons8-location-50.png';
import call from './Job portal Picture/icons8-call-50.png';
import email from './Job portal Picture/icons8-email-50.png';

export default function JobFooter() {
  return (
    <>
      <div className="j-footer-m-cont">
        <div className='content-m-cont'>
        <div className="content-cont j-s-m-cont">
            <h5>About</h5>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
            <div className='j-social-cont'>
                <a href="#" target="_blank"><img src={facebook} alt="" /></a>
                <a href="#" target="_blank"><img src={Linkedin} alt="" /></a>
                <a href="#" target="_blank"><img src={instagram} alt="" /></a>
                <a href="#" target="_blank"><img src={whatsapp} alt="" /></a>
            </div>
        </div>
        <div className="content-cont j-about-m-cont">
          <h5>Have a Questions?</h5>
         <div class="f-2-img-text">
           <div><img src={location} alt="" /></div>
         <p >Aiwan-e-Tijarat Rd, Seari Quarters, Karachi, Karachi City, Sindh 74000</p>
        </div>
        <div class="f-2-img-text">
          <div><img src={call} alt="" /></div>
        <p style={{color:"white"}} ><b>+92 312 3023645</b></p>
       </div>
       <div class="f-2-img-text">
        <div><img src={email} alt="" /></div>
        <p style={{color:"white"}} ><b>Info @internee.pk</b></p>
     </div>
        </div>
        </div>
        <p>Copyright ©2024 All rights reserved|<span style={{color:'rgba(256,256,256,0.7)'}}>Internee.Pk</span></p>
      </div>
     
    </>
  )
}
