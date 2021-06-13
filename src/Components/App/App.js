import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from './Menu/Menu.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ahoj Šimone</h1>
        <MainContent />
      </div>
    )
  }
}

export default App;