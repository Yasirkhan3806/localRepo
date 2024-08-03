import React from 'react';
import logo from './Picture/logo.jpg';
import youtube from './Picture/icons/vecteezy_youtube-logo-png-youtube-icon-transparent_18930575.png';
import facebook from './Picture/icons/vecteezy_facebook-logo-png-facebook-icon-transparent-png_18930476.png';
import twitter from './Picture/icons/vecteezy_twitter-logo-icon-social-media-icon_23741118.png';
import instagram from './Picture/icons/vecteezy_instagram-logo-png-instagram-icon-transparent_18930413.png';


export default function Footer() {
  return (
    <>
      <div className="footer-m-cont">
        <div className="footer-d-m-conts" style={{width:"228px"}}>
            <img src={logo} alt="" />
        </div>
        <div className="footer-d-m-conts">
            <h6><b>Company</b></h6>
            <ul>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms And Conditions</li>
            </ul>
        </div>
        <div className="footer-d-m-conts">
            <h6><b>Get help</b></h6>
            <ul>
                <li>Training Videos</li>
                <li>Request Help</li>
            </ul>
        </div>
        <div className="footer-d-m-conts social-m-cont">
        <h6><b>Socialize with us</b></h6>
        <div className='social-media-cont' style={{display:"flex",marginLeft:"-13px"}}>
            <img src={youtube} alt="" />
            <img src={facebook} alt="" />
            <img src={twitter} alt="" style={{height:"33px", width:"33px", margin: "9px 4px"}}/>
            <img src={instagram} alt="" />
        </div>
            <ul style={{ color:"#90969D"}}>
                <li>+923453191638</li>
                <li>info@internee.pk</li>
                <li>Copyright ©2024 internee.pk Pvt Ltd.</li>
                <li>All rights reserved.</li>
        </ul>
        </div>
      </div>
    </>
  )
}
