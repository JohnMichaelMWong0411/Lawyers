import './App.css';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';


function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
      </div>
      
  );
}
export default App;
