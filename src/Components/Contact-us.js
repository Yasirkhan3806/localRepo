import React from 'react';
import Navbar from './Navbar';
import "./Contact-us.css";
import "./Company-c-p.css"
import sheild from "./Picture/icons/icons8-shield-50.png";
import pulse from "./Picture/icons/icons8-pulse-64.png";
import headphones from "./Picture/icons/icons8-headphones-64.png";
import team from "./Picture/icons/icons8-team-50.png";
import MapComponent from './Map';
import Footer from './footer';

export default function Contactus() {
  return (
    <>
        <header>
        <Navbar/>
        </header>
        <main>
<div className="co-m-cont">
    <div className="d-m-cont">
        <div className="greendot"></div>
        <div className="info-cont">
            <div className="img-cont">
                <img src={sheild} alt="" />
            </div>
            <div className="text-cont">'
                <h3>7k+ Internship Provided</h3>
                <p>Internee.pk has successfully facilitated over 7,000 internship opportunities for students and professionals alike! This milestone reflects our commitment to empowering individuals with valuable hands-on experience and career-building opportunities</p>
            </div>
        </div>
    </div>
    <div className="d-m-cont">
        <div className="greendot"></div>
        <div className="info-cont">
            <div className="img-cont">
                <img src={pulse} alt="" />
            </div>
            <div className="text-cont">'
                <h3>15k+ Linkedin Family</h3>
                <p>Our LinkedIn community has surpassed 15,000 members, comprising professionals like yourself who are driving innovation and growth in their respective industries</p>
            </div>
        </div>
    </div>
    <div className="d-m-cont">
        <div className="greendot"></div>
        <div className="info-cont">
            <div className="img-cont">
                <img src={team} alt="" />
            </div>
            <div className="text-cont">'
                <h3>15 Companies Onboarded</h3>
                <p>we are expanding our network and creating new avenues for talent acquisition and career growth. Whether you're a student looking for valuable internships or a business seeking top-tier candidates, our platform provides the perfect space to connect, collaborate, and succeed together</p>
            </div>
        </div>
    </div>
    <div className="d-m-cont">
        <div className="greendot"></div>
        <div className="info-cont">
            <div className="img-cont">
                <img src={headphones} alt="" />
            </div>
            <div className="text-cont">'
                <h3>19 Courses on LMS</h3>
                <p>Our LMS provides the perfect platform for growth and development. With interactive lessons, practical exercises, and expert-led instruction, you'll gain the insights and capabilities you need to excel in today's competitive landscape</p>
            </div>
        </div>
    </div>
</div>

<div className="map-cont">
<MapComponent/>
</div>
<div class="card" style={{top:"100svw"}}>
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
{/* <div class="card" style={{top:"215svh"}}>
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
</div> */}

        </main>
        <footer>
        <Footer/>
      </footer>
    </>
  )
}
