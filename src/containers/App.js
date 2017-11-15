import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './style.scss';

export default class App extends Component {
    render () {
        return (
            <div className="App">
                <Header />
                { this.props.children }
                <Footer />
            </div>
        )
    }
}
