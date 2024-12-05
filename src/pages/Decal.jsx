import React, { useEffect } from 'react';
import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import './Decal.css';

const Decal = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.faq-button');

    // Event handler function
    const toggleAnswer = (event) => {
      const button = event.currentTarget;
      const answer = button.closest('.faq-question').nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        document.querySelectorAll('.faq-answer').forEach((answer) => {
          answer.style.display = 'none';
        });
        answer.style.display = 'block';
      }
    };

    buttons.forEach((button) => button.addEventListener('click', toggleAnswer));

    return () => {
      buttons.forEach((button) => button.removeEventListener('click', toggleAnswer));
    };
  }, []);

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
            <h1 className="big-text">1</h1>
            <p className="small-text">UC Berkeley student</p>
            <h1 className="big-text">2</h1>
            <p className="small-text">Taken the Fall DeCal</p>
            <h1 className="big-text">3</h1>
            <p className="small-text">Able to Commit 30 Volunteer Hours in Spring</p>
          </div>
        </div>

        <div className="about-decal-container">
          <div className="text-left">
            <h1 className="big-text">About the DeCal</h1>
            <p className="small-text">
              Every fall, our Education & Training Directors teach a 2-unit P/NP DeCal to prepare students for the IRS Certification Exam.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="faq-container">
          <h1 className="big-text">Frequently Asked Questions</h1>
          <div className="faq-item">
            <div className="faq-question">
              <button className="faq-button">What certification level do you cover?</button>
            </div>
            <div className="faq-answer">
              We cover the IRS Basic Certification level.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <button className="faq-button">Do I have to enroll in the fall DeCal for units to join?</button>
            </div>
            <div className="faq-answer">
              Yes, enrolling in the fall DeCal is required to earn units and join the program.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <button className="faq-button">Can I get units for volunteering in the spring?</button>
            </div>
            <div className="faq-answer">
              No, units are only awarded for participation in the fall DeCal.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <button className="faq-button">Are there classes in the spring?</button>
            </div>
            <div className="faq-answer">
              No, the DeCal classes are only offered in the fall semester.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Decal;
