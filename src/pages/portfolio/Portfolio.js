import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faCloudShowersHeavy } from '@fortawesome/pro-solid-svg-icons';
import { faPencil } from '@fortawesome/pro-duotone-svg-icons';
import { FaGithub, FaSun} from 'react-icons/fa';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="port-head">Portfolio</h2>
            <div className="port-container">                
                <div className="port-card1">
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
                        <a href="https://github.com/srichens/retro-great" target="blank">
                            <p className="github-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>               
                <div className="port-card2">
                    <div className="tech-content">
                        <a href="https://techblog74.herokuapp.com/" target="blank">
                            <h3 className="tech-head">The Tech Blog</h3>
                        </a>
                        <a href="https://github.com/srichens/tech-blog" target="blank">
                            <p className="github-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>
                <div className="port-card3">
                    <div className="dec-content">
                        <a href="https://srichens.github.io/decisive/" target="blank">
                            <h3 className="dec-head">Decisive</h3>
                        </a>
                        <a href="https://github.com/srichens/decisive" target="blank">
                            <p className="github-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>
                <div className="port-card6">
                    <div className="code-content">
                        <a href="https://srichens.github.io/code-quiz/" target="blank">
                            <h3 className="code-head">Code Quiz</h3>
                        </a>
                        <a href="https://github.com/srichens/code-quiz" target="blank">
                            <p className="github-black-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>
                <div className="port-card4">
                    <div className="weath-content">
                        <a href="https://srichens.github.io/weather-dashboard/" target="blank">
                            <h3 className="weath-head">
                                <span className="weath-icons">
                                    <span className="sun"><FaSun /></span>
                                    Weather
                                    <span className="rain"><FontAwesomeIcon icon={faCloudShowersHeavy}/></span>
                                </span>
                                Dashboard
                            </h3>
                        </a>                 
                        <a href="https://github.com/srichens/weather-dashboard" target="blank">
                            <p className="github-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>
                <div className="port-card5">
                    <div className="note-content">
                        <a href="https://note-taker-srichens.herokuapp.com/" target="blank">
                            <h3 className="note-head">
                                Note Taker
                                <span className="note-icon">
                                    <FontAwesomeIcon icon={faPencil}  bounce/>
                                </span>
                            </h3>
                        </a>                                        
                        <a href="https://github.com/srichens/note-taker" target="blank">
                            <p className="github-black-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>                
            </div>
        </div>
    )
};

export default Portfolio;  