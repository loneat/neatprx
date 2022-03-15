import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import './css/main.css'
import './css/bootstrap.min.css'
import Navbar from '../../Components/Landing/Introduction/Navbar'
import Background from '../../Components/Landing/Introduction/Background'
import Cards from '../../Components/Landing/Sections/Cards'
import ProxyPlans from '../../Components/Landing/Sections/ProxyPlans'
import SiteList from '../../Components/Landing/Sections/Sitelist'
import Footer from '../../Components/Landing/Footer'


class Landing extends Component{
  componentDidMount(){
    document.body.className="landing-body"
  }

  render(){
  return (
    <main>

      <Helmet>
        <title>Neat Proxies</title>
      </Helmet>

      <Navbar/>
      <Background/>

      <ProxyPlans/>
      <Cards/>
      <SiteList/>

      <Footer/>
    </main>
  );
  }
}

export default Landing;
