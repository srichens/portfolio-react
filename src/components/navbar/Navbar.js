import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   
    return (
        <div className="nav-container">
            <header className="header">
                <h1> <NavLink to="/portfolio-react" className="title">sarah richens</NavLink></h1>
            </header>
            <div className="navbar">
                    <ul className="nav">                
                        <li className="nav-item">                     
                            <NavLink to="/portfolio-react/about">about me</NavLink>
                        </li>
                        <li className="nav-item">                       
                            <NavLink to="/portfolio-react/portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item">                      
                            <NavLink  to="/portfolio-react/contact">contact</NavLink>
                        </li>
                        <li className="nav-item">                      
                            <NavLink to="/portfolio-react/resume">resume</NavLink>
                        </li>
                    </ul>
            </div>            
        </div>
    )
};

export default Navbar;  