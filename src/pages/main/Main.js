import './Main.css';
import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.js';
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
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="body">
            <header>
                <h1>sarah richens</h1>
                <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
              
            </header>
            <main className="main">
               {renderPage()}
            </main>
        </div>
    )
};

export default Main;  