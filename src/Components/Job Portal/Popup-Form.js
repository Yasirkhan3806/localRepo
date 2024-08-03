// import React, { useState } from 'react';
// import './PopupForm.css'; // Import the CSS file

// function PopupForm({ togglePopup }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     togglePopup(); // Close the popup after submission
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-form">
//         <button className="close-btn" onClick={togglePopup}>X</button>
//         <form onSubmit={handleSubmit}>
//             <h3 style={{letterSpacing:"1px"}}>
//                 Login
//             </h3>
//           <div className='p-m-cont'> 
//             <label htmlFor="Name"></label>
//             <input
//             className='popup-input'
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder='Name'
//             />
//             <label htmlFor="password"></label>
//             <input
//              className='popup-input'
//               type="password"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder='password'
//             />
//           <p style={{fontSize:"16px", marginTop:"10px"}}>  <input  type = 'checkbox'/> Remember Me</p>
         
//           </div>
//           <div style={{display:"flex", justifyContent:"flex-end"}} className='p-b-container'>
//           <button style={{alignSelf:"right"}} type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './PopupForm.css'; // Import the CSS file

function PopupForm({ togglePopup }) {


  const handleToggle = () => {

    togglePopup();
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    handleToggle();
  };

  return (
    <div className={`popup-overlay`}>
      <div className={`popup-form`}>
        <button className="close-btn" onClick={handleToggle}>X</button>
        <form onSubmit={handleSubmit}>
          <h3 style={{letterSpacing:"1px"}}>
            Login
          </h3>
          <div className='p-m-cont'>
            <label htmlFor="Name"></label>
            <input
              className='popup-input'
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
            />
            <label htmlFor="password"></label>
            <input
              className='popup-input'
              type="password"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='password'
            />
            <p style={{fontSize:"16px", marginTop:"10px"}}>
              <input type = 'checkbox'/> Remember Me
            </p>
          </div>
          <div style={{display:"flex", justifyContent:"space-between"}} className='p-b-container'>
            <button type="button" onClick={handleToggle}>Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
