import React from 'react';
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form id="Main-form">
                <label>Jméno a příjmení</label>
                <input />
                <label>E-mail</label>
                <input />
                <label>Zpráva</label>
                <textarea />
                <button>Odeslat</button>
            </form>
        )
    }
}

export default Form;