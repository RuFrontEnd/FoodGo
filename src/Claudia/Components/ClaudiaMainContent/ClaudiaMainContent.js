import React from 'react';
import './ClaudiaMainContent.scss';


function ClaudiaMainContent(props) {

    return (
        <>
            <div className="claudia-background">
                {props.children}
            </div>
        </>
    )
}

export default ClaudiaMainContent;