import './About.css';
import profilepic from '../../images/profilepic.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="profile-pic">
               <img className="image" src={profilepic} alt="Sarah Richens"></img>
            </div>
            <div className="bio">
                <p>Sarah needs a job and would like to be a software developer.</p>
            </div>
            
            
        </div>
    )
};

export default About;  