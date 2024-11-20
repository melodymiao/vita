import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './FreeTaxFiling.css'
import picture from './vita_img.png'
import hearing from "./hearing.png"
import wheelchair from "./wheelchair.png"
import money from './money.png'

const FreeTaxFiling = () => {
    return (
    <>
    <Header currentPage="free-tax-filing"/>
    <section>
        <div id="title-section">
            <div id="title-words">
                <h1>Free Tax Preparation Services</h1>
                <body>Have a certified volunteer file your tax return, 
                    either in-person or virtually.</body>
            </div>
            <div>
                <img src={picture} className="img"/>
            </div>

        </div>
    </section>
    <section>
        <div id="requirements-section">
            <div id="requirements-text">
                <h3>We offer free tax help to people who need 
                    assistance in preparing their own tax returns, 
                    including those who:</h3>
            </div>
            <div id="requirements-cards">
                <div id="card">
                    <img src={money} className="icon"/>
                    <body>Generally make $67,000 or less</body>
                </div>
                <div id="card">
                    <img src={wheelchair} className="icon"/>
                    <body>Have disabilities</body>
                </div>
                <div id="card">
                    <img src={hearing} className="icon"/>
                    <body>Have language barriers</body>
                </div>
            </div>



        </div>
    </section>
    <Footer />
    </>
);
}
  
export default FreeTaxFiling;