import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Price from './Price/Price';
import './MainContent.css';

class MainContent extends React.Component {
    chooseComponent(number) {
        switch (number) {
            case 1:
                return <Contact />;
            case 2:
                return <Home />;
            case 3:
                return <Price />;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="Uppermost-container">
                {this.chooseComponent(3)}
            </div>
        )
    }
}

export default MainContent;