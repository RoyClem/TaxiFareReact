import React from 'react';

export function Result(props) {

    if (props.result) {
        return (
            <React.Fragment>
                <div id='result' className="h4" style={{ margin: '10px' }} />
            </React.Fragment>
        );
    }
    else
        return null;
}
