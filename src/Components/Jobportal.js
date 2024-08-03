import React from 'react';
import cellphone from "./Picture/icons/cellphone-link.svg";
import checkbox from  "./Picture/icons/checkbox-multiple-marked-outline.svg";
import account from  "./Picture/icons/account-multiple-plus-outline.svg";
import order from  "./Picture/icons/order-bool-ascending-variant.svg";
import job from "./Picture/job.png";

export default function Jobportal() {
  return (
    <div>
      <div className="manage-m-cont">
        <div id='job-portal-cont' className="manage-cont manage-info-cont" style={{width:"60svw",paddingLeft:"82px",}}>
            <h5>Already have a good skill but looking for job?</h5>
            <h1>Job Portal, Ultimate Place To Find The Best Job</h1>
            <p style={{fontSize:"15px"}}>Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.</p>
            <div className="manage-p-m-cont" style={{display:"flex",marginTop:"39px"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={cellphone} alt="" data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont" style={{marginRight:"22px"}}>
                        <p ><b>100% Mobile friendly</b>  <br />
                        online art approvals.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={checkbox} alt="" data-aos="fade-up" />
                    </div>
                    <div className="p-text-cont" >
                        <p ><b>Speed up the design process</b> <br />
                        Everything is done online, from mockup to final design.</p>
                    </div>
                </div>
            </div>
            <div className="manage-p-m-cont" style={{display:"flex"}}>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={account} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont"  style={{marginRight:"22px"}} >
                        <p><b>Communicate easier</b> <br />
                        Add multiple recipients to an Art Approval to reduce traditional email clutter.</p>
                    </div>
                </div>
                <div className="manage-p-cont" style={{display:"flex"}}>
                    <div className="p-img-cont" style={{height:"75px",width:"75px", background:"#FFFBF4",borderRadius:"12%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <img src={order} alt=""  data-aos="fade-up"/>
                    </div>
                    <div className="p-text-cont">
                        <p><b>Add changes faster</b> <br />
                        Students can add comments to approvals for changes, saving you both time on finalizing designs.</p>
                    </div>
                </div>
            </div>
            </div>
        <div className="manage-cont manage-img-cont" style={{marginLeft:"5svh",marginTop:"7svh"}}>
            <img src={job} alt=""  style={{maxHeight:"650px",maxWidth:"1637px"}} data-aos="fade-right" / >
        </div>
      </div>
    </div>
  )
};
