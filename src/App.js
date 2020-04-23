import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Faq from './component/Faq';
//import Main from './Main';
import './css/style.css';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";


 function App(){
   return(
  <div id="menuwrapper">
  <BrowserRouter>
     <nav>
      <ul>
        <li><Link exact to="/" activeClassName="active">Home</Link></li>
        <li><Link to = "/about" activeClassName="active" >About</Link></li>
        <li><Link to ="/faq" activeClassName="active">Faq</Link></li>
      </ul>
      </nav>
         <Switch>
            <Route path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/faq" component = {Faq} />
         </Switch>
   </BrowserRouter>
   </div>
   );
 }

export default App;