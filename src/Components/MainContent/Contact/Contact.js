import React from 'react';
import Form from './Form';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="Cover-photo-contact"></div>
                <div className="Big-container">
                    <h1 className="Contact-heading">KONTAKT</h1>
                    <h3 className="Contact-description">Neváhejte nás v případě jakýkoliv dotazů či nejasností kontaktovat, jsme Vám plně k dispozici.</h3>
                    <div>
                        <h4>IČ / DIČ:</h4>
                        <p>090 32 932 / CZ 090 32 932</p>
                    </div>
                    <div className="Second-div">
                        <h4>Adresa:</h4>
                        <p>Pod Lihovarem 2231<br></br>
                            256 01 Benešov u Prahy</p>
                    </div>
                    <div className="Second-div">
                        <h4>E-mail:</h4>
                        <p>farmersbrothers@seznam.cz</p>
                    </div>
                    <div className="Third-div">
                        <h4>Lukáš Procházka:</h4>
                        <p>+420 606 021 579</p>
                    </div>
                    <div>
                        <h4>Matouš Procházka:</h4>
                        <p>+420 775 274 377</p>
                    </div>
                    <div className="Map">
                        <p>Kde všude jste nás mohli potkat:</p>
                        <div className="Map-image"></div>
                    </div>
                    <Form />
                </div>
            </div >
        )
    }
}

export default Contact;