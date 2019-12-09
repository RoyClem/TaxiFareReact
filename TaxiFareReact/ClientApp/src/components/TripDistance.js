import React, { Component } from 'react';

export class TripDistance extends Component {
    render() {
        return (
            <React.Fragment>
                <label><b>Trip Distance</b></label>
                <input type="text" className="text-right" value={this.props.tripDis} onChange={this.props.onChangeValue} placeholder="in Miles" id="tripDis" />
            </React.Fragment>
        );
    }
}