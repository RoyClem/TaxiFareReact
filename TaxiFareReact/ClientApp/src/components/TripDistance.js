import React from 'react';

export function TripDistance(props) {
    return (
        <React.Fragment>
            <label><b>Trip Distance</b></label>
            <input type="text" className="text-right" value={props.tripDis} onChange={props.onChangeValue} title="in miles" placeholder="in miles" id="tripDis" />
        </React.Fragment>
    );
}
