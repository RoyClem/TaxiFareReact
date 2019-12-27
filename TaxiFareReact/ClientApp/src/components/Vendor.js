import React from 'react';

export function Vendor(props) {
    return (
        <React.Fragment>
            <label><b>Vendor Id</b></label>
            <select name="vendor" onChange={props.onChangeValue}>
                {props.vendors.map((x) => {
                    return <option key={x} xalue={x}>{x}</option>;
                })}
                </select>
        </React.Fragment>
    );
}
