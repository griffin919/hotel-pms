
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const {match, history} = props;
  const {params} = match;
  const {page} = params;
   
  const tabNameToIndex={
    0: "booking",
    1: "managebooking",
    2: "reservation"
  }
 
  const indexToTabName={
   "booking": 0,
   "managebooking": 1,
   "reservation": 2
 }
 


  const classes = useStyles();
  const [value, setValue] = React.useState(indexToTabName[page]);

 

  const handleChange = (event, newValue) => {
    // history.push(`/frontoffice/${tabNameToIndex[newValue]}`)
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
     
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="BOOKING"/>
          <Tab label="MANAGE BOOKINGS" />
          <Tab label="RESERVATIONS" />
        </Tabs>
{/* 
        {value === 0 && <booking /> }
        {value === 1 && <managebooking /> }
        {value === 2 && <reservations /> } */}
    </div>
  );
}
