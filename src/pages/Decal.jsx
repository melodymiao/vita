import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import './Decal.css';
import React, { useState } from "react";


const Decal = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 return (
   <>
     <Header currentPage="decal" />
     <section>
       <div className="image-text-container">
         <img src="decal.jpg" alt="Decal Class Image" />
         <div className="hero-text-container">
           <h1 className="big-text">DeCal</h1>
           <p className="small-text">
             Our program recruits new volunteers at the beginning of every fall semester and is a year-long commitment. Please check back in late August for more information about our 2025-26 recruiting cycle!
           </p>
         </div>
       </div>


       <div className="volunter-reqs-container">
        <h1 className="big-text">Volunteer Requirements</h1>
        <div className="reqs">
          <div className="req-item">
            <h1 className="big-text">1</h1>
            <p className="small-text">UC Berkeley student</p>
          </div>
          <div className="req-item">
            <h1 className="big-text">2</h1>
            <p className="small-text">Taken the Fall DeCal</p>
          </div>
          <div className="req-item">
            <h1 className="big-text">3</h1>
            <p className="small-text">Able to Commit 30 Volunteer Hours in Spring</p>
          </div>
        </div>
      </div>

      <div className="about-decal-container">
      <div className="text-left">
      <h1 className="big-text">About the DeCal</h1>
      <p className="small-text">
        Every fall, our Education & Training Directors teach a 2-unit P/NP DeCal to prepare students for the IRS Certification Exam. During our weekly classes, we cover content tested on the Basic Certification Exam, discuss wealth inequality in relation to the federal income tax system, and practice filing returns using the TaxSlayer software. In December, our members take the IRS Exam to become certified and prepared to volunteer in the spring.
      </p>
      <a href="https://decal.studentorg.berkeley.edu/courses/7513">
      <button className="learn-more">Learn More</button>
      </a>
    </div>
    <div className="divider"></div>
    <div className="course-info">
      <div>
        <p className="label">Course Number</p>
        <p className="value">SOCWEL 97/197</p>
      </div>
      <div>
        <p className="label">Semester</p>
        <p className="value">Fall 2024</p>
      </div>
      <div>
        <p className="label">Units</p>
        <p className="value">2</p>
      </div>
    </div>
  </div>

       <div className="faq-container">
          <h1 className="big-text">Frequently Asked Questions</h1>
          {[
            { question: "What certification level do you cover?", answer: "We cover the IRS Basic Certification level." },
            { question: "Do I have to enroll in the fall DeCal for units to join?", answer: "Yes, enrolling in the fall DeCal is required to earn units and join the program." },
            { question: "Can I get units for volunteering in the spring?", answer: "No, units are only awarded for participation in the fall DeCal." },
            { question: "Are there classes in the spring?", answer: "No, the DeCal classes are only offered in the fall semester." },
          ].map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={`faq-toggle ${activeIndex === index ? "open" : ""}`}>+</span>
              </div>
              {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
            </div>
          ))}
        </div>
     </section>
     <Footer />
   </>
 );
};

export default Decal;
