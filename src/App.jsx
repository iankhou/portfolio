import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Navbar />
      </Router>
    </ParallaxProvider>
  );
}

export default App;
