import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Founder from "./Founder";


import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/founder" element={<Founder />} />
        </Routes>
      </Container>

      <Footer />
    </>
  );
}

export default App;
