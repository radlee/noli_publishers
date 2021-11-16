import React, { Component } from 'react';
import ContactPage from '../components/contact';

class Contact extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="display-3">Contact Us</h1>

                <ContactPage />

            </div>

        )
    }
}

export default Contact;