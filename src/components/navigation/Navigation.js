import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
<nav className="nav-menu">
  <ul>
        <li><NavLink exact to='/'>Search</NavLink></li>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/computers'>Computers</NavLink></li>
   </ul>
 </nav>
 );

 export default Navigation;