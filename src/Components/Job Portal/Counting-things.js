import React from 'react';
import hero from '../Picture/hero.jpg';

export default function Countingthings() {
  return (
    <>
     <div className="main-cont m2-cont" style={{backgroundImage:`url(${hero})`, height:"35svh",zIndex:"-1",backgroundSize:"cover", backgroundAttachment:"Fixed",backgroundPosition:"center"}}>
     <div className="overlay" style={{background: 'rgba(0, 0, 0, 0.61)'}}></div> {/* Add the overlay div */}
     <div id='count-content' className='content' style={{height:"35svh"}}>
      <div className="counting-m-cont">
        <div className="counting-conts">
          <h2>35</h2>
          <p>Jobs in differnet domain</p>
        </div>
        <div className="counting-conts">
        <h2>40</h2>
        <p>Members</p>
        </div>
        <div className="counting-conts">
        <h2>30</h2>
        <p>Resume</p>
        </div>
        <div className="counting-conts">
        <h2>10</h2>
        <p>Companies</p>
        </div>
      </div>
      </div>
      </div> 
    </>
  )
}
