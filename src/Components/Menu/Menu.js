import React from 'react'
import MainContent from '../MainContent/MainContent';
import Menu from './Menu';

//component
class App extends React.Component {
    render() {
      return (
        <div>
          <h1>ahoj</h1>
          <Menu />
          <MainContent />
        </div>
      )
    }
  }

export default Menu