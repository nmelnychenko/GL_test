import React, { Component } from 'react';

import './style.scss';

export default class Contact extends Component {
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
                    <form action="">
                        <input type="text" name="name" placeholder="Name"/>
                        <input type="email" name="email" placeholder="Email"/>
                        <textarea name="message" placeholder="Send a message" />
                        <button>Send</button>
                    </form>
                </div>
            </div>
        )
    }
}