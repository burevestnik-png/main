import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { Link } from "react-scroll";
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
    projectId: number,
    isLast: boolean,
    isFirst: boolean
}

const MainProject: FC<MainProjectType> = ( { project, projectId, isLast, isFirst } ) => {
    useEffect(() => {
        const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax, {});
    }, []);

    return (
        <div className="main-project"
             id={ `project-${ projectId }` }
        >
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
                        {
                            isFirst ?
                                <div/>
                                :
                                <Link to={ `project-${ projectId - 1 }` }
                                      spy={ true }
                                      smooth={ true }
                                      duration={ 1000 }
                                      delay={ 250 }
                                >
                                    <a className="waves-effect waves-light btn-small"
                                       style={ { marginRight: '30px' } }
                                    >
                                        <i className="material-icons left">arrow_back_ios</i>
                                        Go back
                                    </a>
                                </Link>
                        }

                        <a className="waves-effect waves-light btn-small"
                           href={ project.readyProjectLink }
                           style={ { marginRight: '30px' } }
                        >
                            <i className="material-icons right">trending_up</i>
                            Project link
                        </a>

                        <a className="waves-effect waves-light btn-small"
                           href={ project.sourceLink }
                           style={ { marginRight: '30px' } }
                        >
                            <i className="material-icons right">favorite_border</i>
                            GitHub
                        </a>

                        {
                            isLast ?
                                <div/>
                                :
                                <Link to={ `project-${ projectId + 1 }` }
                                      spy={ true }
                                      smooth={ true }
                                      duration={ 1000 }
                                      delay={ 250 }
                                >
                                    <a className="waves-effect waves-light btn-small">
                                        <i className="material-icons right">arrow_forward_ios</i>
                                        Go forward
                                    </a>
                                </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProject;
