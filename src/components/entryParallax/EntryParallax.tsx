import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { ButtonSize, ImageWrapper } from "../../interfaces/interfaces";
import secondTab from "../../resources/background2.jpg";
import firstTab from "../../resources/background3.jpg";
import ContentLink from "../contentLink/ContentLink";
import './EntryParallax.css';

type EntryParallaxProps = {
    header: string,
    description: string,
    btnName: string,
    image: string,
    textColor: string,
    scrollTarget: string
}

const images: ImageWrapper[] = [
    { name: "firstTab", image: firstTab },
    { name: "secondTab", image: secondTab }
]

const EntryParallax: FC<EntryParallaxProps> = ( {
                                                    header,
                                                    description,
                                                    btnName,
                                                    image,
                                                    textColor,
                                                    scrollTarget
                                                } ) => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="parallax-container entry-par-container">
            <div className="section no-pad-bot">
                <div className={ `container ${ textColor === "white" ? "white-text" : "" }` }>
                    <br/>
                    <Header content={ header }/>
                    <Description content={ description }/>
                    <ContentLink content={ btnName }
                                 scrollTarget={ scrollTarget }
                                 btnSize={ ButtonSize.LARGE }
                    />
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