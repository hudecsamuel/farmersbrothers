import React from 'react';
import './Menu.css';

//component
class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <div className="Big-logo"></div>
        <p><span>→ </span>  shit happens  <span> ←</span></p>
        <nav> {/* Jak jsem říkal, 'navigator' tag neexistuje, psalo to chybu v browseru :D (je to 'nav') */}
          <div className="Home-button">DOMŮ</div>
          <div className="Price-button">CENÍK</div>
          <div className="Gallery-button">GALERIE</div>
          <div className="Contact-button">KONTAKT</div>
        </nav>
        <footer>
          <div className="instagram">
            <img src="" alt=''></img> 
            {/* Dávej sem ↑ pls relativní cesty a obrázky do složky Assets... C:\Users\simon\Desktop\TransparentLogo nevidím, protože ho máš ve svým kompu... */}
            <p>farmersbrothers</p>
          </div>
          <div className="phone">
            <p>+420 777 777 777</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default Menu;