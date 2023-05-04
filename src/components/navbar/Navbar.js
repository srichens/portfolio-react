import './Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
   
    return (
        <div className="navbar">
            <ul className="nav">                
                <li className="nav-item">
                    <a 
                        href="#about"                                     
                        onClick={() => handlePageChange('About')}                
                        className={currentPage}                                             
                    >
                    <span  id="about" >about me</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#portfolio"                         
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage}
                    >
                    <span id="portfolio">portfolio</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#contact"    
                                     
                        onClick={() => handlePageChange('Contact')} 
                        className={currentPage}
                    >
                     <span  id="contact" >contact</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#resume"                       
                        onClick={() => handlePageChange('Resume')} 
                        className={currentPage}
                    >
                     <span id="resume">resume</span>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;  