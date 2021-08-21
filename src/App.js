
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
import Bookings from './components/pages/FrontOffice/Bookings/Booking'
import ManageBooking from './components/pages/FrontOffice/ManageBookings/ManageBooking'
import Reservations from './components/pages/FrontOffice/Reservation/Reservations'
//---------------------

import './App.css';

const App = () => {
  return (
        <div className="container">
          <div className='grid-item item1'>
            <Header/>
          </div>
          <div className='grid-item item2'>
            <Bookings/>
            <Switch>
              <Route  path='/overview' exact component={Overview}/>
              <Route  path='/guestMgt' exact component={GuestMgt}/>
              <Route  path='/backoffice' exact component={BackOffice}/>
              <Route  path='/pos' exact component={POS}/>
              <Route  path='/revenue' exact component={Revenue}/>
              <Route  path='/roommgt' exact component={RoomMgt}/>
              {/* <Redirect exact from='/frontoffice' to='/frontoffice/booking' />
              <Route  path='/frontoffice/:page' exact  component={props=> <FrontOffice {...props}/> }/> */}
              <Route  path='/frontoffice' exact component={FrontOffice}/>
            </Switch>
          </div>
        </div>
  );
}

export default App;
