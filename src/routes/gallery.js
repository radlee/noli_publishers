import React, { Component } from 'react';
import Hero from '../components/hero';

class Gallery extends Component {
    render() {
        return (
            <div className="container">

                <h1 className="display-3">Our Gallery</h1>

                <Hero />

            </div>
        )
    }
}

export default Gallery;