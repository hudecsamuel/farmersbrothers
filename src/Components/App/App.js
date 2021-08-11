import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from '../Menu/Menu';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 1,
      layoutAndDevice: 'PC',
      isMenuDisplayed: true
    }
    this.changeMenuChoice = this.changeMenuChoice.bind(this);
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      if (matchMedia('screen and (min-width: 165vh)').matches) {
        this.setState({
          layoutAndDevice: 'PC',
          isMenuDisplayed: true
        })
        return console.log('Nad 165vh: ' + this.state.layoutAndDevice)
      }
      if (matchMedia('screen and (min-width: 100vh)').matches) {
        this.setState({
          layoutAndDevice: 'TABLET',
          isMenuDisplayed: false
        })
        return console.log('Mezi 165vh a 100vh: ' + this.state.layoutAndDevice)
      }
      this.setState({
        layoutAndDevice: 'MOBILE',
        isMenuDisplayed: false
      })
      return console.log('Pod 100vh: ' + this.state.layoutAndDevice)
      
    })
  }

  changeMenuChoice(newChoice) {
    this.setState({
      choice: newChoice
    });
  }

  toggleMenuVisibility() {
    this.setState(prev => ({
      ...prev,
      isMenuDisplayed: !prev.isMenuDisplayed
    }))
    console.log(this.state.isMenuDisplayed)
  }

  render() {
    return (
      <div id='App-ID' style={{
        display: 'grid',
        width: 100 + '%',
        height: 100 + '%',
        position: 'relative'
      }}>
        <Menu toggleMenuVisibility={this.toggleMenuVisibility} isMenuDisplayed={this.state.isMenuDisplayed} layoutAndDevice={this.state.layoutAndDevice} onSelect={this.changeMenuChoice} />
        <MainContent isMenuDisplayed={this.state.isMenuDisplayed} layoutAndDevice={this.state.layoutAndDevice} choice={this.state.choice} />
      </div>
    )
  }
}

export default App;