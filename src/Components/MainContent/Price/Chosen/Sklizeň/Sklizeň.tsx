import React, { useState } from "react";

function Sklizeň() {
  const [dny, obrátka] = useState(1);
  const [hodiny, náklad] = useState(1);

  function handleClick() {
    let výsledek = 0;
    if (hodiny < 4) {
      výsledek = 3000 * dny;
    } else if (hodiny > 11) {
      výsledek = 11000 * dny;
    } else {
      výsledek = hodiny * dny * 1000;
    }
    const el = document.getElementById("výsledek");
    if (el) el.innerHTML = výsledek + ' Kč';
  }

  const handleDaysChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newDays = target.value;
    if (isNaN(Number(newDays)) || !newDays) return obrátka(prev => prev);
    if (Number(newDays) < 1) return obrátka(1);
    return obrátka(parseInt(newDays));
  }

  const handleHoursChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const newHours = target.value;
    if (isNaN(Number(newHours)) || !newHours) return náklad(prev => prev);
    if (Number(newHours) > 11) return náklad(11);
    if (Number(newHours) < 1) return náklad(1);
    return náklad(parseInt(newHours));
  }

  const plusDays = () => obrátka(prev => prev + 1);
  const minusDays = () => { if (dny > 1) obrátka(prev => prev - 1); }
  const plusHours = () => { if (hodiny < 11) náklad(prev => prev + 1); }
  const minusHours = () => { if (hodiny > 1) náklad(prev => prev - 1); }

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
