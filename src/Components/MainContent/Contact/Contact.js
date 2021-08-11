import React from 'react';
import Form from './Form';
import emailjs from 'emailjs-com';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    x
    handleFormSubmit(e) {
        e.preventDefault();
        const txtArea = document.getElementById('Form-textarea');
        let dots = '';
        txtArea.innerText = `ODESÍLÁNÍ${dots}`
        const dotsID = setInterval(() => {
            txtArea.innerText = `ODESÍLÁNÍ${dots}`
            if (dots.length < 7) return dots = dots + '.'
            return dots = ''
        }, 100);


        if (document.getElementById('Hrnekmedu').value) {
            console.log('Smůla: ' + document.getElementById('Hrnekmedu').value);
        } else {
            emailjs.sendForm('r06ert-je-developer', 'simple-template-01', e.target, 'user_97wrQev3ZYhN9j8ECOZFE') // These credentials are gonna change
                .then(response => {
                    clearInterval(dotsID);
                    txtArea.style.color = 'green'
                    txtArea.innerText = 'ZPRÁVA ODESLÁNA :)'
                    console.log('SUCCESS!', response.status, response.text);
                    setTimeout(() => {
                        txtArea.style.color = 'black'
                        txtArea.innerText = ''
                        e.target.reset();
                    }, 2000);
                }).catch(error => {
                    clearInterval(dotsID);
                    txtArea.style.color = 'red'
                    txtArea.innerText = 'CHYBA! :('
                    setTimeout(() => {
                        txtArea.style.color = 'black'
                        txtArea.innerText = ''
                        e.target.reset();
                    }, 2000);
                    console.log('FAILED...', error);
                });
        }
        e.target.reset();
    }


    render() {
        return (
            <div>
                <div className="Cover-photo-contact"></div>
                <div className="Contact-big-container">
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
                    <Form handleFormSubmit={this.handleFormSubmit} />
                </div>
            </div >
        )
    }
}

export default Contact;