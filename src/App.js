import React, { useEffect } from 'react';
import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import Landing from './Pages/Landing/Landing';
import Dashboard from './Pages/Dashboard/Dashboard'
import DashLand from '../../neatproxies-web/src/Components/Dashboard/sections/DashLand'
import Residental from '../../neatproxies-web/src/Components/Dashboard/sections/Residental'
import Datacenter from '../../neatproxies-web/src/Components/Dashboard/sections/Datacenter'
import Admin from '../../neatproxies-web/src/Components/Dashboard/sections/Admin'
import { BrowserRouter, Switch} from 'react-router-dom';

function NeatSite() {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <BrowserRouter>
    <div className="NeatSite">
      <Switch>
        <Landing exact path="/" component={Landing}/>
        <Dashboard exact path="/dashboard" component={Dashboard} />

        <Dashboard exact path="/dashboard" component={DashLand}/>
        <Dashboard exact path="/residental" component={Residental}/>
        <Dashboard exact path="/datacenter" component={Datacenter}/>
        <Dashboard exact path="/admin" component={Admin}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default NeatSite;
