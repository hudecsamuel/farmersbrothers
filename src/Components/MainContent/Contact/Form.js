import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form id="Main-form">
                <label>Jméno a příjmení</label>
                <input type="text" />
                <label>E-mail</label>
                <input type="email" placeholder="@" />
                <label className="Textarea-label">Zpráva</label>
                <textarea />
                <button>Odeslat</button>
            </form>
        )
    }
}

export default Form;