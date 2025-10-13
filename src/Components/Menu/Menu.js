import React from 'react';
import Hamburger from './Hamburger'
import './Menu.css';

//component
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.textChoice = 'DOMŮ';
  }

  handleClick(e, manual = null) {
    const layDev = this.props.layoutAndDevice
    let choice;
    const elText = manual ? manual : e.target.innerText;
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
    if (layDev === 'TABLET' || layDev === 'MOBILE') this.handleToggleVisibility()
  }

  handleToggleVisibility() {
    this.props.toggleMenuVisibility()
  }

  render() {
    const layoutAndDevice = this.props.layoutAndDevice;
    const isMenuDisplayed = this.props.isMenuDisplayed;
    const rightBorder = (this.textChoice === 'GALERIE' /* For not to display yellow right border on menu in home component → || this.textChoice === 'DOMŮ' */)
      && layoutAndDevice === 'PC' ?
      { borderRight: '0.1vh solid var(--main-black)' } : { borderRight: '0.1vh solid var(--main-yellow)' }
    console.log(layoutAndDevice)
    return (
      <div>
        {layoutAndDevice === 'TABLET' && <div onClick={this.handleToggleVisibility} id='Tablet-hamburger-button'>
          <Hamburger layoutAndDevice={layoutAndDevice} isMenuDisplayed={isMenuDisplayed} />
        </div>}
        {layoutAndDevice === 'MOBILE' && <div id='Mobile-haburger-bar'>
          <div onClick={() => this.handleClick(null, 'DOMŮ')} className="Big-logo-mobile"></div>
        </div>}
        {layoutAndDevice === 'MOBILE' && <div onClick={this.handleToggleVisibility} className='Mobile-hamburger-container'>
          <Hamburger layoutAndDevice={layoutAndDevice} isMenuDisplayed={isMenuDisplayed} />
        </div>}
        <div className="Menu" style={layoutAndDevice === 'MOBILE' ? {
          animation: !isMenuDisplayed ? 'Slide-mobile-menu-right 0.5s ease forwards' : 'Slide-mobile-menu-left 0.5s ease forwards'
        } : layoutAndDevice === 'PC' ? {
          ...rightBorder,
          animation: 'none'
        } : {
          ...rightBorder,
          animation: !isMenuDisplayed ? 'Slide-menu-left 0.5s ease forwards' : 'Slide-menu-right 0.5s ease forwards'
        }}>
          <div style={{ cursor: 'pointer' }} onClick={() => this.handleClick(null, 'DOMŮ')} className="Big-logo"></div>
          <p className="Shit">
            <span style={{
              color: 'var(--main-yellow)',
              textTransform: 'uppercase',
              lineHeight: 1.75,
              fontSize: '1vh',
              textAlign: 'center',
              margin: 0,
              letterSpacing: '0.65vh'
            }}>Velkoobjemová přeprava</span><br></br>
            <span style={{
              color: 'var(--main-yellow)',
              textTransform: 'uppercase',
              lineHeight: 1.75,
              fontSize: '1vh',
              textAlign: 'center',
              margin: 0,
              letterSpacing: '0.6vh'
            }}>tekutých a sypkých hmot</span><br></br>
            <br></br>
            <br></br>
            <span>→ </span>  SHIT HAPPENS  <span> ←</span></p>
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
              <a href="tel: +420775274377" target='_blank' rel="noreferrer">
                <div className="pho"></div>
                <div className="pho-text">
                  <p>+420 606 021 579</p>
                </div>
              </a>
            </div>
          </footer>
        </div>
      </div>
    )
  }
}

export default Menu;