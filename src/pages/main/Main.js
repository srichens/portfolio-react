import './Main.css';
import About from '../about/About.js';
import Portfolio from '../portfolio/Portfolio.js';
import Contact from '../contact/Contact.js';
import Resume from '../resume/Resume.js';



const Main = () => {

    
    return (
        <div className="body">
            <header>
                <h1>sarah richens</h1>
                <nav>
                    <ul>
                        <li><button>about me</button></li>
                        <li><button>portfolio</button></li>
                        <li><button>contact</button></li>
                        <li><button>resume</button></li>
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