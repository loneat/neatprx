import React, { useState, useEffect }  from 'react';
import OrderHistory from '../elements/OrderHistory';
import Success from '../elements/Success';

function DashLand() {
    
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
                <div className="stats-content">
                <section className="exp-wrapper">
                    <div className="stats-card">
                        <div className="stats-inner">
                            <h7 className="dsh-title">Elite Plan Usage</h7>
                            {(response) ?
                            <p>{response.residential.dataplans.premium.left}<span className="stats-clr">GB</span><span className="stats-clr2"> /<br />{response.residential.dataplans.premium.purchased} GB</span></p>
                            :
                            <p>loading</p>
                            }
                        </div>
                    </div>
                    <div className="stats-card">
                        <div className="stats-inner">
                            <h7 className="dsh-title">Speed Plan Usage</h7>
                            {(response) ?
                            <p>{response.residential.dataplans.basic.left}<span className="stats-clr">GB</span><span className="stats-clr2"> /<br />{response.residential.dataplans.basic.purchased} GB</span></p>
                            :
                            <p>loading</p>
                            }
                        </div>
                    </div>
                    <div className="stats-card">
                        <div className="stats-inner">
                            <h7 className="dsh-title">DC Plan Expiration</h7>
                            {(response) ?
                            <p>{response.datacenter.packages.expiring}23<span className="stats-clr">Days</span><span className="stats-clr2"> /<br />30 Days</span></p>
                            :
                            <p>loading</p>
                            }
                        </div>
                    </div>
                </section>
                <section className="tools">
                    <Success/>
                    <OrderHistory/>
                </section>
                </div>
            </div>
        )
}
export default DashLand;
