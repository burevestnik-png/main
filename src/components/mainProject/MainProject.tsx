import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { ImageWrapper, Project } from "../../interfaces/interfaces";
import myAwesColProject from "../../resources/my-awes-col-project.png";
import webLab1 from "../../resources/web-lab-1.png";
import './MainProject.css';


const images: ImageWrapper[] = [
    { image: myAwesColProject, name: "my-awes-col-project" },
    { image: webLab1, name: "web-lab1-project" }
]

type MainProjectType = {
    project: Project,
    isFirst: boolean
}

const MainProject: FC<MainProjectType> = ( { project, isFirst } ) => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="main-project" id={isFirst ? "first-project" : ""}>
            <div className="parallax-container">
                <div className="parallax">
                    <img src={ images.filter(value => value.name === project.picture)[0].image }
                         alt=""
                    />
                </div>
            </div>
            <div className="container section row">
                <div className="col s12 center">
                    <h4>{ project.name }</h4>
                    <p className="light">
                        { project.description }
                    </p>
                    <div className="center-align">
                        <a className="waves-effect waves-light btn-small"
                           href={ project.readyProjectLink }
                           style={ { marginRight: '30px' } }
                        >
                            <i className="material-icons right">trending_up</i>
                            Project link
                        </a>

                        <a className="waves-effect waves-light btn-small"
                           href={ project.sourceLink }
                        >
                            <i className="material-icons right">favorite_border</i>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProject;
