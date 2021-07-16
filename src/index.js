import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import './index.css';

import Home from './App';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
