import React, { useState } from "react";


function Cisterna() {
    const [délka, obrátka] = useState(1); /*useState je hook, který nám vrací současný stav (délka) a funkci(obrátka), která stav updatuje*/
    const [nmrOfTurns, setNmrOfTurns] = useState(1);


    function handleClick() {

        switch (délka * nmrOfTurns) {
            case 1:
                return 28.88;
            case 2:
                return 16.00;
            case 3:
                return 11.26;
            case 4:
                return 8.56;
            case 5:
                return 7.03;
            case 6:
                return 5.86;
            case 7:
                return 5.34;
            case 8:
                return 4.95;
            case 9:
                return 4.65;
            case 10:
                return 4.40;
            case 11:
                return 4.20;
            case 12:
                return 4.03;
            case 13:
                return 3.84;
            case 14:
                return 3.69;
            case 15:
                return 3.46;
            case 16:
                return 3.30;
            case 17:
                return 3.13;
            case 18:
                return 3.06;
            case 19:
                return 2.99;
            case 20:
                return 2.93;
            case 21:
                return 2.89;
            case 22:
                return 2.84;
            case 23:
                return 2.80;
            case 24:
                return 2.76;
            case 25:
                return 2.71;
            case 26:
                return 2.68;
            case 27:
                return 2.65;
            case 28:
                return 2.63;
            case 29:
                return 2.59;
            default:
                return 2.58;
        }
    }

    function handleResult() {
        var výsledek = 21 * handleClick() * délka * nmrOfTurns;
        document.getElementById("výsledek").innerHTML = Math.round(výsledek) + ' Kč';
    }

    const handleChange = ({target}) => {
        const newLength = target.value;
        if (isNaN(newLength) || !newLength) {
            return obrátka((prev) => prev)
        } 
        if (newLength < 1) return obrátka(1)
        return obrátka(parseInt(newLength))
    } 

    const plusLength = () => obrátka((prev) => prev + 1);

    const minusLength = () => {
        if (délka <= 1) {
            return
        }
        return obrátka((prev) => prev - 1)
    }

    const handleTurnsChange = ({target}) => {
        const newNmrOfTurns = target.value;
        if (isNaN(newNmrOfTurns) || !newNmrOfTurns) {
            return setNmrOfTurns((prev) => prev)
        } 
        if (newNmrOfTurns < 1) return setNmrOfTurns(1)
        return setNmrOfTurns(parseInt(newNmrOfTurns))
    } 

    const plusTurn = () => setNmrOfTurns((prev) => prev + 1);

    const minusTurn = () => {
        if (nmrOfTurns <= 1) {
            return
        }
        return setNmrOfTurns((prev) => prev - 1)
    }


    return (
        <div className="komplet">
            <div className="parametr">

                <div className="Left-inner-div">
                    <span>Délka obrátky [km]</span>
                </div>
                <div className="Right-inner-div">
                    <div className="minus" onClick={minusLength}></div>
                    <input onChange={handleChange} value={délka}></input>
                    <div className="plus" onClick={plusLength} ></div>
                </div>

                <div className="Left-inner-div">
                    <span>Počet obrátek</span>
                </div>

                <div className="Right-inner-div">
                    <div className="minus" onClick={minusTurn}></div>
                    <input onChange={handleTurnsChange} value={nmrOfTurns}></input>
                    <div className="plus" onClick={plusTurn} ></div>
                </div>

                <div className="Left-inner-div">
                    <span>Cena za m<sup id="sub">3</sup>/km</span>
                </div>
                <div className="Right-inner-div"><span>
                    {handleClick(délka)}</span></div>

            </div>

            <div className='Counting-button-div'>
                <button className="tlačítko" onClick={handleResult}><span>Spočítat</span></button>
            </div>
        </div>
    )
}
export default Cisterna;