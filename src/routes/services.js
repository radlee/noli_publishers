import React, { Component } from 'react';
import OurServices from "../components/carousel";

class Services extends Component {
    render() {
        return (
            <div>
                <h2 className="heading">Our Services</h2>
                <OurServices />
            </div>
        )
    }
}

export default Services;