import React from 'react';
import './Menu.css';

//component
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let choice;
    const elText = e.target.innerText;
    console.log(elText);
    switch (elText) {
      case 'DOMŮ':
        choice = 1;
        break;
      case 'CENÍK':
        choice = 2;
        break;
      case 'GALERIE':
        choice = 3;
        break;
      case 'KONTAKT':
        choice = 4;
        break;
      default:
        choice = 1;
    }
    this.props.onSelect(choice);
  }

  render() {
    return (
      <div className="Menu">
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