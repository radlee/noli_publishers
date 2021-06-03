import React, { Component } from 'react';
import Logo from '../components/logo';
import JumboBG from '../components/jumbotron-bg';


class About extends Component {
    render() {
        return (
            <div>
                <Logo />
                <br />
                <JumboBG />
            </div>
        )
    }
}

export default About;