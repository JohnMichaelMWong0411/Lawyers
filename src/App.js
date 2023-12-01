import './App.css';
import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Practice from './Component/Practice/Practice';
// import Faq from './Component/Faq/Faq';

function App() {
  return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Practice />
        {/* <Faq /> */}
        <Contact />

      </div>
      
  );
}
export default App;
