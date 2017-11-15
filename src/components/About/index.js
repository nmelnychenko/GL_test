import React, { Component } from 'react';

import './style.scss';
import avatarImg from '../../images/avatar.png';

export default class About extends Component {
    render () {
        return (
            <div className="About">
                <h2>About</h2>
                <div className="wrapper">
                    <div className="left-side">
                        <h3>
                            Goals
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus
                            praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus
                            semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra.
                            Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis
                            dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.
                        </p>
                    </div>
                    <div>
                        <img src={ avatarImg } alt="avatar icon"/>
                    </div>
                    <div className="right-side">
                        <h3>
                            Dreams
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus
                            praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus
                            semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra.
                            Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis
                            dolores, porttitor tempus nascetur id ut, integer ut dignissim harum.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}