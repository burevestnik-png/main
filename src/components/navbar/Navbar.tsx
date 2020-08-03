import React, { FunctionComponent } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../resources/logo-yarki.png';


const Navbar: FunctionComponent = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <img src={logo}
                     alt="Logo"
                     className="brand-logo"
                />
                <ul id="nav-mobile"
                    className="right hide-on-med-and-down"
                >
                    <li><NavLink to="/">List of projects</NavLink></li>
                    <li><NavLink to="/about">About me</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
