import React, { useState } from 'react'
import './Price.css'
import Cisterna from './Chosen/Cisterna/Cisterna'
import Sklizeň from './Chosen/Sklizeň/Sklizeň'
import Zemní from './Chosen/Zemní/Zemní'
import CisternaVpravo from './Chosen/Cisterna/CisternaVpravo'
import SklizeňVpravo from './Chosen/Sklizeň/SklizeňVpravo'
import ZemníVpravo from './Chosen/Zemní/ZemníVpravo'

function Price() {
  const [show, setShow] = useState(false)
  const [choice, setChoice] = useState(1)


  function handleClick(e) { /* když pracuji ve funkci, tak musíš napsat že se jedná o funkci, jinak to nepozná*/
    const elText = e.target.innerText;
    switch (elText) {
      case 'CISTERNOVÁ DOPRAVA':
        setChoice(1);
        break;
      case 'SKLIZŇOVÁ DOPRAVA':
        setChoice(2);
        break;
      case 'ZEMNÍ PRÁCE':
        setChoice(3);
        break;
      default:
        setChoice(1);
    }
    setShow(!show);
    document.getElementById("výsledek").innerHTML = '0 Kč';
  }

  function showChoice() {
    switch (choice) {
      case 1:
        return <Cisterna />;
      case 2:
        return <Sklizeň />;
      case 3:
        return <Zemní />;
      default:
        return <Cisterna />;
    }

  }
  function showChoice2() {
    switch (choice) {
      case 1:
        return <CisternaVpravo />;
      case 2:
        return <SklizeňVpravo />;
      case 3:
        return <ZemníVpravo />;
      default:
        return <CisternaVpravo />;
    }
  }


  return (
    <div className='Biggest-price-div'>
      <div className="Cover-photo-price"></div>
      <div className="under-Image">
        <h1 className="Contact-heading">CENÍK</h1>
        <div className="Main-div">
          <div className="left">
            <div className="Chosen">
              <div onClick={() => setShow(!show)} className="roleta">{choice !== 1 ? 'SKLIZŇOVÁ DOPRAVA' : 'CISTERNOVÁ DOPRAVA'}
                {
                  show ? <div style={show? {animation: 'Scale-up 0.5s ease forwards'} : {}} id="dd">
                    {choice !== 1 ? <div onClick={handleClick}>CISTERNOVÁ DOPRAVA</div> :
                    <div onClick={handleClick}>SKLIZŇOVÁ DOPRAVA</div>}
                    {/* <div onClick={handleClick}>ZEMNÍ PRÁCE</div> */}
                  </div> : null
                }
                <div style={show? {animation: 'Rotate 0.5s ease forwards'} : {}} className="arrow"></div>
              </div>
            </div>
            {showChoice()}
            <div className="result">
              <span>Předpokládaná cena:</span>
              <span id="výsledek">0 Kč</span>
            </div>
          </div>
          <div className="right">{showChoice2()}</div>
        </div>
      </div>
    </div>
  );
}

export default Price;