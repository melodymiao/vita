import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import LandingPhoto from '../assets/photos/home landing.jpg'
import './Home.css'


const Home = () => {
    const circles = [
        { id: 1, number: '2,490', label: 'HOURS VOLUNTEERED' },
        { id: 2, number: '1,093', label: 'RETURNS FILED' },
        { id: 3, number: '$1.9M', label: 'REFUNDS CLAIMED' },
    ];

    return (
    <>
    <Header currentPage="home"/>
    <section className='landing-section'>
        <div className="text-and-img">
            <div className="landing-text">
                <h3>UC BERKELEY</h3>
                <h1>Volunteer Income Tax Assistance Program</h1>
                <p>Looking for free tax-filing services and resources? </p>
                <Button buttonText="Get Help Today" linkTo="./free-tax-filing"/>
            </div>
            <div>
                <img className="landing-photo" src={LandingPhoto} alt="Berkeley VITA Team Photo"/>
            </div>
        </div>
    </section>

    <section className='at-a-glance-section'>
        <h2 className='at-a-glance-title'>2024 Tax Season Recap</h2>
        <div className="circle-container">
            {circles.map((circle) => (
                <div className="circle-item" key={circle.id}>
                    <div className="circle-wrapper">
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
    <Footer />
    </>
);
}
  
export default Home;