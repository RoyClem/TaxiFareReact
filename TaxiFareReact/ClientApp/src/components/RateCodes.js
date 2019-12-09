import React, { Component } from 'react';

export class RateCodes extends Component {
    render() {
        return (
            <React.Fragment>
                <label><b>Rate Code</b></label>
                <select name="rateCodes" onChange={this.props.onChangeValue}>
                    {this.props.rates.map((x) => {
                        return <option key={x} xalue={x}>{x}</option>;
                    })}
                </select>
            </React.Fragment>
        );
    }
}