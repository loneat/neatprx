import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import './css/style.css'
import Sidebar from '../../Components/Dashboard/introduction/Sidebar'
import NavPanel from '../../Components/Dashboard/introduction/UsrPanel';
import DashLand from '../../Components/Dashboard/sections/DashLand'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Residental from '../../Components/Dashboard/sections/Residental'
import Datacenter from '../../Components/Dashboard/sections/Datacenter'
import Admin from '../../Components/Dashboard/sections/Admin'


class Dashboard extends Component{

  constructor(props){
    super(props);
    this.state={
      isActive: false
      }
  }

  navState = ()=>{
    this.setState((state)=> ({isActive: !state.isActive}));
  }

  componentDidMount(){
    document.body.className="dashboard-body"
  }


  render(){
    return (
      <Router>
      <main>

        <Helmet>
          <title>Neat Proxies | Dashboard</title>
        </Helmet>

        <Sidebar active={this.state.isActive}  click={this.navState}/>
        <NavPanel active={this.state.isActive}  click={this.navState}/>
        <Switch>
          <Route exact path="/dashboard" component={DashLand}/>
          <Route exact path="/Residental" component={Residental}/>
          <Route exact path="/datacenter" component={Datacenter}/>
          <Route exact path="/admin" component={Admin}/>
        </Switch>
      </main>
      </Router>
    );
  }
}

export default Dashboard;
