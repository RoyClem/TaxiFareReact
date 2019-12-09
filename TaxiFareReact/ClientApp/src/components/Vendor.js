import React, { Component } from 'react';

export class Vendor extends Component {
    render() {
        return (
            <React.Fragment>
                <label><b>Vendor Id</b></label>
                <select name="vendor" onChange={this.props.onChangeValue}>
                    {this.props.vendors.map((x) => {
                        return <option key={x} xalue={x}>{x}</option>;
                    })}
                    </select>
            </React.Fragment>
        );
    }
}