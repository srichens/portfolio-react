import './About.css';
import profilepic from './images/profilepic.jpg';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

const About = () => {    
    return (
        <div className="about-container">
            <Navbar />
            <div className="about">
                <div className="pic-container">
                    <div className="profile-pic">
                    <img className="image" src={profilepic} alt="Sarah Richens"></img>
                    </div>
                </div>
                <div className="bio">
                    <h2 className="about-title">About Me</h2>
                    <p>I recently earned a certificate in full-stack software engineering from the University of Minnesota after many years as an administrative professional. I'm looking forward to a new and interesting challenge, while continuing my dedication to excellence, hard work, and great customer service in the work place. I am particularly interested in front-end development, where, along my obsessive need to "figure it out," I could also make use of my creative and artistic side.</p>
                </div>               
            </div>
            <Footer />
        </div>      
    )
};

export default About;  