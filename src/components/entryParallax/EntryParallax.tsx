import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import codeJpeg from "../../resources/code.jpg";

const EntryParallax: FC = () => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.entry-parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="parallax-container">
            <div className="section no-pad-bot">
                <div className="container">
                    <br/>
                    <h1 className="header center white-text">Projects List</h1>
                    <div className="row center">
                        <h5 className="header col s12 light white-text">
                            Here you can see all mine projects: from easiest to hardest
                        </h5>
                    </div>
                    <div className="row center">
                        <a href="http://materializecss.com/getting-started.html"
                           id="download-button"
                           className="btn-large waves-effect waves-light teal lighten-1"
                        >
                            Let's start
                        </a>
                    </div>
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