import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './components/Navbar';
import './App.scss';

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
    </ParallaxProvider>
  );
}

export default App;
