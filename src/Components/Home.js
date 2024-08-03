import React from 'react';
import Navbar from './Navbar';
import Introduction from './introduction';
import Aboutinternee from './About-internee';
import Browseinternship from './browse-internship';
import BlogSection from './blog-section';
import ManageTask from './ManageTask';
import Guidedtutoirals from './Guidedtutoirals';
import Createcourse from './Createcourse';
import Jobportal from './Jobportal';
import Advantagesinternee from './Advantagesinternee';
import Reviews from './reviews';
import Footer from './footer';

export default function Home() {
  return (
    <>
        <header>
      <Navbar/>
      </header>
      <main>
<Introduction />
<Aboutinternee/>
<Browseinternship/>
<BlogSection marginTop = {"149px"}/>
<ManageTask heading = {"Manage Project Via Own Task Portal"}/>
<Guidedtutoirals/>
<Createcourse/>
<Jobportal/>
<Advantagesinternee/>
<Reviews/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
