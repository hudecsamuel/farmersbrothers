import React from 'react';
import './Price.css';

class Price extends React.Component {
    render() {
        return (
            <div>
                <div className="Cover-photo-price"></div>
                <div className="under-Image">
                    <h1 className="Contact-heading">CENÍK</h1>
                    <div className="Main-div">
                        <div className="left">
                            <div className="calc">
                                <div className="výběr">
                                    <div className="roleta"><span>CISTERNOVÁ DOPRAVA</span>
                                        <div id="dd">
                                            <div>
                                                <span id="dd1">CISTERNOVÁ DOPRAVA</span>
                                            </div>
                                            <div>
                                            <span id="dd2">SKLIZŇOVÁ DOPRAVA</span>
                                            </div>
                                            <div>
                                            <span id="dd3">ZEMNÍ PRÁCE</span>
                                            </div>
                                        </div>
                                        <div className="arrow" onClick={dropdown}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="result">
                                <span>Předpokládaná cena:</span>
                                <span>2850 Kč</span>
                            </div>
                        </div>
                        <div className="right"><p>Obvyklá míra napuštění cisterny je 21 m<sup>3</sup></p></div>
                    </div>
                

                <div className="Notes"> 
                    <span>→ vedené ceny jsou bez DPH</span>
                    <span>→ možnost zajištění dopravy 24/7</span>
                    <span>→ výše uvedené ceny nejsou závaznou nabídkou, ta bude zaslána na základě poptávky</span>
                </div>
                </div>
            </div>
        )
         function dropdown(){
            document.getElementById('dd').style.display = 'table'
}
        }
    }

export default Price;