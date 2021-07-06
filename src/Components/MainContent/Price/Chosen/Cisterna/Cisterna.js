import React,{useCallback, useState} from "react";
import Price from "../../Price";



function Cisterna() {
    const [délka, obrátka]=useState(1); /*useState je hook, který nám vrací současný stav (délka) a funkci(obrátka), která stav updatuje*/
    const [objem, náklad]=useState(1);

        return (
            <div className="komplet">
                <div className="parametr">

                    <div className="obrátka">
                        <div className="délka">
                            <span>Délka obrátky [km]</span>
                         </div>
                         <div className="zadání-obrátka">
                             <div className="plus" onClick={() => obrátka(délka + 1)}></div>
                             <span>{délka}</span>
                             <div className="minus" onClick={() => obrátka(délka - 1)}></div>
                         </div>
                    </div>

                    <div className="náklad">
                        <div className="objem">
                            <span>Objem nákladu [m3]</span>
                         </div>

                         <div className="zadání-náklad">
                             <div className="plus" onClick={() => náklad(objem + 1)}></div>
                                <span>{objem}</span>
                            <div className="minus"onClick={() => náklad(objem - 1)}></div>
                        </div>
                     </div>

                    <div className="mkm">
                        <div className="cena">
                            <span>Cena za m3/km</span>
                        </div>
                        <div className="přepočet"><span>{délka/objem}</span></div>
                        </div>
                </div>
           
                <button className="tlačítko"><span>Spočítat</span></button>
           </div>
        )
    }
export default Cisterna;