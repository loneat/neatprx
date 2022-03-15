import React, { useRef, useState, useEffect } from 'react';
import { Select } from 'antd';
import '../elements/PurchaseGenTab.css';
import '../elements/Selector';
import Selector from '../elements/Selector';

const { Option } = Select;

function PurchaseGenTab(props) {

const [purchaseOpen, setRotatingOrStatic] = useState(false);
const [purchaseButtonText, setPurchaseButtonText] = useState("Purchase");

    function clicki() {
        setRotatingOrStatic(prevState => !prevState);
        (!purchaseOpen) ? setPurchaseButtonText("Close") : setPurchaseButtonText("Purchase");
    }


const [proxies, setProxies] = useState("");

    const proxyChange = (e) => {
        const value = e;
        const plan = response.datacenter.packages.find(plan => plan.plan.id === value);
        let output = "";
        plan.proxies.forEach(proxie => {
          output += proxie + "\n"
        })
        setProxies(output);
    }  
    
const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand('copy');
        e.target.focus();
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
        <div className="wrapper">
        <div className="wrapperForm">
        <form id="transformTable" className="table" style={{ transform: (purchaseOpen) ? "translateX(-92%)" : "translateX(0%)" }}>
            <h7 className="dsh-card-title">{props.title}</h7>
            {
                (props.genPlan)?
            <Select defaultValue="Elite">
                <Option value="Elite">Elite - Residental Plan</Option>
                <Option value="Speed">Speed - Residental Plan</Option>
            </Select>
            :
            <Select onChange={proxyChange} defaultValue="DEFAULT">
                <Option value="DEFAULT" disabled hidden>Select Plan</Option>
                {(response)?
                response.datacenter.packages.map(dcProxy => 
                    <Option value={dcProxy.plan.id}>{dcProxy.plan.name}</Option>
                )
                :
                <p>loading</p>
                }
            </Select>
            }
            {
                (props.radioButtons)?
            <fieldset>
            <label className="radioButton">
                <input type="radio" name="radio" defaultChecked={true} />
                <div className="clickable">
                    <p className="proxyType">Static</p>
                </div>
            </label>
            <label className="radioButton">
                <input type="radio" name="radio" />
                <div className="clickable">
                    <p className="proxyType">Rotating</p>
                </div>
            </label>
            </fieldset>
            :
            <React.Fragment/>
            }
            {
                (props.cntry)?
            <Selector></Selector>
            :
            <React.Fragment/>
            }
            {
                (props.quantity)?
            <input className="gen-option" type="number" placeholder="Quantity"/>
            :
            <React.Fragment/>
            }
            <textarea className="gen-option" rows="8" value={proxies} readOnly onClick={copyToClipboard} ref={textAreaRef}></textarea>
            {
                (props.gen)?
            <button className="proxy-gen-btn" type="button">Generate</button>
            :
            <React.Fragment/>
            }
        </form>
        <form className="tableBehind">
            <h7 className="dsh-card-title">Purchase Proxies</h7>
            {
                (props.purchasePlan)?
            <Select defaultValue="Elite">
                <Option value="Elite">Elite - Residental Plan</Option>
                <Option value="Speed">Speed - Residental Plan</Option>
            </Select>
            :
            <Select defaultValue="DC1">
                {(response) ?
                <Option value="DC1">DC Plan</Option>
                :
                <p>loading</p>
                }
            </Select>
            }
            {
                (props.option)?
            <Select defaultValue="1GB">
                <Option value="1GB">1GB</Option>
                <Option value="2GB">2GB</Option>
            </Select>
            :
            <Select defaultValue="10">
                    <Option value="10">10 IPs</Option>
                    <Option value="20">20 IPs</Option>
            </Select>
            }
            <input className="gen-option" placeholder="Discount (optional)"></input>
            <input className="gen-option" placeholder="Your Name"></input>
            <input className="gen-option" placeholder="Card Number"></input>
            <button className="proxy-gen-btn" type="button">Purchase</button>
        </form>
    </div>

    <div className="purchaseButton" onClick={clicki}>
        <p id="clickButton">{purchaseButtonText}</p>
    </div>
    </div>
    )
}

export default PurchaseGenTab;