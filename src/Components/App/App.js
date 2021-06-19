import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from '../Menu/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 1
    }
    this.changeMenuChoice = this.changeMenuChoice.bind(this);
  }

  changeMenuChoice(newChoice) {
    this.setState({
      choice: newChoice
    });
  }

  render() {
    return (
      <div style={{
        display: 'grid',
        width: 100 + '%',
        height: 100 + '%',
        position: 'relative'
      }}>
        <Menu onSelect={this.changeMenuChoice} />
        <MainContent choice={this.state.choice} />
      </div>
    )
  }
}

export default App;