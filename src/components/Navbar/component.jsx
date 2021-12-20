import React from 'react';
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Landing from '../../pages/Landing';
import Professional from '../../pages/Professional';
import Personality from '../../pages/Personality';
import './styles.scss';

const NavBar = () => (
  <>
    <nav className="navbar">
      <h1>
        <Link to="/" className="name">Ian Hou</Link>
      </h1>
      <ul className="nav_ul">
        <li className="nav_item">
          <Link to="/" className="nav_link_text">Home</Link>
        </li>
        <li className="nav_item">
          <Link to="/professional" className="nav_link_text">Professional</Link>
        </li>
        <li className="nav_item">
          <Link to="/personality" className="nav_link_text">Personal</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" exact element={<Landing />} />
      <Route path="/professional" element={<Professional />} />
      <Route path="/personality" element={<Personality />} />
      <Route path="*" element={<Landing />} />
      <Route element={<Landing />} />
    </Routes>
  </>
);

export default NavBar