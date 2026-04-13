import React from 'react';
import './Menu.css'
import { LayoutAndDevice } from '../../types';

interface HamburgerProps {
  isMenuDisplayed: boolean;
  layoutAndDevice: LayoutAndDevice;
}

const Hamburger = ({ isMenuDisplayed, layoutAndDevice }: HamburgerProps) => {
  return (
    <div id='Hamburger'>
      <div style={layoutAndDevice ? {
        animation: !isMenuDisplayed ? 'Reverse-decline 0.5s ease forwards' : 'Decline 0.5s ease forwards',
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      } : {
        animation: !isMenuDisplayed ? 'Reverse-decline 0.5s ease forwards' : 'Decline 0.5s ease forwards',
        border: 'none'
      }} className='Upper-bar'></div>
      <div style={layoutAndDevice ? {
        animation: !isMenuDisplayed ? 'Go-left 0.5s ease forwards' : 'Go-right 0.5s ease forwards',
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      } : {
        animation: !isMenuDisplayed ? 'Go-left 0.5s ease forwards' : 'Go-right 0.5s ease forwards',
        border: 'none'
      }} className='Middle-bar'></div>
      <div style={layoutAndDevice ? {
        animation: !isMenuDisplayed ? 'Reverse-incline 0.5s ease forwards' : 'Incline 0.5s ease forwards',
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      } : {
        animation: !isMenuDisplayed ? 'Reverse-incline 0.5s ease forwards' : 'Incline 0.5s ease forwards',
        border: 'none'
      }} className='Lower-bar'></div>
    </div>
  )
}

export default Hamburger;
