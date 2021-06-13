import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from '../Menu/Menu';

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <MainContent />
      </div>
    )
  }
}

export default App;