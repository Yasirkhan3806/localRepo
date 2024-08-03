import React from 'react'

export default function Reviewcard() {
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
  return (
    <div className="data">
        {data.map((item, index) => (
          <div key={index} className="data-item">
            <div className="data-review"><p style={{color:"white"}}>{item.review}</p></div>
            <div className="data-name"><span style={{color:"#FFCF5C",fontSize:"20px",fontWeight:"700"}}>{item.name}</span></div>
            <div className="data-location">{item.location}</div>
          </div>
        ))}

      </div>
  )
}
