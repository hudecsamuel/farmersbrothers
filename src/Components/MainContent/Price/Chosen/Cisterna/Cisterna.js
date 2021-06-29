import React,{useState} from "react";



function Cisterna() {
       
    

        return (
            <div className="komplet">
                <div className="parametr">

                    <div className="obrátka">
                        <div className="délka">
                            <span>Délka obrátky [km]</span>
                         </div>
                         <div className="zadání-obrátka">
                             <div className="plus"></div>
                             <span>10</span>
                             <div className="minus"></div>
                         </div>
                    </div>

                    <div className="náklad">
                        <div className="objem">
                            <span>Objem nákladu [m3]</span>
                         </div>

                         <div className="zadání-náklad"><div className="plus"></div><span>20</span><div className="minus"></div></div>
                     </div>

                    <div className="mkm">
                        <div className="cena">
                            <span>Cena za m3/km</span>
                        </div>
                        <div className="přepočet"><span>2,93</span></div>
                        </div>
                </div>
           
                <button className="tlačítko"><span>Spočítat</span></button>
           </div>
        )
    }
export default Cisterna;