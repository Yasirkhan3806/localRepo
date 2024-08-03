
import './App.css';
import Slider from 'react-slick';
import safe from './Picture/icons/icon-safe-secure.svg';
import money from './Picture/icons/icon-money-back-2.svg';


export default function Reviews() {
    let data = [
        {
            name: 'Rabia Javed',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Karachi,Pakistan',
        },
        {
            name: 'Nagina Asif',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Karachi,Pakistan',
        },
        {
            name: 'Raza Ullah Sami',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'KPK,Pakistan',
        },
        {
            name: 'Kashan Soomro',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Multan,Pakistan',
        },
        {
            name: 'Naila Rozi',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Lahore,Pakistan',
        },
        {
            name: 'Mohammed Rafi',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Sindh Division,Pakistan',
        },
        {
            name: 'Ayesha Laghari',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Islamabad,Pakistan',
        },
        {
            name: 'Sidra',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at faucibus justo. Sed ac arcu malesuada, bibendum nunc at, pulvinar ipsum. Donec vel arcu vel velit ullamcorper consequat id in ',
            location: 'Bahawalnagar,Pakistan',
        },
    ]
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    
  return (
    <>
    <div className='r-m-cont'>
        <h2><b>What Students are saying</b></h2>
        <h2><b>About Internee.Pk</b></h2>
      
        <div className="data-cont"  style={{display:"flex"}}>
        <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} id={`data-item-${index}`} className="data-item" data-aos = "fade-up">
            <div className="data-review"><p style={{color:"white"}}>{item.review}</p></div>
            <div className="data-name"><span style={{color:"#FFCF5C",fontSize:"20px",fontWeight:"700"}}>{item.name}</span></div>
            <div className="data-location">{item.location}</div>
          </div>
        ))}
        </Slider>
      </div>
<div className="r-adv-cont" style={{display:"flex"}}>
    <div className="adv-cont" >
        <div className="adv-img-cont" >
            <img src={safe} alt="" />
        </div>
        <div className="adv-p-cont">
            <h3><b> Safe and secure</b></h3>
            <ul>
                <li>Powered by Microsoft Azure cloud technology.</li>
                <li>Encrypted at rest and in transit.</li>
                <li>Data resides in US-based data centers.</li>
            </ul>
        </div>
    </div>
    <div className="adv-cont" >
        <div className="adv-img-cont"  >
            <img src={money} alt="" />
        </div>
        <div className="adv-p-cont">
            <h3><b> Free From Internship <br /> To Certification</b></h3>
            <ul>
                <li>Profile Building & Optimization</li>
                <li>Free Learning Management System</li>
                <li>Hands on Tasks with Certification</li>
            </ul>
        </div>
    </div>
</div>
   </div>
      {/* </div> */}
    
    </>
  )
}
