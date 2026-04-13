import React from 'react'
import './Price.css'

function Price() {
  return (
    <div className='Biggest-price-div'>
      <div className="Cover-photo-price"></div>
      <div className="under-Image under-Image--text">
        <h1 className="Contact-heading">CENÍK</h1>
        <div className="Price-text-block">
          <p>
            Každý Váš požadavek na nákladní silniční autodopravu rádi naceníme individuálně
            dle konkrétních podmínek a požadavků každého zákazníka.
          </p>
          <p>
            V případě jakýchkoliv dotazů nás neváhejte kontaktovat, jsme Vám plně k dispozici.
          </p>
          <ul className="Price-list">
            <li>
              Ceny za soupravu se sklápěcím návěsem se orientačně pohybují od 38 Kč / km
              do 55 Kč / km. Při hodinové práci stroje jsou sazby od 1.100 Kč / hod
              do 1.300 Kč / hod.
            </li>
            <li>
              Ceny za soupravu s cisternou se orientačně pohybují od 45 Kč / 1 m³ při délce
              obrátky do 10 km včetně. Při každém dalším započatém kilometru se cena navyšuje
              o 1,5 Kč / 1 m³.
            </li>
          </ul>
          <div className="Price-contact-links">
            <a href="tel:+420775274377">+420 775 274 377</a>
            <a href="mailto:farmersbrothers@seznam.cz">farmersbrothers@seznam.cz</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
