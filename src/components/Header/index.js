import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.scss';

export default class Header extends Component {
    render () {
        return (
            <div className="Header">
                <div className="logo">
                    {`</>`}
                </div>
                <nav>
                    <ul className="navigation">
                        <li className="navigation__item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li className="navigation__item">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}