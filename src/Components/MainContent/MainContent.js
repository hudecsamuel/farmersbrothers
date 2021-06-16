import React from 'react';
import Home from './Home/Home';
import Contact from './Contact/Contact'
import './MainContent.css';

class MainContent extends React.Component {
    render() {
        return (
            <div className="Uppermost-container">
                { /* Here will be component children */ }
                <Home />
                {/* <Contact /> */}
            </div>
        )
    }
}

export default MainContent;