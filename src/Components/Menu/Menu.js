import React from 'react';
import './Menu.css';

//component
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.textChoice = '';
  }

  handleClick(e) {
    let choice;
    const elText = e.target.innerText;
    console.log(elText);
    switch (elText) {
      case 'DOMŮ':
        choice = 1;
        this.textChoice = 'DOMŮ';
        break;
      case 'CENÍK':
        choice = 2;
        this.textChoice = 'CENÍK';
        break;
      case 'GALERIE':
        choice = 3;
        this.textChoice = 'GALERIE';
        break;
      case 'KONTAKT':
        choice = 4;
        this.textChoice = 'KONTAKT';
        break;
      default:
        choice = 1;
        this.textChoice = 'DOMŮ';
    }
    this.props.onSelect(choice);
  }

  render() {
    return (
      <div className="Menu" style={this.textChoice === 'GALERIE' ? { borderRight: '0.1vh solid var(--main-black)' } : { borderRight: '0.1vh solid var(--main-yellow)' }}>
        <div className="Big-logo"></div>
        <p className="Shit"><span>→ </span>  SHIT HAPPENS  <span> ←</span></p>
        <nav>
          <div onClick={this.handleClick} className="Home-button">DOMŮ</div>
          <div onClick={this.handleClick} className="Price-button">CENÍK</div>
          <div onClick={this.handleClick} className="Gallery-button">GALERIE</div>
          <div onClick={this.handleClick} className="Contact-button">KONTAKT</div>
        </nav>
        <footer>
          <div className="instagram">
            <a href="https://www.instagram.com/fabr.cz/" target='_blank' rel="noreferrer">
              <div className="insta"></div>
              <div className="insta-text">
                <p>@fabr.cz</p>
              </div>
            </a>
          </div>
          <div className="phone">
            <div className="pho"></div>
            <div className="pho-text">
              <p>+420 606 021 579</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Menu;