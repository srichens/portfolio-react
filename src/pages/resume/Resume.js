import './Resume.css';
import Navbar from '../../components/navbar/Navbar.js';
import Footer from '../../components/footer/Footer.js';

const Resume = () => {
    return (
        <div className="resume-container">
            <Navbar />
        <div className="resume">
            <h2 className="resume-head">Resume</h2>
                <p className="resume-p">Download my <a href="https://drive.google.com/file/d/1NawbchVszyvBtxv3xE8sajI3yoKR6hCm/view?usp=sharing" target="blank" download>resume</a>
                </p>
            <div className="resume-section">  
                <h3 className="resume-sec-head">Front End Proficiencies</h3>
                <ul className="resume-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li> 
                    <li>Tailwind</li>                    
                </ul>
            </div>    
            <div className="resume-section">
                <h3 className="resume-sec-head">Back End Proficiencies</h3>
                <ul className="resume-list">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>GraphQL</li>
                </ul>
            </div>  
        </div>
        <Footer />
        </div>
    )
};

export default Resume;  