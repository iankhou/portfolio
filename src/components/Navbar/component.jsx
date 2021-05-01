import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Landing from '../../pages/Landing';
import Professional from '../../pages/Professional';
import Personality from '../../pages/Personality';
import './styles.scss';

export default () => (
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
          <Link to="/personality" className="nav_link_text">Personal</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path="/professional" component={Professional} />
      <Route path="/personality" component={Personality} />
      <Route component={Landing} />
    </Switch>
  </div>
);
