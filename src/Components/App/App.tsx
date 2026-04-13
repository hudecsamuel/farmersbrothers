import React from 'react';
import MainContent from '../MainContent/MainContent';
import Menu from '../Menu/Menu';
import { LayoutAndDevice } from '../../types';

interface AppState {
  choice: number;
  layoutAndDevice: LayoutAndDevice;
  isMenuDisplayed: boolean;
}

class App extends React.Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      choice: 1,
      layoutAndDevice: 'PC',
      isMenuDisplayed: true
    }
    this.changeMenuChoice = this.changeMenuChoice.bind(this);
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    this.adjustWithScreen = this.adjustWithScreen.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.adjustWithScreen)
    this.adjustWithScreen()
  }

  adjustWithScreen() {
    if (matchMedia('screen and (min-width: 165vh)').matches) {
      this.setState({
        layoutAndDevice: 'PC',
        isMenuDisplayed: true
      })
      return;
    }
    if (matchMedia('screen and (min-width: 100vh)').matches) {
      this.setState({
        layoutAndDevice: 'TABLET',
        isMenuDisplayed: false
      })
      return;
    }
    this.setState({
      layoutAndDevice: 'MOBILE',
      isMenuDisplayed: false
    })
  }

  changeMenuChoice(newChoice: number) {
    this.setState({
      choice: newChoice
    });
  }

  toggleMenuVisibility() {
    this.setState(prev => ({
      ...prev,
      isMenuDisplayed: !prev.isMenuDisplayed
    }))
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
