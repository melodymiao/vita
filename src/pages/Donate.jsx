import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './Donate.css'

const Donate = () => {
    return (
    <>
    <Header currentPage="donate"/>
    <div className="donate">
        <div className="donate-content">
            <div className="explanatory-text">
                <h1 id="header">Donate</h1>
                <p>Because our services are pro bono, we appreciate any and all support! Donations go towards travel reimbursements for our volunteers, honoraria for our guest speakers, and other operational expenses</p>
            </div>
            <div className="button-div">
                <Button buttonText="DONATE TO VITA" linkTo="https://donate.stripe.com/6oEeYJ5CX6Ay5a03cl" target='_blank'/>
                <p>Under Student Organization Name, please enter: “Volunteer Income Tax Assistance Program”</p>
            </div>
        </div>
    </div>
    <Footer />
    </>
);
}
  
export default Donate;