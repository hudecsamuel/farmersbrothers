import React from "react";

function CisternaVpravo() {
  return (
    <div>
      <ul style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%', color: 'var(--main-yellow)' }}>
        <li className='Tank-right-p'>Obvyklá míra napuštění cisterny je 21 m<sup id="sub">3</sup></li>
        <li className='Tank-right-p'>Možnost zajištění dopravy 24/7</li>
        <li className='Tank-right-p'>Všechny uvedené ceny jsou bez DPH</li>
        <li className='Tank-right-p'>Výsledná cena je jen orientační</li>
        <li className='Tank-right-p'>Závazná nabídka bude zaslána po domluvě</li>
      </ul>
    </div>
  )
}

export default CisternaVpravo;
