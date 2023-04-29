import './About.css';
import profilepic from '../../images/profilepic.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="pic-container">
            <div className="profile-pic">
               <img className="image" src={profilepic} alt="Sarah Richens"></img>
            </div>
            </div>
            <div className="bio">
                <h2>About Me</h2>
                <p>Sarah needs a job and would like to be a software developer.</p>
            </div>
            
            
        </div>
    )
};

export default About;  