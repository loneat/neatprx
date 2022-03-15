import React from 'react';
import { FaDiscord, FaTwitterSquare } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
    <div className="footer-col col-sm-4">
        <h4>Neat Proxies</h4>
        <ul className="contact">
            <li>
                <a href="https://discord.gg/s7SnnWy" className="footer-button"><FaDiscord className="la-ico"/>Discord</a>
            </li>
            <li>
                <a href="https://twitter.com/NeatProxies" className="footer-button"><FaTwitterSquare className="la-ico"/>Twitter</a>
            </li>
        </ul>
    </div>
    </footer>      
  );
}

export default Footer;
