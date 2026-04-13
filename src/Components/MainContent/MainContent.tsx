import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Price from './Price/Price';
import Gallery from './Gallery/Gallery';
import { LayoutAndDevice } from '../../types';

interface MainContentProps {
  choice: number;
  layoutAndDevice: LayoutAndDevice;
  isMenuDisplayed: boolean;
}

const uppermostStyles: React.CSSProperties = {
  backgroundColor: 'grey',
  height: '100%',
}

class MainContent extends React.Component<MainContentProps> {
  chooseComponent(choice: number) {
    switch (choice) {
      case 1:
        return <Home />;
      case 2:
        return <Price />;
      case 3:
        return <Gallery layoutAndDevice={this.props.layoutAndDevice} />;
      case 4:
        return <Contact />;
      default:
        return null;
    }
  }

  render() {
    const layoutAndDevice = this.props.layoutAndDevice;
    const styles: React.CSSProperties = {
      ...uppermostStyles,
      overflow: layoutAndDevice === 'MOBILE' ? 'scroll' : 'hidden',
      position: layoutAndDevice === 'MOBILE' ? 'absolute' : 'fixed'
    }
    return (
      <div className='Main-content-biggest-div' style={layoutAndDevice === 'PC' ? { ...styles, width: 'calc(100% - 50vh)', left: '50vh' } : { ...styles, width: '100%', left: 0 }}>
        {this.chooseComponent(this.props.choice)}
      </div>
    )
  }
}

export default MainContent;
