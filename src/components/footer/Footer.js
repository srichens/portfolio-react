import './Footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="foot">                
                <li className="foot-item">
                    <a href="https://github.com/srichens" target="blank">
                        <p className="github-grey-icon"><FaGithub/></p>
                    </a>
                </li>     
                <li className="foot-item">
                    <a href="https://www.linkedin.com/in/sarah-richens-13416a10/" target="blank">
                        <p className="github-grey-icon"><FaLinkedin/></p>
                    </a>
                </li>
                <li className="foot-item">
                    <a href="https://stackoverflow.com/users/21811888/sgwindy" target="blank">
                        <p className="github-grey-icon"><FaStackOverflow/></p>
                    </a>
                </li>                                 
            </ul>
        </div>
    )
};

export default Footer;  