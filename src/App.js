import React from 'react';
import './App.css';
import About from './component/About';
import Menu from './Menu';
import Home from './component/Home';
import Faq from './component/Faq';
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/faq" component={Faq} />
       </switch>
    </BrowserRouter>
  );
}
export default App;