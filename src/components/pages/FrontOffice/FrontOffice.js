import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import MUTab from './MUTab'
import './FrontOffice.css'
import Booking from './Bookings/Booking';
import ManageBooking from './ManageBookings/ManageBooking';
import Reservation from './Reservation/Reservations';

const FrontOffice = () => {
  return (
    <div className="FOcontainer">
      <div className="griditem FOitem1">
        <MUTab/>
      </div>
      <div className="griditem FOitem2">
       
        <Switch>
          <Route path='/frontoffice/booking' component={Booking}/>
          <Route path='/frontoffice/managebooking' component={ManageBooking}/>
          <Route path='/frontoffice/reservation' component={Reservation}/>
        </Switch>
      </div>
    </div>
  )
}

export default FrontOffice

