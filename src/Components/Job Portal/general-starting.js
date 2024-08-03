import React from 'react';
import boxIcon from "./Job portal Picture/icons8-toolbox-30.png";
import bg from './Job portal Picture/bg_2.png';


export default function Generalstarting(props) {
  return (
    <>
       <div  className="main-cont" style={{backgroundImage: `url(${bg})`}}>
        <div className="overlay"></div> {/* Add the overlay div */}
        <div className='content' style={{height:"100svh",display:"flex", flexDirection:"column",justifyContent:'flex-end',paddingLeft:'20svh',paddingBottom:"12svh"}}>
        <p style={{color:"white"}}  ><span>Home </span>&gt; {props.pageName}</p>
        <h1 style={{letterSpacing:"1px", fontSize:"80px"}}>{props.pageName}</h1>
        </div>
      </div> 
    </>
  )
}
