import React from 'react';
import certificate from './Picture/11.PNG';
import mentor from './Picture/mentor.jpeg';
import community from './Picture/comunity.jpeg';
import interneeCertifcate from './Picture/certificate.jpeg';

export default function BlogSection(props) {
  return (
    <div className = "b-starting-cont" style={{background:"#F8F9FA",height:"155svh", marginTop:`${props.marginTop}`}}>
      <div className="blog-m-cont">
        <h5 style={{textAlign:"center",paddingTop:"20svh"}}>Our Blog</h5>
        <h2 style={{textAlign:"center",paddingBottom:"5svh"}}> <b>Recent Blog</b> </h2>
        <div className="blog-m-p-cont">
            <div className="blogs">
                <img src={certificate} alt="Certificate Picture" style={{height:"auto",maxWidth:"100%"}}/>
<h2>Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟</h2>
<p style={{marginTop:"2svh"}}>To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.</p>
            </div>
            <div className="blogs">
                <img src={mentor} alt="Certificate Picture" style={{height:"auto",maxWidth:"100%"}}/>
<h2>🚀 Are you a tech expert looking to make a meaningful impact in the community?🌟🎉</h2>
<p style={{marginTop:"2svh"}}>Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀</p>
            </div>
            <div className="blogs">
                <img src={community} alt="Certificate Picture" style={{height:"auto",maxWidth:"100%"}}/>
<h2>🚀Calling communities to Empower Students, Collaborate with Internee.pk!✌</h2>
<p style={{marginTop:"2svh"}}>We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.</p>
            </div>
            <div className="blogs">
                <img src={interneeCertifcate} alt="Certificate Picture" style={{height:"auto",maxWidth:"100%"}}/>
<h2>Complete all of the task but didn't get certification yet? 😓🤦‍♀️</h2>
<p style={{marginTop:"2svh"}}>📧 Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet." Our team will swiftly resolve the matter, ensuring you get your recognition promptly.</p>
            </div>

    </div>
    </div>
      </div>
  )
}
