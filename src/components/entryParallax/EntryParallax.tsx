import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { Link } from "react-scroll";
import codeJpeg from "../../resources/background3.jpg";
import './EntryParallax.css';

const EntryParallax: FC = () => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="parallax-container entry-par-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <br/>
                    <Header/>
                    <Description/>
                    <ContentLink/>
                    <br/>
                </div>
            </div>

            <div className="parallax entry-parallax">
                <img src={ codeJpeg }
                     alt=""
                />
            </div>
        </div>
    );
};

export default EntryParallax;

const Header = () =>
    <h1 className="header center">Project List</h1>

const Description = () =>
    <div className="row center">
        <h5 className="header col s12">
            Here you can see all mine projects: from easiest (in archive) to hardest (here)
        </h5>
    </div>

const ContentLink = () =>
    <div className="row center">
        <Link to="project-0"
              spy={ true }
              smooth={ true }
              duration={ 1000 }
              delay={ 250 }
        >
            <a className="btn-large waves-effect waves-light teal lighten-1">
                Let's start
            </a>
        </Link>
    </div>