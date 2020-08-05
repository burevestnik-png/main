import M from "materialize-css";
import React, { FC, useEffect } from 'react';
import { ButtonSize, ImageWrapper, Project } from "../../interfaces/interfaces";
import myAwesColProject from "../../resources/my-awes-col-project.png";
import webLab1 from "../../resources/web-lab-1.png";
import ContentLink from "../contentLink/ContentLink";

import './MainProject.css';


const images: ImageWrapper[] = [
    { image: myAwesColProject, name: "my-awes-col-project" },
    { image: webLab1, name: "web-lab1-project" }
]

type MainProjectProps = {
    project: Project,
    projectId: number,
    isLast: boolean,
    isFirst: boolean
}

const MainProject: FC<MainProjectProps> = ( { project, projectId, isLast, isFirst } ) => {
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
                    <div style={ { display: "flex", justifyContent: "center" } }>
                        {
                            isFirst ?
                                <div/>
                                :
                                <ContentLink content={ "Go back" }
                                             scrollTarget={ `project-${ projectId - 1 }` }
                                             btnSize={ ButtonSize.SMALL }
                                             styles={ { marginRight: '30px' } }
                                             icon={ {
                                                 name: "arrow_back_ios",
                                                 direction: "left"
                                             } }
                                />
                        }

                        <a className="waves-effect waves-light btn-small"
                           href={ project.readyProjectLink }
                           style={ { marginRight: '30px' } }
                           target="_blank"
                        >
                            <i className="material-icons right">trending_up</i>
                            Project link
                        </a>

                        <a className="waves-effect waves-light btn-small"
                           href={ project.sourceLink }
                           style={ { marginRight: '30px' } }
                           target="_blank"
                        >
                            <i className="material-icons right">favorite_border</i>
                            GitHub
                        </a>

                        {
                            isLast ?
                                <div/>
                                :
                                <ContentLink content={ "Go next" }
                                             scrollTarget={ `project-${ projectId + 1 }` }
                                             btnSize={ ButtonSize.SMALL }
                                             icon={ {
                                                 name: "arrow_forward_ios",
                                                 direction: "right"
                                             } }
                                />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainProject;
