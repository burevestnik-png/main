import React, { FunctionComponent } from 'react';
import EntryParallax from "../components/entryParallax/EntryParallax";
import MainProject from "../components/mainProject/MainProject";
import { Project } from "../interfaces/interfaces";

const initState: Project[] = [
    {
        name: "Awesome colors",
        readyProjectLink: "https://burevestnik-png.github.io/my-awesome-colors/",
        sourceLink: "https://github.com/burevestnik-png/my-awesome-colors",
        description: `This website provides you to save your favourite 
                      colors in pretty good design (now only during session). 
                      It is my first learning React project.`,
        picture: "my-awes-col-project"
    },
    {
        name: "Web lab 1",
        readyProjectLink: "https://se.ifmo.ru/~s284721/web_lab1/",
        sourceLink: "https://github.com/burevestnik-png/web-lab1",
        description: `This is first lab in discipline WEB-programming`,
        picture: "web-lab1-project"
    }
]

const MainPage: FunctionComponent = () => {
    return (
        <>
            <EntryParallax/>
            { initState.map(( project, index ) =>
                <MainProject project={ project }
                             isFirst={ index === 0 }
                />) }
        </>
    );
}

export default MainPage;
