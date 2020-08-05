import React, { FC } from 'react';
import EntryParallax from "../components/entryParallax/EntryParallax";

const entryParState = {
    header: "Archive",
    description: "Here you can see all mine projects: from easiest to hardest",
    btnName: "Check",
    image: "secondTab",
    textColor: "white",
    scrollTarget: ""
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
        </>
    );
};

export default ArchivePage;
