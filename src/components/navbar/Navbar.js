import './Navbar.css';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className="navbar">
            <ul className="nav">                
                <li className="nav-item">
                    <a 
                        href="#about" 
                        onClick={() => handlePageChange('About')} 
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                     about me
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#portfolio" 
                        onClick={() => handlePageChange('Portfolio')} 
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                    portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#contact" 
                        onClick={() => handlePageChange('Contact')} 
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                     contact
                    </a>
                </li>
                <li className="nav-item">
                    <a 
                        href="#resume" 
                        onClick={() => handlePageChange('Resume')} 
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                     resume
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;  