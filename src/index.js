import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import './index.css';

import Home from './App';
import About from './pages/About';

ReactDOM.render(

  <Router>
    <div>
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </div>
  </Router>,

  document.getElementById("root")
);
