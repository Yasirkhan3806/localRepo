import React from 'react';
import JobNavbar from './Job-Navbar';
import Generalstarting from './general-starting';
import Newsletter from './Newsletter';
import hero from '../Picture/hero3.jpg';
import Countingthings from './Counting-things';
import JobFooter from './Footer';
import './About-us.css';

export default function Aboutus() {
  return (
    <>
      <JobNavbar/>
      <Generalstarting pageName = { 'About' }/>
      <div className='m-cont' >
        <div className='A-content-cont A-img-cont'>
            <img src={hero} alt="Hero" />
        </div>
        <div className='A-content-cont text-container'>
          <h2>The Ultimate Place To Find <br/> The Best Job</h2>
          <p>Internee.pk bridges the gap between talented individuals and the thriving IT industry, providing a pathway for students to succeed in the tech world. Whether you’re a beginner or an enthusiast, Internee.pk offers a unique blend of theory and practical experience to propel your tech career forward.</p>
        </div>
      </div>
      <Countingthings/>
      <Newsletter/>
      <JobFooter/>
    </>
  )
}
