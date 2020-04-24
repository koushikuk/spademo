import React from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

const Menu = () =>{

 return(
  <div>
   <nav className="navstyle">
    <ul>
       <li> <Link exact to="/">  Home </Link> </li>
       <li> <Link to="About"> About </Link> </li>
       <li> <Link to="Faq"> Faq  </Link> </li>
    </ul>
   </nav>
  </div>
 )

}



export default Menu;