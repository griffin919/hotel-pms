import './App.css';
import React from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/pages/Overview';
import BackOffice from './components/pages/BackOffice';
import GuestMgt from './components/pages/GuestMgt';
import POS from './components/pages/POS';
import Revenue from './components/pages/Revenue';
import RoomMgt from './components/pages/RoomMgt';
import FrontOffice from './components/FrontOffice/FrontOffice';
import NavDrawer from './components/NavDrawer'
import StatusCircle from './components/StatusCircle'

import InHouseTable from './components/InHouseTable';

const App = () => {
  return (
      <Router>

        <div className="container">

        
        <div className="grid-item item1">
          <Header />
        
        
          <NavDrawer/>
        
            <Switch>
              <Route exact path='/' render={props=> <Overview {...props}/>}/>
              <Route exact path='/GuestMgt' render={props=> <GuestMgt {...props}/>}/>
              <Route exact path='/BackOffice'  render={props=> <BackOffice {...props}/>}/>
              <Route exact path='/POS'  render={props=> <POS {...props}/>}/>
              <Route exact path='/Revenue'  render={props=> <Revenue {...props}/>}/>
              <Route exact path='/RoomMgt'  render={props=> <RoomMgt {...props}/>}/>
              <Route exact path='/FrontOffice'  render={props=> <FrontOffice {...props}/>}/>
            </Switch>

            <h3>hello, user</h3>
             
         
        </div>

        <div className="grid-item item2" >
           <StatusCircle statusCounter={6} statusLabel={'In House'}/> 
           <StatusCircle statusCounter={3} statusLabel={'Checkout'}/> 
           <StatusCircle statusCounter={1} statusLabel={'Booked'}/> 
           <StatusCircle statusCounter={2} statusLabel={'Clean'}/> 
           <StatusCircle statusCounter={5} statusLabel={'Dirty'}/>
           <StatusCircle statusCounter={3} statusLabel={'Out of Order'}/> 
        </div>

        <div className="grid-item item3">
          <InHouseTable /> 
        </div>
   
        </div>
      </Router>
  );
}

export default App;
