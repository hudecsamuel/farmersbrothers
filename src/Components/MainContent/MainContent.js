import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact'
import './MainContent.css';

class MainContent extends React.Component {
    chooseComponent(number) {
        switch (number) {
            case 1:
                return <Contact />;
            case 2:
                return <Home />;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="Uppermost-container">
                {this.chooseComponent(1)}
            </div>
        )
    }
}

export default MainContent;