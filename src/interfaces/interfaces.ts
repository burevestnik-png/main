export interface Project {
    name: string,
    readyProjectLink: string,
    sourceLink: string,
    description: string,
    picture: string
}

export interface ImageWrapper {
    image: any,
    name: string
}

export interface TableProject {
    name: string,
    readyProjectLink: string,
    sourceLink: string,
    shortDescription: string,
    sectionName: SectionName
}

export enum SectionName {
    WEB = "Web",
    JAVA_PROGRAMMING = "Java programming",
    CPB = "Computer professional basics"
}

export interface IIcon {
    name: string,
    direction: string
}

export enum ButtonSize {
    NORMAL = "btn",
    LARGE = "btn-large",
    SMALL = "btn-small"
}