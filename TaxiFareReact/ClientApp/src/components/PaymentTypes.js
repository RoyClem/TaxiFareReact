import React from 'react';

export function PaymentTypes(props)  {
    return (
        <React.Fragment>
            <label><b>Payment Types</b></label>
            <select name="payType" onChange={props.onChangeValue}>
                {props.payTypes.map((x) => {
                    return <option key={x} xalue={x}>{x}</option>;
                })}
                </select>
        </React.Fragment>
    );
}
