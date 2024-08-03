import React from 'react'
import hero from './Picture/hero.webp'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import nep from './Picture/nep.png'
import incubation from './Picture/incubation.jpg'
import nic from './Picture/nic.png'

export default function Introduction() {
    const [text] = useTypewriter(
        {
            words:['On Your Desired Domain','Gives Hands On Experience','Get A Competitive Job'],
            loop:[],
        }
    ) 
  return (
    <>
    <div className="intro-containers-container">
      <div className='intro-container'>
     <h1>Looking for dream internship?</h1>
     <h1 style={{
        color:"#43A724",
        height:"140px"
     }}>{text}  <Cursor/></h1>
     <p >
     Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
     </p>
    <div className="companies-intro" style={{
        display:'flex'
    }}>
        <div className="img-container" style={{
                width: '194px',
        }}>
            <img src={incubation} alt=""style={{
                height:"auto" ,
                maxWidth:"90%",
                marginTop:"20px",

            }} />
        </div>
                <div className="img-container" style={{
                width: '84px',
        }}>
                    <img src={nep} alt="" style={{
                        height:"auto" ,
                        maxWidth:"100%"
                    }}/>
                </div>
        <div className="img-container" style={{
                width: '110px',
        }}>
            <img src={nic} alt=""style={{
                height:"auto" ,
                maxWidth:"100%",
                marginTop:"12px",
            }} />
        </div>
    </div>
    <br />
    <br />
    <div className="intro-btns" style={{
        display:"flex",
        gap:"16px"
    }}>
        <div className="btns-container" >
    <a className="intro-btn" aria-disabled="true"style={{
            paddingLeft:"20px"
        }}>
            Job Portal
            </a>
            <br />
        <br />
        <h6 style={{marginLeft:"21px"}}>Coming Soon</h6>
        </div>
        <div className="btns-container">
        <a className="intro-btn intro-lms-btn" aria-disabled="true">Our LMS</a>
        <br />
        <br />
        <h6 style={{marginLeft:"21px"}}>Coming Soon</h6>
        </div>
    </div>
      </div>
      <div
  className="intro-container intro-img">
      <img src={hero} alt="" />
      </div>
      </div>
    </>
  )
}
