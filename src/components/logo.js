import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/logo/np_logo_main2.png';
const Logo = (props) => {
    return (

        <div className="container">
            <Image className="image" src={logo} fluid />
        </div>
    );
};

export default Logo;