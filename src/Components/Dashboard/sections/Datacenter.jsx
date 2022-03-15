import React, { useState, useEffect } from 'react';
import PurchaseGenTab from "../elements/PurchaseGenTab";

function Datacenter() {

    const dc = {
        title: 'Datacenter Packages',
        plan: 'Datacenter Plan'
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
                <PurchaseGenTab title={dc.title} genPlan={false} gen={false} purchasePlan={false} option={false}/>
                <div className="proxyStats">
                <div className="stats-card">
                    <div className="resiPage stats-inner">
                        <h7 className="dsh-title">Available DC Packages</h7>
                        {(response)?
                        <p>{response.datacenter.packages.length}<span className="stats-clr">Packages</span></p>
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

export default Datacenter;
