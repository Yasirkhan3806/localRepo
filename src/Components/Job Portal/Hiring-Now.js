import React from 'react';
import JobNavbar from './Job-Navbar';
import Generalstarting from './general-starting';
import Newsletter from './Newsletter';
import JobFooter from './Footer';

export default function HiringNow() {
  return (
    <>
      <JobNavbar/>
      <Generalstarting pageName = {"Hiring Now"}/>
      <div style={{background:"white", height:"30svh"}}>
      </div>
<Newsletter />
      <JobFooter/>
    </>
  )
}
