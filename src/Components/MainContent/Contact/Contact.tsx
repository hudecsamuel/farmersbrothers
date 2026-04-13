import React from 'react';
import Form from './Form';
import emailjs from 'emailjs-com';
import './Contact.css';

class Contact extends React.Component {
  constructor(props: Record<string, never>) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const txtArea = document.getElementById('Form-textarea') as HTMLTextAreaElement;
    let dots = '';
    txtArea.innerText = `ODESÍLÁNÍ${dots}`
    const dotsID = setInterval(() => {
      txtArea.innerText = `ODESÍLÁNÍ${dots}`
      if (dots.length < 7) return dots = dots + '.'
      return dots = ''
    }, 100);

    const honeypot = document.getElementById('Hrnekmedu') as HTMLInputElement;
    if (honeypot.value) {
      console.log('Smůla: ' + honeypot.value);
    } else {
      emailjs.sendForm('r06ert-je-developer', 'tmplt_farmers_brothers', e.target as HTMLFormElement, 'user_97wrQev3ZYhN9j8ECOZFE')
        .then(response => {
          clearInterval(dotsID);
          txtArea.style.color = 'green'
          txtArea.innerText = 'ZPRÁVA ODESLÁNA :)'
          console.log('SUCCESS!', response.status, response.text);
          setTimeout(() => {
            txtArea.style.color = 'var(--main-black)'
            txtArea.innerText = ''
            ;(e.target as HTMLFormElement).reset();
          }, 2000);
        }).catch(error => {
          clearInterval(dotsID);
          txtArea.style.color = 'red'
          txtArea.innerText = 'CHYBA! :('
          setTimeout(() => {
            txtArea.style.color = 'var(--main-black)'
            txtArea.innerText = ''
            ;(e.target as HTMLFormElement).reset();
          }, 2000);
          console.log('FAILED...', error);
        });
    }
    ;(e.target as HTMLFormElement).reset();
  }

  render() {
    return (
      <div>
        <div className="Cover-photo-contact"></div>
        <div className="Contact-big-container">
          <h1 className="Contact-heading">KONTAKT</h1>
          <h3 className="Contact-description">Neváhejte nás v případě jakýkoliv dotazů či nejasností kontaktovat, jsme Vám plně k dispozici.</h3>
          <div>
            <a href="tel: +420606021579" target='_blank' rel="noreferrer">
              <h4>Lukáš Procházka:</h4>
              <p>+420 606 021 579</p>
            </a>
          </div>
          <div className="Second-div">
            <a href="tel: +420775274377" target='_blank' rel="noreferrer">
              <h4>Matouš Procházka:</h4>
              <p>+420 775 274 377</p>
            </a>
          </div>
          <div className="Second-div">
            <a href="mailto: farmersbrothers@seznam.cz" target='_blank' rel="noreferrer">
              <h4>E-mail:</h4>
              <p>farmersbrothers@seznam.cz</p>
            </a>
          </div>
          <div className="Third-div">
            <h4>Adresa:</h4>
            <p>Pod Lihovarem 2231<br></br>
              256 01 Benešov u Prahy</p>
          </div>
          <div>
            <h4>IČ / DIČ:</h4>
            <p>09032932 / CZ09032932</p>
          </div>
          <div className="Map">
            <p>Dojedeme za Vámi po celé ČR</p>
            <div className="Map-image"></div>
          </div>
          <Form handleFormSubmit={this.handleFormSubmit} />
        </div>
      </div>
    )
  }
}

export default Contact;
