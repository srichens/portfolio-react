import './Main.css';
import About from '../about/About.js';
import Portfolio from '../portfolio/Portfolio.js';
import Contact from '../contact/Contact.js';
import Resume from '../resume/Resume.js';

const Main = () => {
    return (
        <div className="body">
            <header>
                <h1>Sarah Richens</h1>
                <nav>
                    <ul>
                        <li>About Me</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </nav>
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