import React, { useState } from "react";


function Sklizeň() {
    const [dny, obrátka] = useState(1); /*useState je hook, který nám vrací současný stav (dny) a funkci(obrátka), která stav updatuje*/
    const [hodiny, náklad] = useState(1);

    function handleClick() {
        let výsledek = 0;
        if (hodiny < 4) {
            výsledek = 3000 * dny;
        }
        else if (hodiny > 11) {
            výsledek = 11000 * dny
        }
        else {
            výsledek = hodiny * dny * 1000;
        }
        document.getElementById("výsledek").innerHTML = výsledek + ' Kč';
    }

    const handleDaysChange = ({target}) => {
        const newDays = target.value;
        if (isNaN(newDays) || !newDays) {
            return obrátka((prev) => prev)
        } 
        if (newDays < 1) return obrátka(1)
        return obrátka(parseInt(newDays))
    } 

    const handleHoursChange = ({target}) => {
        const newHours = target.value;
        if (isNaN(newHours) || !newHours) {
            return náklad((prev) => prev)
        } 
        if (newHours > 11) return náklad(11)
        if (newHours < 1) return náklad(1)
        return náklad(parseInt(newHours))
    } 

    const plusDays = () => obrátka((prev) => prev + 1);

    const minusDays = () => {
        if (dny <= 1) {
            return
        }
        return obrátka((prev) => prev - 1)
    }

    const plusHours = () => {
        if (hodiny >= 11) {
            return
        }
        return náklad((prev) => prev + 1)
    }

    const minusHours = () => {
        if (hodiny <= 1) {
            return
        }
        return náklad((prev) => prev - 1)
    }

    return (
        <div className="komplet">
            <div className="parametr">

                <div className="Left-inner-div">
                    <span>Celkový počet dní</span>
                </div>
                <div className="Right-inner-div">
                    <div className="minus" onClick={minusDays}></div>
                    <input onChange={handleDaysChange} value={dny}></input>
                    <div className="plus" onClick={plusDays}></div>
                </div>

                <div className="Left-inner-div">
                    <span>Počet hodin denně</span>
                </div>

                <div className="Right-inner-div">
                    <div className="minus" onClick={minusHours}></div>
                    <input onChange={handleHoursChange} value={hodiny}></input>
                    <div className="plus" onClick={plusHours}></div>
                </div>

            </div>

            <div className='Counting-button-div'>
                <button className="tlačítko" onClick={handleClick}><span>Spočítat</span></button>
            </div>
        </div>
    )
}
export default Sklizeň;