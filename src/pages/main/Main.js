import './Main.css';
import Navbar from '../navbar/Navbar.js';
import About from '../about/About.js';
import Portfolio from '../portfolio/Portfolio.js';
import Contact from '../contact/Contact.js';
import Resume from '../resume/Resume.js';



const Main = () => {
    
    return (
        <div className="body">
            <header>
                <h1>sarah richens</h1>
                <Navbar />
              
            </header>
            <main className="main">
                <About />
                <Portfolio />
                <Contact />
                <Resume />
            </main>
        </div>
    )
};

export default Main;  