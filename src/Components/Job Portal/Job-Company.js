import React from 'react';
import Generalstarting from './general-starting';
import JobNavbar from './Job-Navbar';
import Newsletter from './Newsletter';
import JobFooter from './Footer';
export default function JobCompany() {
  return (
    <>
<JobNavbar/>
      <Generalstarting pageName = {"Company"}/>
      <div style={{background:"white", height:"30svh"}}>
      </div>
      <Newsletter/>
      <JobFooter/>
    </>
  )
}
