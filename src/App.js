// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from '../src/components/Navigation';
import Home from '../src/components/Home';
import About from '../src/components/About';
import Contact from '../src/components/Contact';
import Footer from '../src/components/footer'; // Import the Footer component
import '../src/css/bootstrap/css/bootstrap.min.css';
import './App.css'; // Import your external CSS file for additional styling

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Include the Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
