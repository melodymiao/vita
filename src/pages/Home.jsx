import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './Home.css'

const Home = () => {
    return (
    <>
    <Header currentPage="home"/>
    <section>
        <p>
            This is a section
        </p>
        <Button buttonText="Example button" linkTo="https://www.someurl.com"/>
    </section>
    <Footer />
    </>
);
}
  
export default Home;