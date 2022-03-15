import React, { useState, useEffect } from "react";
import PurchaseGenTab from "../elements/PurchaseGenTab";

function Residental() {

    const resi = {
        title: 'Proxy Generator'      
    };

    const [response, setResponse] = useState(null);

    useEffect(() => {
      async function fetchData() {
          let response = await fetch("https://neatproxies-api-development.up.railway.app/user");
          response = await response.json();
          setResponse(response);
      }
      fetchData();
  }, []);

    return(
    <div className="page-container">
        <div className="page-content"> 
            <PurchaseGenTab title={resi.title} genPlan={true} radioButtons={true} cntry={true} quantity={true} gen={true} purchasePlan={true} option={true}/>
            <div className="proxyStats">
            <div className="stats-card">
                    <div className="resiPage stats-inner">
                        <h7 className="dsh-title">Elite Plan Usage</h7>
                        {(response) ?
                        <p>{response.residential.dataplans.premium.left}<span className="stats-clr">GB</span></p>
                        :
                        <p>loading</p>
                        }
                    </div>
                </div>
                <div className="stats-card">
                    <div className="resiPage stats-inner">
                        <h7 className="dsh-title">Speed Plan Usage</h7>
                        {(response) ?
                        <p>{response.residential.dataplans.basic.left}<span className="stats-clr">GB</span></p>
                        :
                        <p>loading</p>
                        }
                    </div>
                </div>
                <div className="guide-card">
                    <div className="stats-inner">
                    <h7 className="dsh-title">Check our proxy documentation</h7>
                    <button className="proxy-gen-btn" type="button">FAQ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default Residental;
