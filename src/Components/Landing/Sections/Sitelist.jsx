import React from 'react';

function Sitelist() {
  return (
    <section className="section section-md">
    <div className="container text-center">
        <h2 className="custom-title">
            <span>Sites we support</span>
        </h2>
        <img className="site-logo-sm" src={require('../../../Public/sites/ftl.png')} alt="logo"></img>
        <img className="site-logo-sm" src={require('../../../Public/sites/supreme.png')} alt="logo"></img>
        <img className="site-logo-lg" src={require('../../../Public/sites/shopify.png')} alt="logo"></img>
        <img className="site-logo-md" src={require('../../../Public/sites/mesh.png')} alt="logo"></img>
    </div>
    </section>     
  );
}

export default Sitelist;
