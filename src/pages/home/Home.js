import './Home.css';
import Html from '../../components/html/Html';

const Home = ( {setShowHome }) => {
    
    return (
        <div className="home-container">
            <Html />
            
            <div className="console">
                <h2 className="console-head">Console</h2>
                <ul className="toc">
                <li className="toc-item" ><span className="arrow">&gt;</span><a href="#main"onClick={() => setShowHome(false)}>enter</a></li>
                    {/*<li className="toc-item"><span className="arrow">&gt;</span>
                        <a 
                            href="#about" 
                            onClick={() => handleClickItem('About')} 
                            className={clickItem === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                        about me
                        </a>
                    </li>
                    <li className="toc-item"><span className="arrow">&gt;</span>
                        <a 
                            href="#portfolio" 
                            onClick={() => handleClickItem('Portfolio')} 
                            className={clickItem === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                        portfolio
                        </a>
                    </li>
                    <li className="toc-item"><span className="arrow">&gt;</span>
                        <a 
                            href="#contact" 
                            onClick={() => handleClickItem('Contact')} 
                            className={clickItem === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        contact
                        </a>
                    </li>
                    <li className="toc-item"><span className="arrow">&gt;</span>
                    <a 
                        href="#resume" 
                        onClick={() => handleClickItem('Resume')} 
                        className={clickItem  === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                     resume
                    </a>
                    </li>*/}
                </ul>            
            </div>
        </div>
    )
};

export default Home;  