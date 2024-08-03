import React from 'react';
import "./form.css";
import Navbar from './Navbar';
import logo from "./Picture/logo.jpg"

export default function Loginform() {
  return (
    <>
    <header>
        <Navbar/>
    </header>
 
    <div className='login-m-cont' style={{background:"#6edb3c57", height:"85svh"}}>
      <div className="container">

    <input type="checkbox" id="signup_toggle"/>
    <form className="form" id='login-form'>
        <div className="form_front">
            <div className="form_details"><img src={logo} alt="" /></div>
            <input placeholder="Username" className="input" type="email" required/>
            <input placeholder="Password" className="input" type="password" required/>
            <span >
            <a href="#" className="forgot">Forget Password?</a>
 
           </span>
           <button className="btn">Login</button>
           <span style={{fontSize:"20px" }}>

                <input type="checkbox" style={{height:"17px", width:"17px"}} /> Remember Me
               
            </span>
           
        
       
        </div>
    </form>
</div>
</div>
    </>
  )
}
