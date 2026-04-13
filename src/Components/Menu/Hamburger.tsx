import React from 'react';
import './Menu.css'
import { LayoutAndDevice } from '../../types';

interface HamburgerProps {
  isMenuDisplayed: boolean;
  layoutAndDevice: LayoutAndDevice;
  hasInteracted: boolean;
}

const Hamburger = ({ isMenuDisplayed, layoutAndDevice, hasInteracted }: HamburgerProps) => {
  const upperAnim = !hasInteracted ? 'none' : (!isMenuDisplayed ? 'Reverse-decline 0.5s ease forwards' : 'Decline 0.5s ease forwards');
  const middleAnim = !hasInteracted ? 'none' : (!isMenuDisplayed ? 'Go-left 0.5s ease forwards' : 'Go-right 0.5s ease forwards');
  const lowerAnim = !hasInteracted ? 'none' : (!isMenuDisplayed ? 'Reverse-incline 0.5s ease forwards' : 'Incline 0.5s ease forwards');

  return (
    <div id='Hamburger'>
      <div style={{
        animation: upperAnim,
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      }} className='Upper-bar'></div>
      <div style={{
        animation: middleAnim,
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      }} className='Middle-bar'></div>
      <div style={{
        animation: lowerAnim,
        border: isMenuDisplayed ? '' : '0.1vh solid var(--main-black)'
      }} className='Lower-bar'></div>
    </div>
  )
}

export default Hamburger;
