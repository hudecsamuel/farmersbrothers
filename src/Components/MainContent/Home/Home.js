import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }}>
                <div className="BG-image"></div>
                <div className='Home-footer'>
                    <a href="https://www.instagram.com/fabr.cz/" target='_blank' rel="noreferrer">
                        <div className='instag'></div>
                    </a>
                    <a href="tel: +420606021579" target='_blank' rel="noreferrer">
                        <div className='phon'></div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Home;