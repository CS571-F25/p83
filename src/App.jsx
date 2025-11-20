import React from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import NavigationBar from './NavigationBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
