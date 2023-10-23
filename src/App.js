import './App.css';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';


function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
      </div>
      
  );
}
export default App;
