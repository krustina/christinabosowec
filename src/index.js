import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute} from 'react-router';
import Landing from './Landing.js';
import App from './App.js';
import Work from './Work.js';
import BioCv from './BioCv.js';
import Contact from './Contact.js';
import BedOfRoses from './BedOfRoses.js';
import DodgeSpirit from './DodgeSpirit.js';
import ScrunchieBodyTube from './ScrunchieBodyTube.js';
import ObjectSelection from './ObjectSelection.js';
import SpongeMeOff from './SpongeMeOff.js';
import './index.css';


ReactDOM.render(
    
    <Router 
    history={browserHistory}
    >
    <Route path="/" component={App}></Route>
    <IndexRoute component={Landing} />
         <Route path="work" component={Work} />
         <Route path="bio" component={BioCv} />
         <Route path="contact" component={Contact} />
         <Route path="bedOfRoses" component={BedOfRoses}/>
         <Route path="dodgeSpirit" component={DodgeSpirit}/>
         <Route path="scrunchieBodyTube" component={ScrunchieBodyTube}/>
         <Route path="objectSelection" component={ObjectSelection}/>
         <Route path="spongeMeOff" component={SpongeMeOff}/>
  </Router>,
  document.getElementById('root')
);