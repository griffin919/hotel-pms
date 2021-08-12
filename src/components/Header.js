import HeaderTitle from "./HeaderTitle"
import React from 'react'
import '../components/header.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview/Overview';
import BackOffice from './pages/BackOffice/BackOffice';
import GuestMgt from './pages/Guests/GuestMgt';
import POS from './pages/POS/POS';
import Revenue from './pages/Revenue/Revenue';
import RoomMgt from './pages/RoomMgt/RoomMgt';
import FrontOffice from './pages/FrontOffice/FrontOffice';
import NavDrawer from './NavDrawer'


const Header = () => {
    return (
        <header className='header-wrapper'>
            <NavDrawer/>
            <Switch>
              <Route exact path='/Overview' render={props=> <Overview {...props}/>}/>
              <Route exact path='/GuestMgt' render={props=> <GuestMgt {...props}/>}/>
              <Route exact path='/BackOffice'  render={props=> <BackOffice {...props}/>}/>
              <Route exact path='/POS'  render={props=> <POS {...props}/>}/>
              <Route exact path='/Revenue'  render={props=> <Revenue {...props}/>}/>
              <Route exact path='/RoomMgt'  render={props=> <RoomMgt {...props}/>}/>
              <Route exact path='/FrontOffice'  render={props=> <FrontOffice {...props}/>}/>
            </Switch>

            <h3>hello, user</h3>
            
        </header>
    )
}

export default Header


