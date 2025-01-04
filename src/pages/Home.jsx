import React, { useEffect, useRef } from 'react';
import { HashLink } from "react-router-hash-link";

import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import LandingPhoto from '../assets/photos/home landing.jpg'
import FreeResources from '../assets/photos/free resources.png'
import AboutPhoto from '../assets/photos/aboutphoto.jpg'
import SponsorEY from '../assets/photos/EY Logo.png'
import SponsorPWC from '../assets/photos/PwC Logo.png'
import SponsorCFRM from '../assets/photos/CFRM Logo.png'
import SponsorDeloitte from '../assets/photos/Deloitte Logo.png'
import SponsorAndersen from '../assets/photos/Andersen Logo.png'

import './Home.css'


const Home = () => {
    
    const circles = [
        { id: 1, number: '2,490', label: 'hours volunteered' },
        { id: 2, number: '1,093', label: 'returns filed' },
        { id: 3, number: '$1.9M', label: 'refunds claimed' },
    ];

    const circleRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        entry.target.style.setProperty('--animation-delay', `${index * 0.3}s`);
                        entry.target.classList.add('animate-circle');
                    }
                });
            },
            { threshold: 0.5 }
        );

        circleRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            circleRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
    <>
    <Header currentPage="home"/>
    <section className='landing-section'>
        <div className="text-and-img">
            <div className="landing-text">
                <h4>UC BERKELEY</h4>
                <h1>Volunteer Income Tax Assistance Program</h1>
                <p>Looking for free tax-filing services and resources? </p>
                <Button buttonText="Get Help Today" linkTo="./free-tax-filing"/>
            </div>
            <div>
                <HashLink className='floating-icon' to="/free-tax-filing#free-tax-resources" smooth>
                    <img src={FreeResources} alt="Free Resources"/>
                </HashLink>
                <img className="landing-photo" src={LandingPhoto} alt="Berkeley VITA Team Photo"/>
            </div>
        </div>
    </section>

    <section className='at-a-glance-section'>
        <h2 className='at-a-glance-title'>2024 Tax Season Recap</h2>
        <div className="circle-container">
            {circles.map((circle, index) => (
                <div className="circle-item" key={circle.id}>
                    <div
                        className="circle-wrapper"
                        ref={(el) => (circleRefs.current[index] = el)}
                    >
                        <svg width="200" height="200" viewBox="0 0 200 200">
                            <circle className="circle" cx="100" cy="100" r="90"></circle>
                        </svg>
                        <h3 className="number">{circle.number}</h3>
                    </div>
                    <h3 className="label">{circle.label}</h3>
                </div>
            ))}
        </div>
    </section>

    <section className='about-section'>
        <div className="text-and-img">
            <div className="about-text">
                <h2>About Us</h2>
                <p>UC Berkeley Volunteer Income Tax Assistance (VITA) Program is a student-run organization that was established in 2010 through the Public Service Center.</p>
                <p>During the fall semester, we teach a DeCal (student-lead course) to prepare our students for the IRS Certification Exams. In the spring, our students volunteer with partnering VITA sites across the Bay Area and beyond.</p>
                <p>UC Berkeley VITA operates as a Registered Student Organization (RSO), a student service organization under the Public Service Center, and as a DeCal through the Social Welfare Department.</p>
            </div>
            <div>
                <img className="landing-photo" src={AboutPhoto} alt="Berkeley VITA Team Photo"/>
            </div>
        </div>
    </section>

    <section className='sponsors-section'>
            <div className="about-text">
                <h2>Sponsors</h2>
            </div>
            <div className="image-row">
                <img className="logo-photo" src={SponsorAndersen} alt="Andersen"/>
                <img className="logo-photo" src={SponsorCFRM} alt="CFRM"/>
                <img className="logo-photo" src={SponsorDeloitte} alt="Deloitte"/>
                <img className="logo-photo" id="EY" src={SponsorEY} alt="EY"/>
                <img className="logo-photo" id = "PWC" src={SponsorPWC} alt="PWC"/>
            </div>

    </section>

    <Footer />
    </>
);
}
  
export default Home;