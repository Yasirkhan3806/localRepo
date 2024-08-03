import React from 'react';
import Navbar from './Navbar';
import './App.css';
import AboutInternee from './About-internee';
import Browseinternship from './browse-internship';
import ExtraInternships from './extra-browse-internships';
import ManageTask from './ManageTask';
import Jobportal from './Jobportal';
import Advantagesinternee from './Advantagesinternee';
import Reviews from './reviews';
import Footer from './footer';
export default function Internshippage() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutInternee/>
      <Browseinternship/>
<ExtraInternships/>
      <ManageTask heading = {"Hands-on internship Experience"}/>
      <Jobportal/>
      <Advantagesinternee/>
      <Reviews/>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
