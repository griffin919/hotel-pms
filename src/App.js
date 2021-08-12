
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/pages/Overview/Overview';
import Header from './components/Header'
import './App.css';

const App = () => {
  return (
      <Router>
        <div className="container">
          <div className='grid-item item1'>
            <Header/>
          </div>
          <div className='grid-item item2'>
            <Overview/>
          </div>
        </div>
        
      </Router>
  );
}

export default App;
