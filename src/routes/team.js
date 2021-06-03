import React, { Component } from 'react';
import TeamList from '../components/team-list';

class Team extends Component {
    render() {
        return (
            <div>
                <h2 className="heading" >Meet the Team</h2>
                <br />
                <TeamList />
            </div>
        )
    }
}

export default Team;