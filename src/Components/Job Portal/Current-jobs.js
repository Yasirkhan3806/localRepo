import React from 'react';
import { Link  } from 'react-router-dom';

export default function Currentjobs() {
  return (
    <>
  
      <div className="current-j-m-cont">
      <p style={{textAlign:"center"}}>Categories work wating for you</p>
      <h2 style={{textAlign:"center" , fontSize:"46px"}}>
        Current <span style={{color:"#56C573"}}>Jobs Posts</span>
      </h2>
      <div className="j-cat-conts-cont">
    <div className="j-cat-conts">
            <div className="cates">
               <Link  to="/"> <h5>Web Development</h5></Link> 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Graphic Designer</h5></Link > 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Video Editing</h5></Link > 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Engineering & Sciences</h5></Link > 
            </div>
        </div>
        <div className="j-cat-conts">
            <div className="cates">
            <Link  to="/"> <h5>Graphic Designer</h5></Link > 
            </div>
            <div className="cates">
               <Link  to="/"> <h5>Web Development</h5></Link> 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Video Editing</h5></Link > 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Engineering & Sciences</h5></Link > 
            </div>
        </div>
        <div className="j-cat-conts">
            <div className="cates">
            <Link  to="/"> <h5>Video Editing</h5></Link > 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Graphic Designer</h5></Link > 
            </div>
            <div className="cates">
               <Link  to="/"> <h5>Web Development</h5></Link> 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Engineering & Sciences</h5></Link > 
            </div>
        </div>
        <div className="j-cat-conts">
            <div className="cates">
            <Link  to="/"> <h5>Engineering & Sciences</h5></Link > 
            </div>
            <div className="cates">
               <Link  to="/"> <h5>Web Development</h5></Link> 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Graphic Designer</h5></Link > 
            </div>
            <div className="cates">
            <Link  to="/"> <h5>Video Editing</h5></Link > 
            </div>
        </div>
        </div>
      </div>

    </>
  )
}
