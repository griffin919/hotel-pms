
import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header'

//Page imports
// ---------------------
import overview from './components/pages/Overview/Overview';
import backoffice from './components/pages/BackOffice/BackOffice';
import guestmgt from './components/pages/Guests/GuestMgt';
import pos from './components/pages/POS/POS';
import revenue from './components/pages/Revenue/Revenue';
import roommgt from './components/pages/RoomMgt/RoomMgt';
import frontoffice from './components/pages/FrontOffice/FrontOffice';
// ----------------------

//FO page inports
import Bookings from './components/pages/FrontOffice/Bookings/Booking'
import ManageBooking from './components/pages/FrontOffice/ManageBookings/ManageBooking'
import Reservations from './components/pages/FrontOffice/Reservation/Resevations'
//---------------------

import './App.css';

const App = () => {
  return (
        <div className="container">
          <div className='grid-item item1'>
            <Header/>
          </div>
          <div className='grid-item item2'>
            <Switch>
              <Route  path='/overview' exact component={overview}/>
              <Route  path='/guestMgt' exact component={guestmgt}/>
              <Route  path='/backoffice' exact component={backoffice}/>
              <Route  path='/pos' exact component={pos}/>
              <Route  path='/revenue' exact component={revenue}/>
              <Route  path='/roommgt' exact component={roommgt}/>
              <Redirect exact from='/frontoffice' to='/frontoffice/booking' />
              <Route  path='/frontoffice/:page?' exact  component={props=> <frontoffice {...props}/> }/>

            </Switch>

          </div>
        </div>
  );
}

export default App;
