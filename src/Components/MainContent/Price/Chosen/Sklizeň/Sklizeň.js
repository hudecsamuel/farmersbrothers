import React,{useState} from "react";


function Sklizeň() {
    const [dny, obrátka]=useState(1); /*useState je hook, který nám vrací současný stav (dny) a funkci(obrátka), která stav updatuje*/
    const [hodiny, náklad]=useState(1);

    function handleClick() {
         if(hodiny<4){
                var výsledek = 3000 * dny;
            }
            else if(hodiny>11){
                var výsledek = 11000 * dny
            }
            else{
                var výsledek = hodiny * dny * 1000;
            }
        
        console.log(výsledek);
        document.getElementById("výsledek").innerHTML = výsledek;
        }

        return (
            <div className="komplet">
                <div className="parametr">

                    <div className="obrátka">
                        <div className="dny">
                            <span>Počet dní</span>
                         </div>
                         <div className="zadání-dny">
                             <div className="plus" onClick={() => obrátka(dny + 1)}></div>
                             <span>{dny}</span>
                             <div className="minus" onClick={() => obrátka(dny - 1)}></div>
                         </div>
                    </div>

                    <div className="náklad">
                        <div className="hodiny">
                            <span>Počet hodin</span>
                         </div>

                         <div className="zadání-hodiny">
                             <div className="plus" onClick={() => náklad(hodiny + 1)}></div>
                                <span>{hodiny}</span>
                            <div className="minus"onClick={() => náklad(hodiny - 1)}></div>
                        </div>
                     </div>
                </div>
           
                <button className="tlačítko" onClick={handleClick}><span>Spočítat</span></button>
           </div>
        )
    }
export default Sklizeň;