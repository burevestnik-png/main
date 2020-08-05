import M from "materialize-css";
import React, { FC, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../resources/logo-yarki.png';
import './Navbar.css';


const Navbar: FC = () => {
    useEffect(() => {
        const sidenav: Element | null = document.querySelector('.sidenav');
        if (sidenav) {
            M.Sidenav.init(sidenav, {})
        }
    }, [])

    return (
        <nav className="white">
            <div className="nav-wrapper Navbar">
                <img src={ logo }
                     alt="Logo"
                     className="brand-logo responsive-img"
                />

                <ul className="right hide-on-med-and-down">
                    <LinksWrapper isMobile={ false }/>
                </ul>

                <ul id="nav-mobile"
                    className="sidenav"
                >
                    <LinksWrapper isMobile={ true }/>
                </ul>

                <a href="#"
                   data-target="nav-mobile"
                   className="sidenav-trigger"
                >
                    <i className="material-icons">menu</i>
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

type LinksWrapperType = {
    isMobile: boolean
}

const LinksWrapper: FC<LinksWrapperType> = ( { isMobile } ) => {
    const linkClasses = [ 'black-text' ]
    if (isMobile) {
        linkClasses.push('sidenav-close')
    }
    //todo -1 to fix visual bug
    const [ indexOfActiveLink, setIndexOfActiveLink ] = useState(-1);

    useEffect(() => {
        const savedIndex = JSON.parse(localStorage.getItem('current-nav-index') || '0') as number;
        setIndexOfActiveLink(savedIndex);
    }, [])

    useEffect(() => {
        localStorage.setItem('current-nav-index', JSON.stringify(indexOfActiveLink));
    }, [ indexOfActiveLink ])

    return (
        <>
            <li className={ indexOfActiveLink === 0 ? "active" : "" }
                onClick={ () => setIndexOfActiveLink(0) }
            >
                <NavLink to="/main"
                         className={ linkClasses.join(" ") }
                >List of projects</NavLink>
            </li>

            <li className={ indexOfActiveLink === 1 ? "active" : "" }
                onClick={ () => setIndexOfActiveLink(1) }
            >
                <NavLink to="/main/archive"
                         className={ linkClasses.join(" ") }
                >Archive</NavLink>
            </li>

            <li className={ indexOfActiveLink === 2 ? "active" : "" }
                onClick={ () => setIndexOfActiveLink(2) }
            >
                <NavLink to="/main/about"
                         className={ linkClasses.join(" ") }
                >About me</NavLink>
            </li>
        </>
    );
}