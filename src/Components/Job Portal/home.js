import React from 'react';
import JobNavbar from './Job-Navbar';
import Jobadv from './Job-adv';
import Jobadv2 from './Job-adv2';
import Currentjobs from './Current-jobs';
import Countingthings from './Counting-things';
import BlogSection from '../blog-section';
import Newsletter from './Newsletter';
import Footer from './Footer';

export default function JobHome() {

  return (
    <>
     <header>
        <JobNavbar/>
        </header> 
        <main>
{/* <Homeintro/> */}
        <Jobadv/>
        <Jobadv2/>
        <Currentjobs/>
        <Countingthings/>
        <BlogSection marginTop = {"0px"}/>
        <Newsletter/>
        </main>
        <footer>
        <Footer/>
        </footer>
    </>
  )
}
