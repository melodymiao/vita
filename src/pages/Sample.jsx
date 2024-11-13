import Header from '../assets/components/Header'
import Footer from '../assets/components/Footer'
import Button from '../assets/components/Button'
import './Sample.css'

const Sample = () => {
    return (
    <>
    <Header currentPage="sample"/>
    
    <section>
        <h1>H1 Header: Page Titles</h1>
        <h2>H2 Header: Section Titles</h2>
        <h3>H3 Header: Small Green Text</h3>
        <p>Paragraph text: For long text</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </section>

    <Footer />
    </>
);
}
  
export default Sample;