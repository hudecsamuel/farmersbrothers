import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Price from './Price/Price';
import Gallery from './Gallery/Gallery';
import './MainContent.css';

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
        return (
            <div className="Uppermost-container">
                {this.chooseComponent(this.props.choice)}
            </div>
        )
    }
}

export default MainContent;