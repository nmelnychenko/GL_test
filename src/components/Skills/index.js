import React, { Component } from 'react';

import './style.scss';

export default class Skills extends Component {
    render () {
        const skillsArray = [
            { name: "HTML5", level: 8 },
            { name: "CSS3", level: 8 },
            { name: "JavaScript", level: 7 },
            { name: "ReactJS", level: 6 },
            { name: "AngularJS", level: 1 }
        ];

        const targets = ( number ) => {
            let arr = [];
            for (let i = 0; i < 10; i++) {
                i < number ?
                    arr.push(<div className="round black" />) :
                    arr.push(<div className="round" />)
            }
            return arr;
        };

        const listItems = skillsArray.map((skills) =>
            <li key={ skills.name }>
                <div>{ skills.name }</div>
                <div className="targets">
                    { targets(skills.level) }
                </div>
            </li>
        );

        return (
            <div className="Skills">
                <h2>Skills</h2>
                <ul>{ listItems }</ul>
            </div>
        )
    }
}