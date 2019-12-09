import React, { Component } from 'react';

export class PaymentTypes extends Component {
    render() {
        return (
            <React.Fragment>
                <label><b>Payment Types</b></label>
                <select name="payType" onChange={this.props.onChangeValue}>
                    {this.props.payTypes.map((x) => {
                        return <option key={x} xalue={x}>{x}</option>;
                    })}
                    </select>
            </React.Fragment>
        );
    }
}