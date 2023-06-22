import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = ({ currentPage, handlePageChange }) => {
   
    return (
        <div className="nav-container">
            <header className="header">
                <h1> <NavLink to="/portfolio-react" className="title">sarah richens</NavLink></h1>
                <div className="navbar">
                    <ul className="nav">                
                        <li className="nav-item">
                            {/* <a 
                                href="#about"                                     
                                onClick={() => handlePageChange('About')}                
                                className={currentPage}                                             
                            >
                            <span  id="about" >about me</span>
                            </a> */}
                            <NavLink to="/portfolio-react/about">about me</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a 
                                href="#portfolio"                         
                                onClick={() => handlePageChange('Portfolio')}
                                className={currentPage}
                            >
                            <span id="portfolio">portfolio</span>
                            </a> */}
                            <NavLink to="/portfolio-react/portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a 
                                href="#contact"    
                                            
                                onClick={() => handlePageChange('Contact')} 
                                className={currentPage}
                            >
                            <span  id="contact" >contact</span>
                            </a> */}
                            <NavLink  to="/portfolio-react/contact">contact</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a 
                                href="#resume"                       
                                onClick={() => handlePageChange('Resume')} 
                                className={currentPage}
                            >
                            <span id="resume">resume</span>
                            </a> */}
                            <NavLink to="/portfolio-react/resume">resume</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
};

export default Navbar;  