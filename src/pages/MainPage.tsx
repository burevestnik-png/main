import React, { FunctionComponent } from 'react';
import EntryParallax from "../components/entryParallax/EntryParallax";
import MainProject from "../components/mainProject/MainProject";
import { Project } from "../interfaces/interfaces";

const initState: Project[] = [
    {
        readyProjectLink: "string",
        sourceLink: "string",
        description: "string"
    }
]

const MainPage: FunctionComponent = () => {
    return (
        <>
            <EntryParallax/>
            { initState.map(project => <MainProject project={ project }/>
            ) }
        </>
    );
}

export default MainPage;
