import React from 'react';
import fav from './Picture/fav.png';
import frontend from './Picture/FrontEnd.webp';
import cloud from './Picture/cloud.webp';
import graphic from './Picture/logo-designer-working-computer-desktop.webp';
import backend from './Picture/BackendDevelopment.webp';
import videoediting from './Picture/portrait-woman-customer-service-worker.webp';
import mobileApp from './Picture/Mobile App Developer.webp';
import chatbot from './Picture/chatbotDevelopment.webp';
import marketing from './Picture/marketing-assistant.webp';
import cyber from './Picture/hack.webp';
import technical from './Picture/young-woman-teaching-english-lessons.webp';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AboutInternee() {
    const data = [
        { image: frontend, title: "Front-End Internship",
            description: "Choosing Internee.pk means more than just learning to code. It's about career advancement and propelling your journey towards becoming a proficient frontend developer. We believe in sculpting future tech leaders, and with us, you become part of a vibrant community committed to excellence."
        },
        { image: cloud, title: "Cloud Computing Internship",
            description: "At Internee.pk, we understand that cloud computing is not just about technology; it's about enabling people to create, manage, and scale applications. Our internships will help you build strong cloud skills, build innovative applications, and contribute to the global cloud ecosystem."
        },
        { image: graphic, title: "Graphic Designer Internship",
            description: "Internee.pk is committed to creating a diverse and inclusive community of professionals who are passionate about their careers. As a graphic designer intern, you'll gain valuable experience in designing and developing user-friendly interfaces for various applications. By joining our team, you'll learn to create visually appealing and engaging products that meet the needs of your clients."
        },
        { image: backend, title: "Back-End Development Internship",
            description: "At Internee.pk, we believe in pushing boundaries and creating innovative solutions. As a back-end developer intern, you'll gain valuable experience in building scalable and secure web applications. You'll learn to design and implement efficient data storage and retrieval systems, and contribute to the development of cutting-edge web applications."
        },
        { image: videoediting, title: "Video Editing Internship",
            description: "As a video editing intern, you'll gain valuable experience in editing and animating videos for various applications. You'll learn to create engaging and visually appealing content, and contribute to the development of innovative and visually captivating videos for your clients."
        },
        { image: mobileApp, title: "Mobile App Development Internship",
            description: "At Internee.pk, we believe in creating a diverse and inclusive community of professionals who are passionate about their careers. As a mobile app developer intern, you'll gain valuable experience in building cross-platform mobile applications using various programming languages and frameworks. You'll learn to design and implement user-friendly interfaces, and contribute to the development of innovative and visually captivating mobile applications for your clients."
        },
        { image: chatbot, title: "Chatbot Development Internship",
            description: "At Internee.pk, we believe in creating a diverse and inclusive community of professionals who are passionate about their careers. As a chatbot developer intern, you'll gain valuable experience in building custom, personalized, and engaging chatbots using various programming languages and frameworks. You'll learn to design and implement user-friendly interfaces, and contribute to the development of innovative and visually captivating chatbots for your clients."
        },
        { image: marketing, title: "Digital Marketing Internship",
            description: "At Internee.pk, we believe in creating a diverse and inclusive community of professionals who are passionate about their careers. As a digital marketing intern, you'll gain valuable experience in designing and implementing effective digital marketing strategies for various applications. You'll learn to create engaging and visually appealing content, and contribute to the development of innovative and visually captivating digital marketing campaigns for your clients."
        },
        { image: cyber, title: "CyberSecurity Internship",
            description: "At Internee.pk, we believe in creating a diverse and inclusive community of professionals who are passionate about their careers. As a cybersecurity intern, you'll gain valuable experience in designing and implementing effective cybersecurity strategies for various applications. You'll learn to create engaging and visually appealing content, and contribute to the development of innovative and visually captivating cybersecurity campaigns for your clients."
        },
        { image: technical, title: "Technical Writing Internship",
            description: "At Internee.pk, we believe in creating a diverse and inclusive community of professionals who are passionate about their careers. As a technical writing intern, you'll gain valuable experience in designing and implementing effective technical writing strategies for various applications. You'll learn to create engaging and visually appealing content, and contribute to the development of innovative and visually captivating technical writing campaigns for your clients."
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div style={{
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div className="fav-container">
                <img src={fav} alt="About internee fav" />
            </div>
            <div className="info-container" style={{
                marginTop: "42px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center"
            }}>
                <h1>Who Is Internee.pk</h1>
                <p style={{ textAlign: "center", marginLeft: "244px", marginRight: "244px" }}>
                    The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
                </p>
                <h5 style={{ color: "rgba(0, 0, 0, 0.81)" }}><b>👇Click Below and grab your internship now👇</b></h5>
            </div>
            {/* <div className="main-carousel-container" style={{
                height: "165vh",
                width: "95vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
                background: "green",
                borderRadius: "5%",
                marginLeft:"10px",
                boxShadow:"18px 18px 36px #bebebe"}}>
                <div className="carousel-container" style={{ width: '80%',}}>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className="card" style={{
                                height: "911px", // Adjusted card height
                                width: "415px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "30px",
                                paddingTop:"0px",
                                borderRadius:"20%"
                            }}>
                                <img src={item.image} alt={item.title} className='carosal-img'  />
                                <h3 style={{
                                    marginLeft:"20px",
                                    paddingBottom:"20px"
                                }}>{item.title}</h3>
                                <p style={{
                                    marginLeft:"20px",
                                    fontSize:"16px",
                                    color:"black",
                                    paddingBottom:"20px"

                                }}>{item.description}</p>
                                <button className='intro-btn intro-lms-btn carosal-btn'>Apply Now</button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <h2 style={{
                    color:"white",
                    marginTop:"30px"
                }}>Learn Skills 
                    <span style={{fontWeight:"bolder"}}> Market Will Be Yours</span>
                </h2>
            </div> */}
        </div>
    );
}
