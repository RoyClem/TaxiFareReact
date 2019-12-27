import React from 'react';

export function NumPassengers(props) {
    return (
        <React.Fragment>
            <label><b>Number Passengers</b></label>
            <select name="numPassenger" onChange={props.onChangeValue}>
                {props.numPassengers.map((x) => {
                    return <option key={x} xalue={x}>{x}</option>;
                })}
            </select>
        </React.Fragment>
    );
}