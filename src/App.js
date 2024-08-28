import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // Example component
import AboutUs from './components/AboutUs'; // Example component
import Services from './components/Services'; // Example component
import Contact from './components/Contact'; // Example component
import Footer from './components/Footer'; // Example component

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
