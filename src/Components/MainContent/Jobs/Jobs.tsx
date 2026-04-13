import React from 'react'
import './Jobs.css'

function Jobs() {
  return (
    <div className='jobs-page'>
      <div className="jobs-hero"></div>
      <div className="jobs-content">
        <h1 className="jobs-heading">PRACOVNÍ POZICE</h1>
        <div className="jobs-intro">
          <p>
            Jsme stabilní menší rodinná firma s pěti auty a přátelským kolektivem.
            Hledáme spolehlivého řidiče pro tahač se sklápěcím návěsem (velkoobjemový / hardox).
            Vozíme sypké stavební materiály (písky, štěrky, balenou, suť, zeminu, frézování silnic)
            po Praze a okolí – žádné mezinárodní trasy ani přespávání – pouze vnitro!
          </p>
          <p>
            Dále je vozidlo zařazeno do řepné kampaně, která probíhá od září až do ledna.
          </p>
        </div>
        <div className="jobs-columns">
          <div className="jobs-col">
            <div className="jobs-section">
              <h2 className="jobs-section-title">🔧 Co budete dělat</h2>
              <ul>
                <li>Řídit soupravu se sklápěcím návěsem</li>
                <li>Rozvozy stavebního materiálu z/do staveb v okolí Prahy</li>
                <li>Zajištění řepné kampaně</li>
                <li>Každý den návrat domů, práce pondělí–pátek</li>
                <li>Vozidlo parkuje na Praze 9 – vždy na stejném místě</li>
                <li>Během řepné kampaně vozidlo parkuje u Mladé Boleslavi – přispíváme na dojíždění</li>
              </ul>
            </div>
            <div className="jobs-section">
              <h2 className="jobs-section-title">✅ Co od vás očekáváme</h2>
              <ul>
                <li>Řidičské oprávnění skupiny C + E, T, profesní průkaz, psychotesty</li>
                <li>Dochvilnost, zodpovědnost a férový přístup</li>
              </ul>
            </div>
          </div>
          <div className="jobs-col">
            <div className="jobs-section">
              <h2 className="jobs-section-title">💰 Co nabízíme my</h2>
              <ul>
                <li>Mzda 55–60 tisíc čistého, výplata vždy v čas</li>
                <li>250 Kč / hodinu čistého – výplata dle odpracovaných hodin</li>
                <li>Volné víkendy</li>
                <li>Férové jednání, stabilní práce bez stresu</li>
                <li>Menší tým, lidský přístup</li>
                <li>Nástup možný dle domluvy</li>
              </ul>
            </div>
            <div className="jobs-section">
              <h2 className="jobs-section-title">📍 Lokalita</h2>
              <ul>
                <li>Výjezd a návrat vždy Praha 9 – perimetr Kbel</li>
                <li>Mladá Boleslav (září–leden)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="jobs-cta">
          <div className="jobs-section">
            <h2 className="jobs-section-title">📞 Zaujali jsme vás?</h2>
            <p className="jobs-cta-text">
              Ozvěte se nám telefonicky nebo e-mailem a domluvíme se osobně.<br />
              Těšíme se na posilu do týmu!
            </p>
            <div className="jobs-links">
              <a href="tel:+420775274377">+420 775 274 377</a>
              <a href="mailto:farmersbrothers@seznam.cz">farmersbrothers@seznam.cz</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs
