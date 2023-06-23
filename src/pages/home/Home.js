import './Home.css';
import Html from '../../components/html/Html';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { Link } from 'react-router-dom';


const Home = () => {
    
    return (
        <div className="home-container">
            <Html />            
            <div className="console">
                <h2 className="console-head">Console</h2>
                <ul className="toc">
                    <li className="toc-item" >
                        <FontAwesomeIcon className="arrow" icon={faChevronRight} fade />                  
                     <Link to="/portfolio-react/about">welcome</Link>
                    </li>
                </ul>            
            </div>
        </div>
    )
};

export default Home;  