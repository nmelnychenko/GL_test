import React, { Component } from 'react';

import './style.scss';

export default class Footer extends Component {
    render () {
        return (
            <div className="Footer">
                <div className="contacts">
                    <ul>
                        <li>
                            <span>Mobile:</span>
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
                <div className="logo">{'</>'}</div>
            </div>
        )
    }
}