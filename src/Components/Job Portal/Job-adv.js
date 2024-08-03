import React from 'react';
import boxIcon from "./Job portal Picture/icons8-toolbox-30.png";
import bg from './Job portal Picture/bg_2.png';


export default function Jobadv() {
  return (
    <>
      <div className="main-cont" style={{backgroundImage: `url(${bg})`}}>
        <div className="overlay"></div> {/* Add the overlay div */}
        <div className='content' style={{height:"100svh"}}>
          <div className='job-adv-m-cont'>
            <p>We have 850,000 great job offers you deserve!</p>
            <h1>Your Dream</h1>
            <h6>Job is Waiting</h6>
            <span style={{
              background: "white", padding: "14px 20px", borderRadius: "5% 5% 0% 0%", 
              color: "rgba(0, 0, 0, 0.5)", fontWeight: "500", fontSize: "17px", 
              marginTop: "20px", display: "inline-block"
            }}>Find A Job</span>
            <div className="options-cont">
              <span className='job-i-cont'>
                <img src={boxIcon} alt="" height={"16px"} width={"16px"} />
              </span>
              <input type="search" placeholder='E.g. Web development' />
              <select id="dropdown" name="Category">
                <option value="option1">Category</option>
              </select>
              <select id="dropdown2" name="Location">
                <option value="option1">Locations</option>
              </select>
              <button className='search-btn'>Search</button>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}
