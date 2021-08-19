
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'

//Page imports
// ---------------------
import Overview from './components/pages/Overview/Overview';
import BackOffice from './components/pages/BackOffice/BackOffice';
import GuestMgt from './components/pages/Guests/GuestMgt';
import POS from './components/pages/POS/POS';
import Revenue from './components/pages/Revenue/Revenue';
import RoomMgt from './components/pages/RoomMgt/RoomMgt';
import FrontOffice from './components/pages/FrontOffice/FrontOffice';
// ----------------------

//FO page inports
import Bookings from './Bookings/Booking'
import ManageBooking from './ManageBookings/ManageBooking'
import Reservations from './Reservation/Resevations'
//---------------------

import './App.css';

const App = () => {
  return (
      <Router>
        <div className="container">
          <div className='grid-item item1'>
            <Header/>
          </div>
          <div className='grid-item item2'>
            <Switch>
              <Route  path='/Overview' exact component={Overview}/>
              <Route  path='/GuestMgt' exact component={GuestMgt}/>
              <Route  path='/BackOffice' exact component={BackOffice}/>
              <Route  path='/POS' exact component={POS}/>
              <Route  path='/Revenue' exact component={Revenue}/>
              <Route  path='/RoomMgt' exact component={RoomMgt}/>
              <Route  path='/FrontOffice' exact  component={FrontOffice}/>
              <Route  path='/FrontOffice/Booking' exact  component={Bookings}/>
              <Route  path='/FrontOffice/ManageBookings' exact  component={ManageBooking}/>
              <Route  path='/FrontOffice/Resevation' exact  component={Reservations}/>

            </Switch>

          </div>
        </div>


        
      </Router>
  );
}

export default App;
