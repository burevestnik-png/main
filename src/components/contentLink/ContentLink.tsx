import React, { FC } from 'react';
import { Link } from "react-scroll";
import { ButtonSize, IIcon } from "../../interfaces/interfaces";

type ContentLinkProps = {
    content: string,
    scrollTarget: string,
    styles?: object,
    btnSize: ButtonSize,
    icon?: IIcon
}

const ContentLink: FC<ContentLinkProps> = ( {
                                                content,
                                                scrollTarget,
                                                styles,
                                                btnSize,
                                                icon
                                            } ) =>
    <div className="row center"
         style={ styles ? styles : {} }
    >
        <Link to={ scrollTarget }
              spy={ true }
              smooth={ true }
              duration={ 1000 }
              delay={ 250 }
        >
            <a className={ `${ btnSize } waves-effect waves-light teal lighten-1` }>
                { icon ? <i className={ `material-icons ${ icon.direction }` }>{ icon.name }</i> : <div/> }
                { content }
            </a>
        </Link>
    </div>

export default ContentLink;
