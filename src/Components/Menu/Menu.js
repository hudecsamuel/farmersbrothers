import React from 'react';
import './Menu.css';

//component
class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <div className="Big-logo"></div>
        <p className="Shit"><span>→ </span>  SHIT HAPPENS  <span> ←</span></p>
        <nav>
          <div className="Home-button">DOMŮ</div>
          <div className="Price-button">CENÍK</div>
          <div className="Gallery-button">GALERIE</div>
          <div className="Contact-button">KONTAKT</div>
        </nav>
        <footer>
          <div className="instagram">
            <div className="insta"></div>
            <div className="insta-text">
              <p>@farmersbrothers</p>
            </div>

          </div>
          <div className="phone">
            <div className="pho"></div>
            <div className="pho-text">
              <p>+420 777 777 777</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Menu;