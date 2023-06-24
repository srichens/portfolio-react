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
                    <p>Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.
                        Sarah needs a job and would like to be a software developer. Sarah needs a job and would like to be a software developer.</p>
                </div>               
            </div>
            <Footer />
        </div>      
    )
};

export default About;  