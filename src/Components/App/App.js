import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from '../Menu/Menu';

class App extends React.Component {
  render() {
    return (
      <div style={{
        display: 'grid',
        width: 100 + '%',
        height: 100 + '%',
        position: 'relative'
      }}>
        <Menu />
        <MainContent />
      </div>
    )
  }
}

export default App;