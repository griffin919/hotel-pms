
import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
              <Route  path='/overview' exact component={Overview}/>
              <Route  path='/guestMgt' exact component={GuestMgt}/>
              <Route  path='/backoffice' exact component={BackOffice}/>
              <Route  path='/pos' exact component={POS}/>
              <Route  path='/revenue' exact component={Revenue}/>
              <Route  path='/roomMgt' exact component={RoomMgt}/>
              <Route  path='/frontfffice/:page?' exact  component={props=> <FrontOffice {...props}/> }/>
              <Redirect exact from='frontoffice' to='/frontoffice/booking' />

            </Switch>

          </div>
        </div>


        
      </Router>
  );
}

export default App;
