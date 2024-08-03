import React from 'react';
import JobNavbar from './Job-Navbar';
import Generalstarting from './general-starting';
import JobFooter from './Footer';
import "./Job-Contact-us.css";
import Newsletter from './Newsletter';
export default function JobContactus() {
  return (
    <>
    <JobNavbar/>
    <Generalstarting pageName = {"Contact Us"}/>
    <div className='c-m-cont'>
        <div className='Contact-info-cont'>
            <h3>Contact Information</h3>
            <div>
            <p style={{width:"20svw"}}><span>Address</span> Aiwan-e-Tijarat Rd, Seari Quarters, Karachi, Karachi City, Sindh 74000</p>
            <p>Phone: <a style = {{textDecoration:"none", color:"black"}} href='tel:+92318-2364377'>+92318-2364377</a></p>
            <p>Email: <a style = {{textDecoration:"none", color:"black"}} href='mailto: info@internee.pk'> info@internee.pk</a></p>
            <p>Website: <a style = {{textDecoration:"none", color:"black"}} href='https://internee.pk' target='blank'>Internee.Pk</a></p>
            </div>
        </div>
        <div className="j-map-container">
          <div className="Map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d268.07419699930745!2d71.47413569207954!3d34.007547725586804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1722079086455!5m2!1sen!2s" width="500" height="500" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="card-container">
            <form>
               <input className = "c-inputs" type="text" name="Name" id="" placeholder="Name"/>
               <input className = "c-inputs" type="email" name="Email" id="" placeholder="Your Email"/>
               <input className = "c-inputs" type="text" name="subject" placeholder="Subject"/>
               <textarea name="Message" id="" cols="42" rows="5" placeholder="Your Message" style={{margin:"2svh", outline:"none", border:"1px solid rgba(0,0,0,0.2)", padding:"2svh",borderRadius:"10px"}}></textarea>
              <input className = "c-inputs" type="submit" name="submit" id="" value="Send Message" style={{background:"#23A12E", fontSize:"15px", border:"none", color:"white", width:"10svw", borderRadius:"10px"}}/>
            </form>
          </div>
  </div>
  
    </div>
<Newsletter/>
    <JobFooter/>
      
    </>
  )
}
