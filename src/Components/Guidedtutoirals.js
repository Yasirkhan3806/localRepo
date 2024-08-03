import React from 'react';
import cloud from "./Picture/icons/cloud-check-outline.svg";
import magnifyGlass from  "./Picture/icons/magnify-plus-outline.svg";
import informationIcon from  "./Picture/icons/information-outline.svg";
import folder from  "./Picture/icons/folder-multiple-outline.svg";
import lms from "./Picture/lms.png";

export default function Guidedtutoirals() {
  return (
    <div>
      <div id='guided-tutorial-m-cont' className="manage-m-cont">
        <div id='guided-tutorial-cont' className="manage-cont manage-info-cont" style={{width:"60svw",paddingLeft:"82px",}}>
            <h5>Our LMS</h5>
            <h1>Guided Tutorials in Learning Management System</h1>
            <p style={{fontSize:"15px"}}>Want to learn something but don't know what's the roadmap or your english is not too good? That's why we launch LMS for you.</p>
            <div className="manage-p-m-cont" style={{display:"flex",marginTop:"39px"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={cloud} alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont" style={{marginRight:"22px"}}>
                        <p ><b>Sell Courses and Earn</b> Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others on their learning journey while earning rewards for your expertise.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={magnifyGlass} alt="" data-aos="fade-up" />
                    </div>
                    <div className="p-text-cont" >
                        <p ><b>Certification</b> <br />
                        Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.</p>
                    </div>
                </div>
            </div>
            <div className="manage-p-m-cont" style={{display:"flex"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={informationIcon} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont"  style={{marginRight:"22px"}} >
                        <p><b>Courses in Urdu</b> <br />
                        Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, Our LMS ensures that education is accessible and relatable for everyone. Learn, grow, and excel in a language that feels like home.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={folder} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont">
                        <p><b>Practice Exercises</b> <br />
                        Theory is just the beginning. Our LMS goes beyond by offering practical exercises that challenge and refine your skills. Apply your knowledge in real-world scenarios, solidifying your understanding and boosting your confidence</p>
                    </div>
                </div>
            </div>
            </div>
        <div className="manage-cont manage-img-cont" style={{marginLeft:"5svh",marginTop:"7svh"}}>
            <img src={lms} alt=""  style={{maxHeight:"650px",maxWidth:"1637px"}} data-aos="fade-right" / >
        </div>
      </div>
    </div>
  )
};
