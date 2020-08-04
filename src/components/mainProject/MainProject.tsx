import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { Project } from "../../interfaces/interfaces";
import pic from "../../resources/background2.jpg";



type MainProjectType = {
    project: Project
}

const MainProject: FC<MainProjectType> = ( { project } ) => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <>
        <div className="parallax-container valign-wrapper">
            <div className="section no-pad-bot">
                <div className="container">
                    <div className="row center">
                        <h5 className="header col s12 black-text">A modern responsive front-end framework based on Material
                            Design</h5>
                    </div>
                </div>
            </div>
            <div className="parallax main-project-parallax">
                <img src={pic}
                     alt="Unsplashed background img 2"
                />
                </div>
        </div>
            <div className="container">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <h3><i className="mdi-content-send brown-text"></i></h3>
                            <h4>Contact Us</h4>
                            <p className="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a
                                sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum
                                sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed.
                                Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida
                                ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum
                                primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        </div>
                    </div>

                </div>
            </div>
            </>
);
};

export default MainProject;
