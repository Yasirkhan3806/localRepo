import React from 'react';
import flaticon from "./Job portal Picture/applied_12124219.png";
import collaboration from "./Job portal Picture/icons8-teamwork-50.png";
import competitions from "./Job portal Picture/icons8-competition-64.png";
import employee from "./Job portal Picture/icons8-employee-50.png";
export default function Jobadv2() {
  return (
    <>
      <div className="j2-m-cont">
        <div className="j2-adv-cont">
            <img src={flaticon} alt="" />
            <h6>Search Millions of Jobs</h6>
            <p>A small river named Duden flows by their place and supplies.</p>
        </div>
        <div className="j2-adv-cont">
            <img src={competitions} alt="" />
            <h6>Easy To Manage Jobs</h6>
            <p>A small river named Duden flows by their place and supplies.</p>
        </div>
        <div className="j2-adv-cont">
            <img src={collaboration} alt="" />
            <h6>Top Careers</h6>
            <p>A small river named Duden flows by their place and supplies.</p>
        </div>
        <div className="j2-adv-cont">
            <img src={employee} alt="" />
            <h6>Search Expert Candidates</h6>
            <p>A small river named Duden flows by their place and supplies.</p>
        </div>
      </div>
    </>
  )
}
