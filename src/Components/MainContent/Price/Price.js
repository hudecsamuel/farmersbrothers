import React from 'react';
import './Price.css';

class Price extends React.Component {
    render() {
        return (
            <div>
                <div className="Cover-photo"></div>
                <div className="under-Image">
                    <h1 className="Contact-heading">CENÍK</h1>
                    <div className="Main-div"></div>
                

                <div className="Notes"> 
                    <span>→ vedené ceny jsou bez DPH</span>
                    <span>→ možnost zajištění dopravy 24/7</span>
                    <span>→ výše uvedené ceny nejsou závaznou nabídkou, ta bude zaslána na základě poptávky</span>
                </div>
                </div>
            </div>
        )
    }
}

export default Price;