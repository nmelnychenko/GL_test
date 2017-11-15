import React, { Component } from 'react';

import './style.scss';

export default class Contact extends Component {
    constructor (props, context) {
        super(props, context);

        this._getFormValues = this._getFormValues.bind(this._getFormValues);
    }

    _getFormValues () {
        const form = document.getElementById('contact-form');
        const formValues = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        console.log(formValues);
    }

    render () {
        return (
            <div className="Contact">
                <h2>Contact</h2>
                <div className="wrapper">
                    <div className="contacts">
                        <ul>
                            <li>
                                <span>Phone number:</span>
                                <a href="tel:+380956559420">+38095-65-59-420</a>
                            </li>
                            <li>
                                <span>Email:</span>
                                <a href="mailto:mykola.melnichenko@gmail.com">mykola.melnichenko@gmail.com</a>
                            </li>
                            <li>
                                <span>Skype:</span>
                                <a href="skype:mykola.melnichenko?call">mykola.melnichenko</a>
                            </li>
                        </ul>
                    </div>
                    <form id="contact-form">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <textarea name="message" placeholder="Send a message" required />
                        <button onClick={ this._getFormValues }>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}