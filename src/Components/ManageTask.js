import React from 'react';
import task from './Picture/task.webp';
import cellphone from "./Picture/icons/cellphone-link.svg";
import presentation from  "./Picture/icons/presentation-play.svg";
import playlist from  "./Picture/icons/playlist-check.svg";
import account from  "./Picture/icons/account-multiple-plus-outline.svg";

export default function ManageTask(props) {
  return (
    <div>
      <div className="manage-m-cont">
        <div className="manage-cont manage-img-cont">
            <img src={task} alt=""  style={{height:"407px",width:"827px"}} data-aos="fade-right" / >
        </div>
        <div className="manage-cont manage-info-cont" style={{width:"60svw"}}>
            <h5>Our own task portal</h5>
            <h1>{props.heading}</h1>
            <p style={{fontSize:"15px"}}>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
            <div className="manage-p-m-cont" style={{display:"flex",marginTop:"39px"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={presentation} alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont" style={{marginRight:"22px"}}>
                        <p ><b>Hands on Projects</b> we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={playlist} alt="" data-aos="fade-up" />
                    </div>
                    <div className="p-text-cont" >
                        <p ><b>Easy to understand</b> <br />
                        More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.</p>
                    </div>
                </div>
            </div>
            <div className="manage-p-m-cont" style={{display:"flex"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={cellphone} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont"  style={{marginRight:"22px"}} >
                        <p><b>SDLC Techniques</b> <br />
                        Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency..</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={account} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont">
                        <p><b>How to represent yourself</b> <br />
                        More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.</p>
                    </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  )
};
