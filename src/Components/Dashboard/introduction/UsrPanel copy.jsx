import React, { useState, useRef, useEffect } from 'react';
import { Divider } from '@material-ui/core';
import { FaAngleDown } from 'react-icons/fa';
import '../introduction/UsrPanel.css';

function NavPanel() {
  return (
    <UsrPanel> 
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </UsrPanel>
  );
}
  
function UsrPanel(props) {
  return (
    <nav className="usr-panel">
      <ul className="panel-nav">{props.children}</ul>
    </nav>
  );
}
  
function NavItem(props) {
  const [open, setOpen] = useState(false);
  var toggle = true;

function Collapse() {
  document.getElementById("sidebar").classList.toggle("clicked");
  if (toggle) {
    let tab = document.getElementById("phoneMenu");
    tab.classList.toggle("clicked");
    toggle = false;
  }
  else {
    let tab = document.getElementById("phoneMenu");
    tab.classList.remove("clicked");
    toggle = true;
  }
}

const [response, setResponse] = useState(null);

useEffect(() => {
    async function fetchData() {
        let response = await fetch("https://neatproxies-api-development.up.railway.app/user");
        response = await response.json();
        setResponse(response);
    }
    fetchData();
}, []);

    return (
      <li className="panel-item">
        <button className="smallOpener" onClick={Collapse}>
          <div className="tab" id="phoneMenu">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </button>
        {(response) ?       
        <button className="panel-button" onClick={() => setOpen(!open)}>
          <img src={response.discord.avatar} alt="logo"></img>
          {response.discord.username}
        <FaAngleDown size="12px"/>
        </button>
        :
        <p>loading</p>
        }
        {open && props.children}
      </li>
    );
  }
  
  function DropdownMenu() {
    const [setActiveMenu] = useState('main');
    const dropdownRef = useRef(null);
      
    function DropdownItem(props) {
      return (
        <button className="dropdown-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
        </button>
      );
    }
  
    return (
      <div className="dropdown" ref={dropdownRef}>
  
          <div className="dropdownmenu">
            <DropdownItem>Support</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <Divider light variant="middle"/>
            <DropdownItem>Sign Out</DropdownItem>
  
          </div>
    
      </div>
    );
  }
  
  export default NavPanel;

