import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

function Navbar() {

    const [change, setChange] = useState(false);
    const changePosition = 300;
  
    let position = useWindowScrollPosition();
  
    if (position.y > changePosition && !change) {
      setChange(true);
    }
  
    if (position.y <= changePosition && change) {
      setChange(false);
    }
  
    let style = {
      backgroundColor: change ? "#012344" : "transparent",
      transition: "background-color 1s ease 0s",
      height: "80px",
    };

  return (
    <nav style={style} className="navbar fixed-top navbar-expand-lg navbar-custom">
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
            <ul className="navbar-nav">
            <li>
                <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li>
                <a className="nav-link" href="/#">Contact</a>
            </li>
            <li>
                <Link className="nav-link" to="Dashboard">Dashboard</Link>
            </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;
