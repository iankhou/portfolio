import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Professional from "./pages/Professional";
import Personality from "./pages/Personality";
import "./App.scss";

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/professional" element={<Professional />} />
        <Route path="/personality" element={<Personality />} />
        <Route path="*" element={<Landing />} />
        <Route element={<Landing />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
