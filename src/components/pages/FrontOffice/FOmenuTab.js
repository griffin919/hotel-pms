
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Bookings from './Bookings/Booking'
import ManageBooking from './ManageBookings/ManageBooking'
import Reservations from './Reservation/Resevations'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
     
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="BOOKING"/>
          <Tab label="MANAGE BOOKINGS" />
          <Tab label="RESERVATIONS" />
        </Tabs>

        {value === 0 && <Bookings /> }
        {value === 1 && <ManageBooking /> }
        {value === 2 && <Reservations /> }
    </div>
  );
}
