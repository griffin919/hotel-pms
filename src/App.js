import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './components/pages/Overview';
import BackOffice from './components/pages/BackOffice';
import GuestMgt from './components/pages/GuestMgt';
import POS from './components/pages/POS';
import Revenue from './components/pages/Revenue';
import RoomMgt from './components/pages/RoomMgt';
import FrontOffice from './components/pages/FrontOffice';

import InHouseTable from './components/InHouseTable';

const App = () => {
  return (
    <div className="conatainer">
      <Header/>

      <Router>
       <Navbar/>
       <Switch>
        <Route path='/' exact component={Overview}/>
        <Route path='/GuestMgt' exact component={GuestMgt}/>
        <Route path='/BackOffice' exact component={BackOffice}/>
        <Route path='/POS' exact component={POS}/>
        <Route path='/Revenue' exact component={Revenue}/>
        <Route path='/RoomMgt' exact component={RoomMgt}/>
        <Route path='/FrontOffice' exact component={FrontOffice}/>
       </Switch>

      </Router>
    
      <InHouseTable/>    
    </div>
  );
}

export default App;
