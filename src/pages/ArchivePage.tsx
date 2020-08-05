import React, { FC } from 'react';
import EntryParallax from "../components/entryParallax/EntryParallax";
import TableSection from "../components/tableSection/TableSection";
import { SectionName } from "../interfaces/interfaces";

const entryParState = {
    header: "Archive",
    description: "Here you can see all mine projects: from easiest to hardest",
    btnName: "Check",
    image: "secondTab",
    textColor: "white",
    scrollTarget: "section-0"
}

const initStateContent = {
    webProjects: [
        {
            name: "React with ts learning project",
            readyProjectLink: "https://burevestnik-png.github.io/react-with-ts-learning-project/",
            sourceLink: "https://github.com/burevestnik-png/react-with-ts-learning-project",
            shortDescription: "This is my first experience to make React app with TypeScript",
            sectionName: SectionName.WEB
        },
        {
            name: "React with Express learning project",
            readyProjectLink: "-",
            sourceLink: "https://github.com/burevestnik-png/react-with-express-learning-project",
            shortDescription: "This is first my learning project with full front-end (ReactJs) and back-end (ExpressJs).",
            sectionName: SectionName.WEB
        },
        {
            name: "My awesome colors",
            readyProjectLink: "https://burevestnik-png.github.io/my-awesome-colors/",
            sourceLink: "https://github.com/burevestnik-png/my-awesome-colors",
            shortDescription: "This website provides you to save your favourite colors in pretty good design (now only during session).",
            sectionName: SectionName.WEB
        },
        {
            name: "Web lab 1",
            readyProjectLink: "https://se.ifmo.ru/~s284721/web_lab1/",
            sourceLink: "https://github.com/burevestnik-png/web-lab1",
            shortDescription: "This is first lab in discipline WEB-programming",
            sectionName: SectionName.WEB
        },
        {
            name: "Physics simulation",
            readyProjectLink: "https://se.ifmo.ru/~s284721/physics_simulation/",
            sourceLink: "https://github.com/burevestnik-png/physics-simulation",
            shortDescription: "This is a simulation of obtaining an interference pattern when the rays pass through the Frenel biprism",
            sectionName: SectionName.WEB
        }
    ],
    cpbProjects: [
        {
            name: "CPB labs",
            readyProjectLink: "-",
            sourceLink: "https://github.com/burevestnik-png/computer-professional-basics",
            shortDescription: "Здесь находятся все лабы, связанные с ОПД.",
            sectionName: SectionName.CPB
        }
    ]
}

const ArchivePage: FC = () => {
    return (
        <>
            <EntryParallax header={ entryParState.header }
                           description={ entryParState.description }
                           btnName={ entryParState.btnName }
                           image={ entryParState.image }
                           textColor={ entryParState.textColor }
                           scrollTarget={ entryParState.scrollTarget }
            />

            <TableSection projects={ initStateContent.webProjects }
                          isLast={ false }
                          isFirst={true}
                          sectionId={0}
            />

            <TableSection projects={ initStateContent.cpbProjects }
                          isLast={ true }
                          isFirst={false}
                          sectionId={1}
            />
        </>
    );
};

export default ArchivePage;
