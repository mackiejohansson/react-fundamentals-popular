import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () =>
   (
     <ul className="nav">
       <li>
         <NavLink exact activeClassName="active" to="/">
            Home
         </NavLink>
       </li>
       <li>
         <NavLink activeClassName="active" to="/battle">
            Battle
         </NavLink>
       </li>
       <li>
         <NavLink activeClassName="active" to="/popular/all">
            Popular
         </NavLink>
       </li>
     </ul>
  );


export default Nav;
