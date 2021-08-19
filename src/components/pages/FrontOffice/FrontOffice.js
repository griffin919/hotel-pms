import React from 'react'
import './FrontOffice.css'
import DataTable from '../../DataTable'
import FOmenuTab from './FOmenuTab'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bookings from './Bookings/Booking'
import ManageBooking from './ManageBookings/ManageBooking'
import Reservations from './Reservation/Resevations'

const FrontOffice = () => {
    return (
        <Router>
            <div className="FOcontainer">
                <div className="grid-item GMitem1" >
                  <FOmenuTab/>
                </div>

                <div className="grid-item GMitem2">
                <Switch>
                    <Route  path='/Bookings' exact component={Bookings}/>
                    <Route  path='/ManageBooking' exact component={ManageBooking}/>
                    <Route  path='/Reservations' exact component={Reservations}/>
                </Switch>

                </div>
    
            </div>
        </Router>
    )
}

export default FrontOffice
