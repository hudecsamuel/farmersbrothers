import React from 'react';
import Hamburger from './Hamburger'
import './Menu.css';
import { LayoutAndDevice } from '../../types';

interface MenuProps {
  onSelect: (choice: number) => void;
  toggleMenuVisibility: () => void;
  layoutAndDevice: LayoutAndDevice;
  isMenuDisplayed: boolean;
}

interface MenuState {
  hasInteracted: boolean;
}

class Menu extends React.Component<MenuProps, MenuState> {
  textChoice: string;

  constructor(props: MenuProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.textChoice = 'DOMŮ';
    this.state = { hasInteracted: false };
  }

  handleClick(e: React.MouseEvent<HTMLDivElement>, manual: string | null = null) {
    const layDev = this.props.layoutAndDevice
    let choice: number;
    const elText = manual ? manual : (e.target as HTMLDivElement).innerText;
    switch (elText) {
      case 'DOMŮ':
        choice = 1;
        this.textChoice = 'DOMŮ';
        break;
      case 'CENÍK':
        choice = 2;
        this.textChoice = 'CENÍK';
        break;
      case 'VOZOVÝ PARK':
        choice = 3;
        this.textChoice = 'VOZOVÝ PARK';
        break;
      case 'KONTAKT':
        choice = 4;
        this.textChoice = 'KONTAKT';
        break;
      case 'PRACOVNÍ POZICE':
        choice = 5;
        this.textChoice = 'PRACOVNÍ POZICE';
        break;
      default:
        choice = 1;
        this.textChoice = 'DOMŮ';
    }
    this.props.onSelect(choice);
    if (layDev === 'TABLET' || layDev === 'MOBILE') this.handleToggleVisibility()
  }

  handleToggleVisibility() {
    this.setState({ hasInteracted: true });
    this.props.toggleMenuVisibility();
  }

  render() {
    const layoutAndDevice = this.props.layoutAndDevice;
    const isMenuDisplayed = this.props.isMenuDisplayed;
    const rightBorder: React.CSSProperties = { borderRight: '0.1vh solid var(--main-yellow)' }
    return (
      <div>
        {layoutAndDevice === 'TABLET' && <div onClick={this.handleToggleVisibility} id='Tablet-hamburger-button'>
          <Hamburger layoutAndDevice={layoutAndDevice} isMenuDisplayed={isMenuDisplayed} hasInteracted={this.state.hasInteracted} />
        </div>}
        {layoutAndDevice === 'MOBILE' && <div id='Mobile-haburger-bar'>
          <div onClick={() => this.handleClick(null as unknown as React.MouseEvent<HTMLDivElement>, 'DOMŮ')} className="Big-logo-mobile"></div>
        </div>}
        {layoutAndDevice === 'MOBILE' && <div onClick={this.handleToggleVisibility} className='Mobile-hamburger-container'>
          <Hamburger layoutAndDevice={layoutAndDevice} isMenuDisplayed={isMenuDisplayed} hasInteracted={this.state.hasInteracted} />
        </div>}
        <div className="Menu" style={layoutAndDevice === 'MOBILE' ? {
          animation: !this.state.hasInteracted ? 'none' : (!isMenuDisplayed ? 'Slide-mobile-menu-right 0.5s ease forwards' : 'Slide-mobile-menu-left 0.5s ease forwards'),
          transform: !this.state.hasInteracted && !isMenuDisplayed ? 'translateX(100%)' : undefined,
        } : layoutAndDevice === 'PC' ? {
          ...rightBorder,
          animation: 'none'
        } : {
          ...rightBorder,
          animation: !isMenuDisplayed ? 'Slide-menu-left 0.5s ease forwards' : 'Slide-menu-right 0.5s ease forwards'
        }}>
          <div style={{ cursor: 'pointer' }} onClick={() => this.handleClick(null as unknown as React.MouseEvent<HTMLDivElement>, 'DOMŮ')} className="Big-logo"></div>
          <p className="Shit">
            <span style={{
              color: 'var(--main-yellow)',
              fontSize: '1.1vh',
              textAlign: 'center',
              margin: 0,
              letterSpacing: '0.5vh'
            }}>EST. 2020</span>
          </p>
          <nav>
            <div onClick={this.handleClick} className="Home-button">DOMŮ</div>
            <div onClick={this.handleClick} className="Price-button">CENÍK</div>
            <div onClick={this.handleClick} className="Gallery-button">VOZOVÝ PARK</div>
            <div onClick={this.handleClick} className="Contact-button">KONTAKT</div>
            <div onClick={this.handleClick} className="Jobs-button">PRACOVNÍ POZICE</div>
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
