import './Main.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';
import About from '../about/About.js';
import Portfolio from '../portfolio/Portfolio.js';
import Contact from '../contact/Contact.js';
import Resume from '../resume/Resume.js';

const Main = () => {
    const [currentPage, setCurrentPage] = useState('About');
    const renderPage = () => {        
        if (currentPage === 'About') {           
        return <About />;
        }
        if (currentPage === 'Portfolio') {
        return <Portfolio />;
        }
        if (currentPage === 'Contact') {
        return <Contact />;
        }   
        return <Resume />;
    };
    const handlePageChange = (page) => { 
        setCurrentPage(page);}

    return (
        <div className="body">
            <header className="header">
            <h1> <Link to="/portfolio-react">sarah richens
                </Link></h1>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
              
            </header>
            <main className="main">
               {renderPage()}
            </main>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
};

export default Main;  