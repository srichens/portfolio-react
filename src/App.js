import Main from './pages/main/Main';
import Home from './pages/home/Home';
import React, { useState } from 'react';

function App() { 
//   return (
//     <div className="App">
//       <Main/>                    
//     </div>
//   );
// }
  const [showHome, setShowHome] = useState(true); 
  
  return (
    <div className="App">
     { showHome?<Home setShowHome={setShowHome} /> : <Main/>  };  
                 
    </div>
  );
}


export default App;
