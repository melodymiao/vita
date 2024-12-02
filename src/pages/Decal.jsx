import Header from '../assets/components/Header';
import Footer from '../assets/components/Footer';
import './Decal.css';

const Decal = () => {
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
              Every fall, our Education & Training Directors teach a 2-unit P/NP DeCal to prepare students for the IRS Certification Exam. During our weekly classes, we cover content tested on the Basic Certification Exam, discuss wealth inequality in relation to the federal income tax system, and practice filing returns using the TaxSlayer software. In December, our members take the IRS Exam to become certified and prepared to volunteer in the spring.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="divider"></div>
          <div className="course-info">
            <div>
              <p className="label">Course Number </p>
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
          <div className="faq-item">
            <div className="faq-question">
              <p>What certification level do you cover?</p>
            </div>
            <div className="faq-answer">
              <p>We cover the IRS Basic Certification level.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Do I have to enroll in the fall DeCal for units to join?</p>
            </div>
            <div className="faq-answer">
              <p>Yes, enrolling in the fall DeCal is required to earn units and join the program.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Can I get units for volunteering in the spring?</p>
            </div>
            <div className="faq-answer">
              <p>No, units are only awarded for participation in the fall DeCal.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question">
              <p>Are there classes in the spring?</p>
            </div>
            <div className="faq-answer">
              <p>No, the DeCal classes are only offered in the fall semester.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Decal;
