import React, { FC } from 'react';
import { ButtonSize, TableProject } from "../../interfaces/interfaces";
import ContentLink from "../contentLink/ContentLink";

type TableSectionProps = {
    projects: TableProject[],
    isLast: boolean,
    isFirst: boolean,
    sectionId: number
}

const TableSection: FC<TableSectionProps> = ( { projects, isLast, isFirst, sectionId } ) => {
    return (
        <div className="container"
             style={ { minHeight: 'calc(100vh - 30px)', marginTop: '30px' } }
             id={ `section-${ sectionId }` }
        >
            <div className="center ">
                <h1>{ projects[0].sectionName }</h1>
            </div>

            <table className="centered highlight">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Short description</th>
                    <th>Link to ready project</th>
                    <th>Link to source code</th>
                </tr>
                </thead>

                <tbody>
                {
                    projects.map(value =>
                        <tr>
                            <td>{ value.name }</td>
                            <td>{ value.shortDescription }</td>
                            <td>
                                <a className={ `waves-effect waves-teal btn-flat ${ value.readyProjectLink === "-" ? "disabled" : "" }` }
                                   href={ value.readyProjectLink === "-" ? "" : value.readyProjectLink }
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    { value.readyProjectLink === "-" ? "-" : "check here" }
                                </a>
                            </td>
                            <td>
                                <a className="waves-effect waves-teal btn-flat"
                                   href={ value.sourceLink }
                                   target="_blank"
                                   rel="noopener noreferrer"
                                >
                                    check here
                                </a>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>

            {
                isFirst ?
                    <div/>
                    :
                    <ContentLink content={ "Go previous section" }
                                 scrollTarget={ `section-${ sectionId - 1 }` }
                                 styles={ { marginTop: '30px' } }
                                 btnSize={ ButtonSize.NORMAL }
                                 icon={ {
                                     name: "arrow_back_ios",
                                     direction: "left"
                                 } }
                    />
            }

            {
                isLast ?
                    <div/>
                    :
                    <ContentLink content={ "Go next section" }
                                 scrollTarget={ `section-${ sectionId + 1 }` }
                                 styles={ { marginTop: '30px' } }
                                 btnSize={ ButtonSize.NORMAL }
                                 icon={ {
                                     name: "arrow_forward_ios",
                                     direction: "right"
                                 } }
                    />
            }
        </div>
    );
};

export default TableSection;
