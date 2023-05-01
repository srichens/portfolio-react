import Main from './pages/main/Main';
import Home from './pages/home/Home';
import React, { useState } from 'react';

function App() {
   const [mainPage, setMainPage] = useState('Home');
   const handleClickItem = (click) => setMainPage(click);
  return (
    <div className="App">
      <Home clickItem={mainPage} handleClickItem={handleClickItem}/>           
    </div>
  );
}

export default App;
