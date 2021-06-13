import React from 'react';
import './Menu.css'

//component
class Menu extends React.Component {
    render() {
      return (
        <div className="Menu">
          <img src="https://farmersbrothers.webnode.cz/_files/200000017-13f6213f64/200/TransparentLogo.png"></img>
          <p>→ shit happens ←</p>
          <navigator>
            <div className="domů">DOMŮ</div>
            <div className="ceník">CENÍK</div>
            <div className="galerie">GALERIE</div>
            <div className="kontakt">KONTAKT</div>
          </navigator>
          <footer>
               <div className="instagram">
              <img src="C:\Users\simon\Desktop\TransparentLogo"></img>
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