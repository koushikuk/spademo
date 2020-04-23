import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
  return(
  <div id="menuwrapper">
    <nav className="navstyle">
      <ul>
        <li><Link exact to="/" activeClassName="active">Home</Link></li>
        <li><Link to = "/about" activeClassName="active" >About</Link></li>
        <li><Link to ="/faq" activeClassName="active">contact</Link></li>
      </ul>
    </nav>
  </div>
  )
}

export default Main;