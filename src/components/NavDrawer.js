import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
//import Button from '@material-ui/core/Button';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LineStyleRoundedIcon from '@material-ui/icons/LineStyleRounded';
import LocalPrintshopRoundedIcon from '@material-ui/icons/LocalPrintshopRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const TemporaryDrawer = (props) => {
  const {history} = props;
  const classes = useStyles();

// .............
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  }, [])
//-----------------

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const itemList = [
    {
      text: 'Overview',
      icon: <LineStyleRoundedIcon />,
      onClick: ()=> history.push('/')
    },
    {
      text: 'Front Office',
      icon: <DesktopWindowsRoundedIcon />,
      onClick: ()=> history.push('/FrontOffice')
    },
    {
      text: 'Rooms',
      icon: <MeetingRoomRoundedIcon />,
      onClick: ()=> history.push('/RoomMgt')
    },
    {
      text: 'Guests',
      icon: <PeopleAltRoundedIcon />,
      onClick: ()=> history.push('/GuestMgt')
    },
    {
      text: 'POS',
      icon: <LocalPrintshopRoundedIcon />,
      onClick: ()=> history.push('/POS')
    },
    {
      text: 'Revenue',
      icon: <SettingsRoundedIcon />,
      onClick: ()=> history.push('/Revenue')
    },
    {
      text: 'Back Office', 
      icon: <SettingsRoundedIcon />,
      onClick: ()=> history.push('/BackOffice')
    }

  ]

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      
      <List>
        {itemList.map((item, index) => {
          const {text, icon, onClick} = item;
          return(
          <ListItem button key={text} onClick={onClick}>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            {/* <ListItemIcon>{index % 4 === 0 ? <LocalPrintshopRoundedIcon /> : <SettingsRoundedIcon />  }</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>

          )
          
        })}
      </List>
    </div>
  );

  //--------
  const [anchorEl, setAnchorEl] = useState(false);
  // const open = Boolean(anchorEl);

  const handleDrawerOpen = () => {
      setAnchorEl(true);
  };

  const handleDrawerClose = () => {
    setAnchorEl(false);
};
  //-------------


  return (
    <div>
      {/* {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
                {/* Changed the default 'left' drawer into the menu icon */}
                    <IconButton onClick={handleDrawerOpen} onClose={handleDrawerClose}>
                        <MenuIcon className={classes.icon} /*onClick={handleClick} aria-control="fade-menu" aria-haspopup="true"*/ />                       
                    </IconButton>
                    <Drawer anchor='right' open={anchorEl} onClose={handleDrawerClose}>
                        {list('right')}
                    </Drawer>

    </div>
  );
}

export default withRouter(TemporaryDrawer)