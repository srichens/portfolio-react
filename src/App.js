import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Resume from './pages/resume/Resume';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {   
  return (
    <Router>
    <div>  
     <Routes>
        <Route 
          path="/portfolio-react" 
          element={<Home />} 
        />    
        <Route 
          path="/portfolio-react/about" 
          element={<About />} 
        />      
        <Route 
          path="/portfolio-react/portfolio" 
          element={<Portfolio />} 
        />  
        <Route 
          path="/portfolio-react/contact" 
          element={<Contact />} 
        />     
        <Route 
          path="/portfolio-react/resume" 
          element={<Resume />}
        />
          <Route 
          path="/portfolio-react/navbar" 
          element={<Navbar />}
        />
     
        </Routes>        
    </div>   
    </Router>
  );
}

export default App;