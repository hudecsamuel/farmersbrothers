import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        const handleFormSubmit = this.props.handleFormSubmit;
        
        return (
            <form id="Main-form" onSubmit={handleFormSubmit}>
                <label>Jméno a příjmení</label>
                <input type="text" />
                <label>E-mail</label>
                <input type="email" placeholder="@" />
                <label className="Textarea-label">Zpráva</label>
                <textarea />
                <button type="submit">Odeslat</button>
            </form>
        )
    }
}

export default Form;