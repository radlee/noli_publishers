import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


import logo from '../assets/logo/logo.png';



const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        // <div className="nav-bar">
        <Navbar className="navbar" light expand="md">
            <NavbarBrand href="/">
                <img
                    alt=""
                    src={logo}
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                />{' '}
                <span className="branding"> Noli</span> Publishers
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>

                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/services">Services</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/team">Team</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/gallery">Gallery</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/contact">Contact</NavLink>
                    </NavItem>

                </Nav>
                <NavbarText>NOLI PUBLISHERS</NavbarText>
            </Collapse>
        </Navbar>
        // </div>
    );
}

export default NavBar;