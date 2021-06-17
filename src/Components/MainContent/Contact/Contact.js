import React from 'react';
import Form from './Form';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="Cover-photo"></div>
                <div className="Big-container">
                    <Form />
                </div>
            </div>
        )
    }
}

export default Contact;