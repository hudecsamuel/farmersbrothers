import React from 'react';
import Home from './Home/Home';
import './MainContent.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="Uppermost-container">
                { /* Here will be component children */ }
                <Home />
            </div>
        )
    }
}

export default MainContent;