import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { Link } from "react-scroll";
import { ImageWrapper } from "../../interfaces/interfaces";
import secondTab from "../../resources/background2.jpg";
import firstTab from "../../resources/background3.jpg";
import './EntryParallax.css';

type EntryParallaxType = {
    header: string,
    description: string,
    btnName: string,
    image: string
}

const images: ImageWrapper[] = [
    { name: "firstTab", image: firstTab },
    { name: "secondTab", image: secondTab }
]

const EntryParallax: FC<EntryParallaxType> = ( { header, description, btnName, image } ) => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="parallax-container entry-par-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <br/>
                    <Header content={ header }/>
                    <Description content={ description }/>
                    <ContentLink content={ btnName }/>
                    <br/>
                </div>
            </div>

            <div className="parallax entry-parallax">
                <img src={ images.filter(value => value.name === image)[0].image }
                     alt=""
                />
            </div>
        </div>
    );
};

export default EntryParallax;

const Header: FC<{ content: string }> = ( { content } ) =>
    <h1 className="header center">{ content }</h1>

const Description: FC<{ content: string }> = ( { content } ) =>
    <div className="row center">
        <h5 className="header col s12">
            { content }
        </h5>
    </div>

const ContentLink: FC<{ content: string }> = ( { content } ) =>
    <div className="row center">
        <Link to="project-0"
              spy={ true }
              smooth={ true }
              duration={ 1000 }
              delay={ 250 }
        >
            <a className="btn-large waves-effect waves-light teal lighten-1">
                { content }
            </a>
        </Link>
    </div>