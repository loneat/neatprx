import React from 'react';
import { Link } from 'react-router-dom';

function Background() {
  return (
    <div className="img-container">
        <div className="inner-container">
            <h1 data-aos="fade-up">Neat Proxies</h1>
            <h2 data-aos="fade-up" data-aos-delay="100">Fast, reliable and affordable proxies? Neat!</h2>
            <div data-aos="fade-up" data-aos-delay="200">
                <Link className="button" to="/dashboard">Buy now!</Link>
            </div>
        </div>
    </div>      
  );
}

export default Background;
