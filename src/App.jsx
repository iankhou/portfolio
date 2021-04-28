import React, {
// useState, useEffect
} from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Loading from './pages/Loading';
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
