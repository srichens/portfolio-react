import './Portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/pro-solid-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { SiHeroku } from 'react-icons/si';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2 className="port-head">Portfolio</h2>
            <div className="port-container">
                
                    <div className="port-card1">
                        <div className="retro-content">
                        <h3 className="retro-head">
                            <span className="retro-text">RETR</span>
                            <span className="retro-icon">
                            <FontAwesomeIcon icon={faCompactDisc} spin />
                                </span>
                            <span className="retro-text">great</span>
                        </h3>
                        <a href="https://retro-great-1.herokuapp.com/">
                            <p className="heroku-icon"><SiHeroku/></p>
                        </a>
                        </div>
                    </div>
               
                <div className="port-card2">
                    <div className="tech-content">
                    <h3 className="tech-head">The Tech Blog</h3>
                    <a href="https://techblog74.herokuapp.com/">
                        <p className="heroku-icon"><SiHeroku/></p>
                    </a>
                    </div>
                </div>
                <div className="port-card3">
                    <div className="dec-content">
                        <h3 className="dec-head">
                            <span className="dec-bar">Decisive</span>
                        </h3>
                        <a href="https://srichens.github.io/decisive/">
                            <p className="github-icon"><FaGithub/></p>
                        </a>
                    </div>
                </div>
                <div className="port-card4">Weather Dashboard</div>
                <div className="port-card5">Note Taker</div>
                <div className="port-card6">Code Quiz</div>
            </div>
        </div>
    )
};

export default Portfolio;  