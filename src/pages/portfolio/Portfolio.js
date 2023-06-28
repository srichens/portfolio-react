import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintbrushPencil } from '@fortawesome/pro-regular-svg-icons';
import { faCompactDisc, faCloudShowersHeavy, faSun } from '@fortawesome/pro-solid-svg-icons';
import { faPencil } from '@fortawesome/pro-duotone-svg-icons';
import { FaGithub } from 'react-icons/fa';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <Navbar />
            <div className="portfolio">
                <h2 className="port-head">Portfolio</h2>
                <div className="port-container">    
                    <div className="port-card1">
                        <div className="mixer-content">
                            <a href="https://paint-mixer.herokuapp.com/" target="blank">
                                <h3 className="mixer-head">
                                    <span className="m">m</span>
                                    <span className="i">i</span>
                                    <span className="login-icon">
                                        <FontAwesomeIcon icon={faPaintbrushPencil} flip="vertical" />
                                    </span>
                                    <span className="e">e</span>
                                    <span className="r">r</span>
                                </h3>
                            </a>
                            <p className="tag1">An app for helping artists overcome artist block*</p>
                            <p className="tech1">MERN Stack</p>
                            <a href="https://github.com/Gatewayss/mixer" target="blank">
                                <p className="github-icon"><FaGithub/></p>
                            </a>
                        </div>
                    </div>            
                    <div className="port-card2">
                        <div className="retro-content">
                            <a href="https://retro-great-1.herokuapp.com/" target="blank">
                                <h3 className="retro-head">
                                    <span className="retro-text">
                                        RETR
                                    </span>
                                    <span className="retro-icon">
                                        <FontAwesomeIcon icon={faCompactDisc} spin />
                                    </span>
                                    <span className="retro-text">
                                        great
                                    </span>
                                </h3>
                            </a>
                            <p className="tag2">A social media app for people ages 45 and up*</p>
                            <p className="tech2">Node, Express, Javascript, CSS, Handlebars, MySQL</p>
                            <a href="https://github.com/srichens/retro-great" target="blank">
                                <p className="github-icon"><FaGithub/></p>
                            </a>
                        </div>
                    </div>                                   
                    <div className="port-card3">
                        <div className="tech-content">
                            <a href="https://techblog74.herokuapp.com/" target="blank">
                                <h3 className="tech-head">The Tech <br></br>Blog</h3>
                            </a>
                            <p className="tag3">A community blog for web developers*</p>
                            <p className="tech3">Node, Express, Javascript, <br></br>Tailwind, Handlebars, MySQL</p>
                            <a href="https://github.com/srichens/tech-blog" target="blank">
                                <p className="github-icon"><FaGithub/></p>
                            </a>
                        </div>
                    </div>
                    <div className="port-card4">
                        <div className="weath-content">
                            <a href="https://srichens.github.io/weather-dashboard/" target="blank">
                                <h3 className="weath-head">
                                    <span className="weath-icons">
                                        <span className="sun"><FontAwesomeIcon icon={faSun} beatFade /></span>
                                        Weather
                                        <span className="rain"><FontAwesomeIcon icon={faCloudShowersHeavy} beatFade /></span>
                                    </span>
                                    Dashboard
                                </h3>
                            </a>      
                            <p className="tag4">A weather forecast app</p>
                            <p className="tech4">Javascript, CSS, HTML</p>           
                            <a href="https://github.com/srichens/weather-dashboard" target="blank">
                                <p className="github-icon"><FaGithub/></p>
                            </a>
                        </div>
                    </div>
                    <div className="port-card5">
                        <div className="dec-content">
                            <a href="https://srichens.github.io/decisive/" target="blank">
                                <h3 className="dec-head">Decisive</h3>
                            </a>
                            <p className="tag5">An app that answers the question, "Should I go out?"</p>
                            <p className="tech5">Javascript, Tailwind, HTML</p>
                            <a href="https://github.com/srichens/decisive" target="blank">
                                <p className="github-icon"><FaGithub/></p>
                            </a>                     
                        </div>
                    </div>           
                    <div className="port-card6">
                        <div className="note-content">
                            <a href="https://note-taker-srichens.herokuapp.com/" target="blank">
                                <h3 className="note-head">
                                    Note Taker
                                    <span className="note-icon">
                                        <FontAwesomeIcon icon={faPencil}  bounce/>
                                    </span>
                                </h3>
                            <p className="tag6">A note taking app</p>
                            <p className="tech6">Node, Express, Javascript, CSS, HTML</p>
                            </a>                                        
                            <a href="https://github.com/srichens/note-taker" target="blank">
                                <p className="github-black-icon"><FaGithub/></p>
                            </a>
                        </div>
                    </div>                
                </div>                
            </div>
            <div className="asterik">*This app requires authentication. Please use guest@gmail.com and password12345 or sign up!</div>
            <Footer />
        </div>
    )
};

export default Portfolio;  