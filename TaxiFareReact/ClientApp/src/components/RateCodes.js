import React from 'react';

export function RateCodes(props)  {
    return (
        <React.Fragment>
            <label><b>Rate Code</b></label>
            <select name="rateCodes" onChange={props.onChangeValue}>
                {props.rates.map((x) => {
                    return <option key={x} xalue={x}>{x}</option>;
                })}
            </select>
        </React.Fragment>
    );
}
