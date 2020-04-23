import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";

import App from './src/App.js';
import Home from './src/Home.js';
import About from './src/About.js';
import MI1 from './src/MI1.js';
import MI2 from './src/MI2.js';
import Github from './src/Github.js';
import Contact from './src/Contact.js';
import FAQ from './src/FAQ.js';


ReactDOM.render(
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="mi1" component={MI1}/>
          <Route path="mi2" component={MI2}/>
          <Route path="github" component={Github}/>
          <Route path="contact" component={Contact}/>
          <Route path="faq" component={FAQ}/>
        </Route>
      </Router>,
      document.getElementById('App')
    );