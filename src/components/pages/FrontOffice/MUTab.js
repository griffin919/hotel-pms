import React from 'react';
import {Tab, Tabs, Paper, makeStyles} from '@material-ui/core';
import { Link, Route, Switch } from 'react-router-dom';
import Booking from './Bookings/Booking';
import ManageBooking from './ManageBookings/ManageBooking';
import Reservation from './Reservation/Reservations';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function MUTabs(){
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

const routes = ["/frontoffice/booking", "/frontoffice/managebooking", "/frontoffice/reservation"]

 
  return(
    // <AppBar position="static">
    <Paper className={classes.root}>
        <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
          <Tab label="Booking" value={routes[0]} component={Link} to={routes[0]}/>
          <Tab label="Manage Booking" value={routes[1]}  component={Link} to={routes[0]}/>
          <Tab label="Reservation" value={routes[2]} component={Link} to={routes[0]}/>
        </Tabs>

        <Switch>
          <Route path='/frontoffice/booking' component={Booking}/>
          <Route path='/frontoffice/managebooking' component={ManageBooking}/>
          <Route path='/frontoffice/reservation' component={Reservation}/>
        </Switch>
    </Paper>
  )
}