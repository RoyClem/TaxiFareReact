import React, { Component } from 'react';

export class NumPassengers extends Component {
    render() {
        return (
            <React.Fragment>
                <label><b>Number Passengers</b></label>
                <select name="numPassenger" onChange={this.props.onChangeValue}>
                    {this.props.numPassengers.map((x) => {
                        return <option key={x} xalue={x}>{x}</option>;
                    })}
                    </select>
            </React.Fragment>
        );
    }
}