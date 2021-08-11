import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Price from './Price/Price';
import Gallery from './Gallery/Gallery';

const uppermostStyles = {
        position: 'fixed',
        height: '100%',
        backgroundColor:'grey',
        overflow: 'hidden'
}
class MainContent extends React.Component {
    chooseComponent(choice) {
        switch (choice) {
            case 1:
                return <Home />;
            case 2:
                return <Price />;
            case 3:
                return <Gallery />;
            case 4:
                return <Contact />;
            default:
                break;
        }
    }

    render() {
        const layoutAndDevice = this.props.layoutAndDevice;
        return (
            <div style={layoutAndDevice === 'PC' ? {...uppermostStyles, width: 'calc(100% - 50vh)', left: '50vh'} : {...uppermostStyles, width: '100%', left: 0} }>
                {this.chooseComponent(this.props.choice)}
            </div>
        )
    }
}

export default MainContent;