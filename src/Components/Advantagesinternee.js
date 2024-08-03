import React from 'react';
import iconflow from './Picture/icons/Icon-flow-v2.svg';
import prog from "./Picture/programing.jpg"

export default function Advantagesinternee() {
  return (
    <>
    <div className='a-m-cont' style={{display:"flex" ,gap:"10svh",marginTop:"8svh" }}>
      <div className="ad-m-conts">
        <h1>Why Internee.Pk</h1>
        <div className="greenbox-cont" style={{marginTop:"5svh"}}>
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up"  />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up"  />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up" />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up" />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up" />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up" />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        <div className="greenbox-cont last-greenbox-cont" >
            <div className="greenbox" >
                <img src={iconflow} alt="icon message" data-aos="fade-up" />
            </div>
            <h5><b>5500+ Students already registered</b></h5>
        </div>
        
      </div>
      <div className="ad-m-conts ad-img-cont">
        <img src={prog} alt="" data-aos="fade-right"/>
      </div>
    </div>
    </>
  )
}
