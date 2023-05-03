import './Resume.css';
import "./assets/sarah-richens-resume.pdf"

const Resume = () => {
    return (
        <div className="resume">
            <h2>Resume</h2>
            <a href="https://drive.google.com/file/d/1lm5XwqTFQ1KyqgV2Ehwlmj2onNQlT7mI/view?usp=sharing" 
            target="blank" download>Download Resume</a>
        </div>
    )
};

export default Resume;  