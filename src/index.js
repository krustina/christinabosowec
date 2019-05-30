import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, applyRouterMiddleware, IndexRoute } from 'react-router';
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
import Performance from './Performance.js';

import DoulaAbout from './DoulaAbout.js';
import DoulaServices from './DoulaServices.js';
import DoulaFAQ from './DoulaFAQ.js';
import DoulaTestamonials from './DoulaTestamonials.js';
import DoulaContact from './DoulaContact';
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
    <Route path="bedOfRoses" component={BedOfRoses} />
    <Route path="dodgeSpirit" component={DodgeSpirit} />
    <Route path="scrunchieBodyTube" component={ScrunchieBodyTube} />
    <Route path="objectSelection" component={ObjectSelection} />
    <Route path="spongeMeOff" component={SpongeMeOff} />
    <Route path="performance" component={Performance} />

    <Route path="doula_about" component={DoulaAbout} />
    <Route path="doula_services" component={DoulaServices} />
    <Route path="doula_FAQ" component={DoulaFAQ} />
    <Route path="doula_testamonials" component={DoulaTestamonials} />
    <Route path="doula_contact" component={DoulaContact} />
  </Router>,
  document.getElementById('root')
);