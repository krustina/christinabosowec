import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Landing from './Landing.js';
import App from './App.js';
import Home from './Home.js';
import './index.css';



ReactDOM.render(
    
    <Router 
    history={browserHistory}
    
    >
    <Route path="/" component={App}>
        <IndexRoute component={Landing} />
         <Route path="home" component={Home} /> 
    </Route>
  </Router>,
  document.getElementById('root')
);