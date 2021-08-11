import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Price from './Price/Price';
import Gallery from './Gallery/Gallery';

const uppermostStyles = {
        backgroundColor:'grey',
        height: '100%'
}
class MainContent extends React.Component {
    chooseComponent(choice) {
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
                break;
        }
    }

    render() {
        const layoutAndDevice = this.props.layoutAndDevice;
        const styles = {...uppermostStyles, 
            overflow: layoutAndDevice === 'MOBILE' ? 'scroll' : 'hidden', 
            position: layoutAndDevice === 'MOBILE' ? 'absolute' : 'fixed'
        }
        return (
            <div className='Main-content-biggest-div' style={layoutAndDevice === 'PC' ? {...styles, width: 'calc(100% - 50vh)', left: '50vh'} : {...styles, width: '100%', left: 0} }>
                {this.chooseComponent(this.props.choice)}
            </div>
        )
    }
}

export default MainContent;