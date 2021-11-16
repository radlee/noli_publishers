import React, { Component } from 'react';
import CardList from '../components/card-list';

class Team extends Component {
    render() {
        return (
            <div>
                <h1 className="display-3">Meet the Team</h1>
                <br />
                <CardList />
                <br />
                <h1 className="display-3">Professional Individuals</h1>
                <br />
                <p>
                    We offer hands-on personal service..
                </p>
            </div>
        )
    }
}

export default Team;