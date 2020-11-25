import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Landing from './pages/Landing';
import Professional from './pages/Professional';
import Personality from './pages/Personality';
import './App.scss';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <div>
          <nav className="navbar">
            <h1 className="name">Ian Hou</h1>
            <ul className="nav_ul">
              <li className="nav_item">
                <Link to="/" className="nav_link_text">Home</Link>
              </li>
              <li className="nav_item">
                <Link to="/professional" className="nav_link_text">Professional</Link>
              </li>
              <li className="nav_item">
                <Link to="/personality" className="nav_link_text">Personality</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/professional">
              <Professional />
            </Route>
            <Route path="/personality">
              <Personality />
            </Route>
            <Route path="/">
              <Landing />
            </Route>
          </Switch>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
