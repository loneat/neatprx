import React from 'react';
import { Divider } from '@material-ui/core';
import { FaTerminal, FaHome, FaServer, FaWrench, FaDiscord, FaTwitterSquare } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../introduction/Sidebar.css';

function Sidebar(props) {

    return(
        
        <nav className={`sidebar ${props.active ? "clicked" : ""}`} id="sidebar">
            <div className="logo">
                <a href="/#"><img src={require('../../../Public/img/logo.png')} alt="logo"></img></a>
            </div>
            <ul className="menu" id="menu">
                <NavLink className="dash-nav" onClick={()=>props.click()} activeClassName="active" to="/dashboard"><FaTerminal className="sb-ico"/>Dashboard</NavLink>
                <NavLink className="dash-nav" onClick={()=>props.click()} activeClassName="active" to="/residental"><FaHome className="sb-ico"/>Residental</NavLink>
                <NavLink className="dash-nav" onClick={()=>props.click()} activeClassName="active" to="/datacenter"><FaServer className="sb-ico"/>Datacenter</NavLink>
                <NavLink className="dash-nav" onClick={()=>props.click()} activeClassName="active" to="/admin"><FaWrench className="sb-ico"/>Admin</NavLink>
            </ul>
            <Divider variant="middle"  />
            <div className="socials">
                <a href="https://discord.gg/s7SnnWy"><FaDiscord color="#14abfa" size="20px"/></a>
                <Divider orientation="vertical" variant="middle" flexItem={true}/>
                <a href="https://twitter.com/NeatProxies"><FaTwitterSquare color="#14abfa" size="20px"/></a>
            </div>
        </nav>
    )
}

export default Sidebar;
