import React from 'react';
import instructor from './Picture/instructor.png';
import textbox from "./Picture/icons/text-box-search-outline.svg";
import shape from  "./Picture/icons/shape-outline.svg";
import download from  "./Picture/icons/download.svg";
import pllaylist from  "./Picture/icons/playlist-check (1).svg";

export default function ManageTask() {
  return (
    <div>
      <div className="manage-m-cont">
        <div  className="manage-cont manage-img-cont">
            <img src={instructor} alt=""  style={{height:"auto",maxWidth:"100%"}} data-aos="fade-right" / >
        </div>
        <div  id='create-courses-cont' className="manage-cont manage-info-cont" style={{width:"60svw"}}>
            <h5>Are you Tech Instructor or Content Creator?</h5>
            <h1>Create Courses In Local Language & Generate Income</h1>
            <p style={{fontSize:"15px"}}>Are you a professional want to start your journey as a tech instructor and content creator to make some revenue? Just visit Our LMS Intructor Portal</p>
            <div className="manage-p-m-cont" style={{display:"flex",marginTop:"39px"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={textbox} alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont" style={{marginRight:"22px"}}>
                        <p ><b>Upload Tutorials & Excersice</b> Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={download} alt="" data-aos="fade-up" />
                    </div>
                    <div className="p-text-cont" >
                        <p ><b>Instructor Identity</b> <br />
                        Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in the world of online education.</p>
                    </div>
                </div>
            </div>
            <div className="manage-p-m-cont" style={{display:"flex"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={shape} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont"  style={{marginRight:"22px"}} >
                        <p><b>Generate Revenue</b> <br />
                        Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make a meaningful income from your passion.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={pllaylist} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont">
                        <p><b>Perfact Share Ratio</b> <br />
                        We believe in fair partnerships. we enjoy a perfect share ratio that ensures transparency and fairness. Your hard work deserves to be rewarded, and we make sure you get your share</p>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
};
