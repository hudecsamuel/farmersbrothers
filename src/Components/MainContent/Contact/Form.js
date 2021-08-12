import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        const handleFormSubmit = this.props.handleFormSubmit;
        
        return (
            <form id="Main-form" onSubmit={handleFormSubmit}>
                <label>Jméno a příjmení</label>
                <input name="name" type="text" required />
                <label>E-mail</label>
                <input name="email" type="email" placeholder="@" required />
                <input id="Hrnekmedu" name="subject" type="text" autoComplete="off" placeholder="Hrnek medu"></input>
                <label className="Textarea-label">Zpráva</label>
                <textarea name="message" id='Form-textarea' />
                <button type="submit">Odeslat</button>
            </form>
        )
    }
}

export default Form;