import React from 'react';
import { FaInfinity, FaShippingFast, FaBolt, FaComments} from 'react-icons/fa';

function Cards() {
  return (
    <section className="section section-lg bg-gray-100">
        <div className="container text-center">
          <h2 className="custom-title">
            <span>About</span>
          </h2>
          <div className="about">
            <div className="col-md-6 col-lg-3" data-aos="fade-left" data-aos-once="true">
              <div className="card">
                <FaInfinity className="cardIcon"/>
                <h6 className="card-title">No expiry</h6>
                <p className="card-description">You do not have to worry about losing your unused data.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-left" data-aos-delay="100" data-aos-once="true">
              <div className="card">
                <FaShippingFast className="cardIcon"/>
                <h6 className="card-title">Instant delivery</h6>
                <p className="card-description">Setting up last minute? Don't worry we got you covered! Our proxies are delivered instantly after purchase.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-left" data-aos-delay="200" data-aos-once="true">
              <div className="card">
                <FaBolt className="cardIcon"/>
                <h6 className="card-title">100% Up-time</h6>
                <p className="card-description">You can rely on our proxies on any release!</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3" data-aos="fade-left" data-aos-delay="300" data-aos-once="true">
              <div className="card">
                <FaComments className="cardIcon"/>
                <h6 className="card-title">Customer support</h6>
                <p className="card-description">You can contact us with any problem - 24/7!</p>
              </div>
            </div>
          </div>
        </div>
      </section>         
  );
}

export default Cards;
